package main

import (
	"strings"
	"testing"

	"github.com/pingcap/tidb/parser"
	"github.com/pingcap/tidb/parser/ast"
	"github.com/pingcap/tidb/parser/charset"
	"github.com/pingcap/tidb/parser/format"
	"github.com/pingcap/tidb/types"
	_ "github.com/pingcap/tidb/types/parser_driver"
	driver "github.com/pingcap/tidb/types/parser_driver"
)

// https://docs.pingcap.com/zh/tidb/dev/mysql-compatibility
func TestGeometry(t *testing.T) {
	p1 := parser.New()
	_, _, err := p1.Parse("CREATE TABLE test (`theGeom` varchar(255) DEFAULT NULL) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8mb3\n  COLLATE = utf8mb3_bin\n  ROW_FORMAT = DYNAMIC COMMENT ='用户表';", charset.CharsetUTF8MB3, "")
	if err != nil {
		panic(err)
	}
}

func TestParser1(t *testing.T) {
	p1 := parser.New()
	stmtNodes1, _, err := p1.Parse("insert into test (id) select id from users;", "", "")
	if err != nil {
		panic(err)
	}

	_ = stmtNodes1[0].(*ast.InsertStmt)

	s := new(strings.Builder)
	restoreCtx := format.NewRestoreCtx(0, s)
	err = stmtNodes1[0].Restore(restoreCtx)
	if err != nil {
		panic(err)
	}
	println(s.String())
}

func TestParser2(t *testing.T) {
	p1 := parser.New()
	stmtNodes1, _, err := p1.Parse("select count(*) from test.test", "", "")
	if err != nil {
		panic(err)
	}
	println(stmtNodes1[0].Text())
	in2 := new(strings.Builder)
	restoreCtx2 := format.NewRestoreCtx(0, in2)
	err = stmtNodes1[0].Restore(restoreCtx2)
	if err != nil {
		panic(err)
	}
	println(in2.String())

	p2 := parser.New()
	stmtNodes2, _, err := p2.Parse("select count(id) from test.test", "", "")
	if err != nil {
		panic(err)
	}

	if stmt, ok := stmtNodes2[0].(*ast.SelectStmt); ok {
		stmt.Fields = stmtNodes1[0].(*ast.SelectStmt).Fields
	}

	in := new(strings.Builder)
	restoreCtx2 = format.NewRestoreCtx(0, in)
	err = stmtNodes2[0].Restore(restoreCtx2)
	if err != nil {
		panic(err)
	}

	println(in.String())
}

func TestParser(t *testing.T) {
	p1 := parser.New()
	stmtNodes1, _, err := p1.Parse("select count(id) from test.test", "", "")
	println(stmtNodes1[0].Text())
	if stmt, ok := stmtNodes1[0].(*ast.SelectStmt); ok {
		fieldList := new(ast.FieldList)

		aggregateFunc := new(ast.AggregateFuncExpr)
		selectField := new(ast.SelectField)

		aggregateFunc.F = "count"

		valueExpr := new(driver.ValueExpr)

		datum := new(types.Datum)
		datum.SetInt64(1)

		valueExpr.Datum = *datum

		aggregateFunc.Args = append(aggregateFunc.Args, valueExpr)

		selectField.Expr = aggregateFunc

		fieldList.Fields = append(fieldList.Fields, selectField)

		stmt.Fields = fieldList

		in := new(strings.Builder)
		restoreCtx := format.NewRestoreCtx(0, in)
		err = stmt.Restore(restoreCtx)
		if err != nil {
			panic(err)
		}
		println("in.String():", in.String())
	}
}

func TestParser3(t *testing.T) {
	c := new(colExtract)
	p1 := parser.New()
	stmtNodes1, _, err := p1.Parse("select count(id) from test.test", "", "")
	if err != nil {
		panic(err)
	}
	node, ok := stmtNodes1[0].Accept(c)
	if ok {

	}
	println(node.Text())
	in := new(strings.Builder)
	node.Restore(format.NewRestoreCtx(0, in))

	println(in.String())
}

type colExtract struct{}

func (c *colExtract) Enter(in ast.Node) (ast.Node, bool) {
	switch n := in.(type) {
	case *ast.FieldList:
		fieldList := new(ast.FieldList)

		aggregateFunc := new(ast.AggregateFuncExpr)
		selectField := new(ast.SelectField)

		aggregateFunc.F = "count"

		valueExpr := new(driver.ValueExpr)

		datum := new(types.Datum)
		datum.SetInt64(1)

		valueExpr.Datum = *datum

		aggregateFunc.Args = append(aggregateFunc.Args, valueExpr)

		selectField.Expr = aggregateFunc

		fieldList.Fields = append(fieldList.Fields, selectField)

		n = fieldList

		return n, true
	}
	return in, false
}

func (c *colExtract) Leave(in ast.Node) (ast.Node, bool) {
	return in, true
}

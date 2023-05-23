package main

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIterateString(t *testing.T) {
	// iterate string
	for _, c := range "hello" {
		t.Log(string(c))
	}
}

type account struct {
	balance float32
}

func TestErrIterateRangeCopyRange(t *testing.T) {
	accounts := []account{
		{balance: 100.},
		{balance: 200.},
		{balance: 300.},
	}
	for _, a := range accounts {
		a.balance += 1000
		t.Log(a.balance)
		t.Log(accounts[0].balance)
	}
	assert.NotEqual(t, 1100., accounts[0].balance)
	assert.NotEqual(t, 1200., accounts[1].balance)
	assert.NotEqual(t, 1300., accounts[2].balance)
}

// test success for range
func TestIterateRange(t *testing.T) {
	accounts := []account{
		{balance: 100.},
		{balance: 200.},
		{balance: 300.},
	}
	for i := range accounts {
		accounts[i].balance += 1000
		t.Log(accounts[i].balance)
	}
	assert.Equal(t, 1100., float64(accounts[0].balance))
	assert.Equal(t, 1200., float64(accounts[1].balance))
	assert.Equal(t, 1300., float64(accounts[2].balance))
}

func TestNestSwitch(t *testing.T) {
	for i := 0; i < 5; i++ {
		fmt.Printf("%d ", i)
		switch i {
		default:
		case 2:
			break
		}
	}
}

func TestNestSwitchWithLoop(t *testing.T) {
Loop:
	for i := 0; i < 5; i++ {
		fmt.Printf("%d ", i)
		switch i {
		default:
		case 2:
			break Loop
		}
	}
}

package main

import (
	"sync"
	"testing"
)

func TestSyncMap(t *testing.T) {
	sm := new(sync.Map)
	sm.Store("foo", "bar")
	value, _ := sm.Load("foo")
	if value.(string) != "bar" {
		t.Error("Expected bar, got", value)
	}

	loadAndDelete, exist := sm.LoadAndDelete("foo")
	if !exist {
		t.Error("Expected true, got", exist)
	}
	if loadAndDelete.(string) != "bar" {
		t.Error("Expected bar, got", loadAndDelete)
	}

	_, ok := sm.Load("foo")
	if ok {
		t.Error("Expected false, got", ok)
	}
}

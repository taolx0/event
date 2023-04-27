package main

import "testing"

func Test_isTimeout(t *testing.T) {
	type args struct {
		err error
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isTimeout(tt.args.err); got != tt.want {
				t.Errorf("isTimeout() = %v, want %v", got, tt.want)
			}
		})
	}
}

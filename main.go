// 고무오리 디버깅.go
// https://www.acmicpc.net/problem/20001

package main

import (
	"fmt"
)

func main() {
	var N int
	i := 1
	level := 1
	boundary := 6

	fmt.Scanf("%d", &N)
	for i < N {
		i += boundary
		boundary += 6
		level += 1
	}
	fmt.Println(level)
}

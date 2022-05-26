package main

import (
	"fmt"
	"time"
)

func run() {
	for i := 0; i < 5; i++ {
		fmt.Println("i is ", i)
	}
}

func greeting() {
	fmt.Println("Hello")
}

func main() {

	go run()      // pushed to the stack
	go greeting() // pushed to the stack
	// greeting get popped first
	// run get's popped last
	time.Sleep(time.Second)
}

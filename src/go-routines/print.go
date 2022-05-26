package goroutines

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

// Init init
func Init() {

	go run()      // pushed to the stack
	go greeting() // pushed to the stack
	// greeting get popped first
	// run get's popped last
	time.Sleep(time.Second)
}

package main

import (
	"fmt"
	"sync"
)

func run(wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < 5; i++ {
		fmt.Println("i is ", i)
	}
}

func greeting(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("Hello")
}

func main() {

	var wg sync.WaitGroup
	wg.Add(2)
	go run(&wg)      // pushed to the stack
	go greeting(&wg) // pushed to the stack
	// greeting get popped first
	// run get's popped last
	wg.Wait()
}

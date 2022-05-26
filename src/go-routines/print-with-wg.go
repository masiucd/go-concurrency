package goroutines

import (
	"fmt"
	"sync"
)

func run2(wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < 5; i++ {
		fmt.Println("i is ", i)
	}
}

func greeting2(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("Hello")
}

// InitWithWait init
func InitWithWait() {

	var wg sync.WaitGroup
	wg.Add(2)
	go run2(&wg)      // pushed to the stack
	go greeting2(&wg) // pushed to the stack
	// greeting get popped first
	// run get's popped last
	wg.Wait()
}

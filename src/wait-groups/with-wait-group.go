package waitgroups

import (
	"fmt"
	"sync"
	"time"
)

func run() {
	var wg = sync.WaitGroup{}
	wg.Add(2) // amount of go routines we are waiting for
	start := time.Now()
	go goForARun(&wg)
	go swiming(&wg)
	wg.Wait() // block the code until finishes

	fmt.Println("Guess we are done!!")
	elapsed := time.Since(start)
	fmt.Printf("Procces took %v\n", elapsed)

}

// RunWaitGroupsApp init
func RunWaitGroupsApp() {
	run()
}

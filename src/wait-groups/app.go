package waitgroups

import (
	"fmt"
	"sync"
	"time"
)

var wg = sync.WaitGroup{}

func run() {
	wg.Add(2) // amount of go routines we are waiting for
	start := time.Now()
	go goForARun()
	go swiming()
	wg.Wait() // block the code

	fmt.Println("Guess we are done!!")
	elapsed := time.Since(start)
	fmt.Printf("Procces took %v\n", elapsed)

}

// RunWaitGroupsApp init
func RunWaitGroupsApp() {
	run()
}

func goForARun() {
	time.Sleep(time.Second * 2)
	fmt.Println("Going out for a run!!!")
	wg.Done() // decrements the counter
}
func swiming() {
	time.Sleep(time.Second * 2)
	fmt.Println("Swiming !!!")
	wg.Done() // decrements the counter
}

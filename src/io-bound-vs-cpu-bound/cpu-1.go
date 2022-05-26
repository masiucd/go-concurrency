package ioboundvscpubound

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

var wg = sync.WaitGroup{}

// Init init
func Init() {
	fmt.Println(runtime.GOMAXPROCS(0))
	wg.Add(4)
	start := time.Now()
	go countA()
	go countB()
	go countC()
	go countD()

	wg.Wait() // Do not end the program until all badges have been returned, ie all go routines have reported that they are done.
	end := time.Since(start)
	x := fmt.Sprintf("Time took %v ms\n", end.Seconds())
	fmt.Println(x)
}

func countA() {
	fmt.Println("start with count A")
	for i := 0; i < 100_000_000_000; i++ {
	}
	fmt.Println("End count A")
	wg.Done()
}
func countB() {
	fmt.Println("start with count B")
	for i := 0; i < 100_000_000_000; i++ {
	}
	fmt.Println("End count B")
	wg.Done()
}
func countC() {
	fmt.Println("start with count C")
	for i := 0; i < 100_000_000_000; i++ {
	}
	fmt.Println("End count C")
	wg.Done()
}
func countD() {
	fmt.Println("start with count D")
	for i := 0; i < 100_000_000_000; i++ {
	}
	fmt.Println("End count D")
	wg.Done()
}

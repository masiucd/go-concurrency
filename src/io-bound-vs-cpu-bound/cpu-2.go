package ioboundvscpubound

import (
	"fmt"
	"runtime"
	"time"
)

// Init2 init
func Init2() {
	fmt.Println(runtime.GOMAXPROCS(0))
	c := make(chan string)
	start := time.Now()
	go countA2(c)
	go countB2(c)
	go countC2(c)
	go countD2(c)

	for i := 0; i < 4; i++ {
		fmt.Println(<-c)
	}
	end := time.Since(start)
	fmt.Printf(" elapsed time: %v ms\n", end.Seconds()*1000)
}

func countA2(c chan string) {
	fmt.Println("start with count A")
	for i := 0; i < 100_000_000_000; i++ {
	}
	c <- "End count A"

}
func countB2(c chan string) {
	fmt.Println("start with count B")
	for i := 0; i < 100_000_000_000; i++ {
	}
	c <- "End count B"

}
func countC2(c chan string) {
	fmt.Println("start with count C")
	for i := 0; i < 100_000_000_000; i++ {
	}
	c <- "End count C"

}
func countD2(c chan string) {
	fmt.Println("start with count D")
	for i := 0; i < 100_000_000_000; i++ {
	}
	c <- "End count D"

}

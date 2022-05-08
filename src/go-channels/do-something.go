package gochannels

import (
	"fmt"
	"time"
)

var ch = make(chan string)

// DoSomething init
func DoSomething() {

	start := time.Now()
	go runB()
	go runA()

	fmt.Println(<-ch)
	fmt.Println(<-ch)
	elapsed := time.Since(start)
	fmt.Println("Procces took ", elapsed)
}

func runA() {
	time.Sleep(time.Second * 2)
	fmt.Println("run a")
	ch <- "done with run a"
}

func runB() {
	time.Sleep(time.Second * 2)
	fmt.Println("run b")
	ch <- "done with run b"
}

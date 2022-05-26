package channels

import (
	"fmt"
	"time"
)

var result = 0
var width = 100
var height = 200

// InitSync init
func InitSync() {
	goChan := make(chan int)
	mainChan := make(chan string)
	go calculateTriangle(width, height, goChan)
	go reportResult(goChan, mainChan)
	<-mainChan
}

func calculateTriangle(w, h int, goChan chan int) {
	fmt.Println("Calculating for 3 seconds....")
	time.Sleep(time.Second * 3)
	result = (width * height) / 2
	goChan <- result
}

func reportResult(goChan chan int, mainChan chan string) {
	time.Sleep(time.Second * 1)
	s := fmt.Sprintf("Result of %d and %d is %d", width, height, <-goChan)
	fmt.Println(s)
	// Blocks until it can reads something from goChan
	mainChan <- s
}

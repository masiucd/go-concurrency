package channels

import (
	"fmt"
	"sync"
	"time"
)

// InitSync2 init
func InitSync2() {
	var wg sync.WaitGroup
	wg.Add(1) // waiting for one go routine
	go func() {
		var value = 10
		var result = 0
		goChan := make(chan int)
		mainChan := make(chan string)

		calculateSquare := func() {
			time.Sleep(time.Second * 3)
			result = value * value
			goChan <- result
		}

		reportResult := func() {
			fmt.Println(value, " squared is ", <-goChan)
			// blocks until it can read something from the goChan
			mainChan <- "We are now done!"
		}

		go calculateSquare()
		go reportResult()
		<-mainChan // blocks until it can read something from mainChan
		wg.Done()
	}()
	wg.Wait()
}

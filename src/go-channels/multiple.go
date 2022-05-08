package gochannels

import (
	"fmt"
	"os"
	"time"
)

// MultipleChannels init
func MultipleChannels() {
	c1 := make(chan string)
	c2 := make(chan string)
	c3 := make(chan string)

	go func() {
		for {
			time.Sleep(time.Second)
			c1 <- "Running every second"
		}
	}()

	go func() {
		for {
			time.Sleep(time.Second * 4)
			c2 <- "Running every 4 seconds"
		}
	}()

	go func() {
		for {
			time.Sleep(time.Second * 10)
			c3 <- "We are done"
		}
	}()

	for {
		select {
		case msg := <-c1:
			fmt.Println(msg)
		case msg := <-c2:
			fmt.Println(msg + "Something Cool happend!!!!😎")
		case msg := <-c3:
			fmt.Println(msg)
			os.Exit(os.SEEK_SET)
		}
	}

}

/*
Running every second
Running every second
Running every second
Running every 4 secondsSomething Cool happend!!!!😎
Running every second
Running every second
Running every second
Running every second
Running every 4 secondsSomething Cool happend!!!!😎
Running every second
Running every second
We are done
*/

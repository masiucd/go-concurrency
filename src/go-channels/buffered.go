package gochannels

import "fmt"

// BufferedChannels init
func BufferedChannels() {
	ch := make(chan string, 3)

	ch <- "hello "
	ch <- "Mr "
	ch <- "Smith."
	ch <- "Booom!!!!" // Deadlock!!! ---> comment out this line to make it work

	msg := <-ch
	fmt.Println(msg)
	msg = <-ch
	fmt.Println(msg)
	msg = <-ch
	fmt.Println(msg)

}

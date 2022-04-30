package waitgroups

import (
	"fmt"
	"sync"
	"time"
)

func goForARun(wg *sync.WaitGroup) {
	time.Sleep(time.Second * 2)
	fmt.Println("Going out for a run!!!")
	wg.Done() // decrements the counter
}

func swiming(wg *sync.WaitGroup) {
	time.Sleep(time.Second * 2)
	fmt.Println("Swiming !!!")
	wg.Done() // decrements the counter
}

func doSomething() {
	time.Sleep(time.Second * 2)
	fmt.Println("doSomething !!!")
}
func doSomethingElse() {
	time.Sleep(time.Second * 2)
	fmt.Println("doSomethingElse !!!")
}

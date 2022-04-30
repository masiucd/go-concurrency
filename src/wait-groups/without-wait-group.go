package waitgroups

import (
	"fmt"
	"time"
)

func run1() {

	start := time.Now()
	go doSomething()
	go doSomethingElse()

	fmt.Println("Guess we are done!!")
	elapsed := time.Since(start)
	fmt.Printf("Procces took %v\n", elapsed)

}

// RunWithout init
func RunWithout() {
	run1() // Will never run our go routines
}

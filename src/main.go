package main

import waitgroups "github.com/masiucd/go-concurrency/src/wait-groups"

func main() {

	waitgroups.RunWaitGroupsApp() // will run the go routines since we can block the code until they are done

}

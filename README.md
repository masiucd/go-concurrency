# Go concurrency

### Channels

Channels are used to pass data between / synchronize goroutine including the `main func`.
Like the go philosophy says:

> > Don't communicate by sharing memory, share memory by communicating!

**Syntax**

create new channel with data of type string.
It could be whatever type we want but we have to be explicit and tell the compiler what type we will use for our channel.

```go
  ch := make(chan string)
```

Write/put data into the channel:

```go
  ch <- someData // Blocking code !
  another <- ch // Blocking code !
```

When we write into our channel we block the program until it is completed.
`someData` can't be put into the channel until there is an receiver ready to read that data out od that channel.

Close the channel:

```go
  close(ch) // Optional!
```

We can close the channel as well.

### CPU bound vs IO bound

CPU bound simply means that oru program will go faster if our CPU is faster.
Common tasks can be to calculate different encryptions.
A program that computes new digits of for example `E` will typically be CPU-bound, where it just making calculations.

IO bound means that our program will go faster if our IO is faster.
The IO system can very, like saving or reading to disk, but of course networking or communication in general is common too.
A program that looks for some kind of data in a database will typically be IO-bound.

**Summery**
_CPU Bound_ - means the rate at which process progresses is limited by the speed of the CPU.
A task that performs calculations on a small set of numbers, for example multiplying small matrices, is likely to be CPU bound.
_IO Bound_ - means the rate at which a process progresses is limited by the speed of the I/O subsystem. A task that processes data from disk, for example, counting the number of lines in a file is likely to be I/O bound.

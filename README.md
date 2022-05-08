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

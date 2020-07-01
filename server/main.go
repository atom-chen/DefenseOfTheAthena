package main

import (
	"fmt"
	"server/hello"
	"server/login"
	"server/mongodb"
	"server/register"
	"server/zinxServer"
)

func main() {
	fmt.Println("main")
	mongodb.Init()
	hello.Init()
	login.Init()
	register.Init()
	zinxServer.Init()
	select {}
}

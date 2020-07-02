package main

import (
	"log"
	"server/hello"
	"server/login"
	"server/mongodb"
	"server/register"
	"server/zinxServer"
)

func main() {
	log.Println("main")
	mongodb.Init()
	hello.Init()
	login.Init()
	register.Init()
	zinxServer.Init()
	select {}
}

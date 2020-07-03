package main

import (
	"log"
	"server/http"
	"server/mongodb"
	"server/zinxServer"
)

func main() {
	log.Println("main")
	mongodb.Init()
	http.Init()
	zinxServer.Init()
	select {}
}

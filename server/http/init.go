package http

import (
	"log"
	"net/http"
	"server/conf/address"
)

func Init() {
	log.Println("http init")
	go func() {
		mux := http.NewServeMux()
		mux.HandleFunc("/Login", onLogin)
		mux.HandleFunc("/Register", onRegister)
		mux.HandleFunc("/", onEntry)
		http.ListenAndServe(address.Url.Http, mux)
	}()
}

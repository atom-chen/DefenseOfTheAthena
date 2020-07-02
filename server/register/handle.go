package register

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"reflect"
	"server/conf/address"
	"server/errorCode"
	"server/model"
)

func Init() {
	log.Println("init register")
	go func() {
		mux := http.NewServeMux()
		mux.HandleFunc("/", onRegister)
		http.ListenAndServe(address.Url.Register, mux)
	}()
}

func onRegister(w http.ResponseWriter, r *http.Request) {
	account := r.PostFormValue("account")
	password := r.PostFormValue("password")
	fmt.Printf("onRegister account=%s, password=%s\n", account, password)
	u := model.GetUserByAccount(account)
	type respRegister struct {
		ErrorCode errorCode.ErrorCode
	}
	resp := new(respRegister)
	if reflect.DeepEqual(u, model.User{}) {
		resp.ErrorCode = errorCode.OK
	} else {
		resp.ErrorCode = errorCode.RegisterAccountExit
	}
	fmt.Printf("onRegister result=%s\n", resp.ErrorCode.ToString())
	jsonData, err := json.Marshal(resp)
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(jsonData)
}

package login

import (
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"
	"server/conf/address"
	"server/errorCode"
	"server/model"
)

func Init() {
	fmt.Println("init login")
	go func() {
		mux := http.NewServeMux()
		mux.HandleFunc("/", onLogin)
	 	http.ListenAndServe(address.Url.Login, mux)
	}()
}

func onLogin(w http.ResponseWriter, r *http.Request) {
	account := r.PostFormValue("account")
	password := r.PostFormValue("password")
	fmt.Printf("onLogin account=%s, password=%s\n", account, password)
	u := model.GetUserByAccountAndPassword(account, password)
	resp := new(respLogin)
	if !reflect.DeepEqual(u, model.User{}) {
		resp.ErrorCode = errorCode.OK
		resp.User = u
	} else {
		resp.ErrorCode = errorCode.LoginAccountOrPasswordError
	}
	jsonData, err := json.Marshal(resp)
	fmt.Printf("onLogin result=%s\n", resp.ErrorCode.ToString())
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(jsonData)
}

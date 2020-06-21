package hello

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"server/conf/address"
	"server/errorCode"
)

func Init() {
	fmt.Println("init hello")
	go func() {
		mux := http.NewServeMux()
		mux.HandleFunc("/", onHello)
		http.ListenAndServe("127.0.0.1:3650", mux)
	}()
}

var key = "天王盖地虎"

func md5V(str string) string {
	h := md5.New()
	h.Write([]byte(str))
	return hex.EncodeToString(h.Sum(nil))
}

func onHello(w http.ResponseWriter, r *http.Request) {
	serverWorld := md5V(key)
	clientWorld := r.PostFormValue("world")
	fmt.Printf("hello server,serverWorld=%s, clientWorld=%s\n", serverWorld, clientWorld)
	resp := new(respLogin)
	if serverWorld == clientWorld {
		resp.ErrorCode = errorCode.OK
	} else {
		resp.ErrorCode = errorCode.HelloError
	}
	resp.Address = *address.Url
	jsonData, err := json.Marshal(resp)
	fmt.Printf("hello result=%s\n", resp.ErrorCode.ToString())
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(jsonData)
}

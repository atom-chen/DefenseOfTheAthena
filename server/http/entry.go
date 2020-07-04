package http

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"server/conf/address"
	"server/pb"
)

var key = "天王盖地虎"

func md5V(str string) string {
	h := md5.New()
	h.Write([]byte(str))
	return hex.EncodeToString(h.Sum(nil))
}

func onEntry(w http.ResponseWriter, r *http.Request) {
	secret := md5V(key)
	req := &pb.ReqEntry{
		Secret: r.PostFormValue("Secret"),
	}

	fmt.Printf("[entry],secret=%s, req.Secret=%s\n", secret, req.Secret)
	//回写Hello数据

	resp := new(pb.RespEntry)
	if secret == req.Secret {
		resp.ErrCode = pb.ErrorCode_OK
		resp.LoginUrl = "http://" + address.Url.Http + "/Login"
		resp.RegisterUrl = "http://" + address.Url.Http + "/Register"
		resp.WebSocketUrl = "ws://" + address.Url.Websocket + "/Game"
	} else {
		resp.ErrCode = pb.ErrorCode_HelloError
	}

	jsonData, err := json.Marshal(resp)
	fmt.Printf("[entry] result=%v\n", resp)
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(jsonData)
}

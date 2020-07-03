package http

import (
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"
	"server/errorCode"
	"server/model"
	"server/util"
)

func onLogin(w http.ResponseWriter, r *http.Request) {
	account := r.PostFormValue("account")
	password := r.PostFormValue("password")
	fmt.Printf("onLogin account=%s, password=%s\n", account, password)
	u := model.GetUserByAccountAndPassword(account, password)

	//回写Login数据
	type respLogin struct {
		ErrorCode errorCode.ErrorCode
		User      model.User
		Token     string
	}
	resp := new(respLogin)

	//判断u是否是空struct
	if !reflect.DeepEqual(u, model.User{}) {
		resp.ErrorCode = errorCode.OK
		resp.User = u
		resp.Token = util.GenTimeToken()
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

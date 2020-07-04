package http

import (
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"
	"server/model"
	"server/pb"
	"server/util"
)

func onLogin(w http.ResponseWriter, r *http.Request) {
	req := &pb.ReqLogin{
		Account:  r.PostFormValue("Account"),
		Password: r.PostFormValue("Password"),
	}

	fmt.Printf("onLogin account=%s, password=%s\n", req.Account, req.Password)
	u := model.GetUserByAccountAndPassword(req.Account, req.Password)

	//回写Login数据
	resp := new(pb.RespLogin)
	//判断u是否是空struct
	if !reflect.DeepEqual(u, model.User{}) {
		resp.ErrCode = pb.ErrorCode_OK
		resp.Token = util.GenTimeToken()
	} else {
		resp.ErrCode = pb.ErrorCode_LoginAccountOrPasswordError
	}
	data, err := json.Marshal(resp)
	fmt.Printf("onLogin resp=%v\n", resp)
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(data)
}

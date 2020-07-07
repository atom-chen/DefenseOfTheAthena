package http

import (
	"encoding/json"
	"fmt"
	"net/http"
	"server/db"
	"server/pb"
	"server/util"
)

func onLogin(w http.ResponseWriter, r *http.Request) {
	req := &pb.ReqLogin{
		Account:  r.PostFormValue("Account"),
		Password: r.PostFormValue("Password"),
	}

	fmt.Printf("onLogin account=%s, password=%s\n", req.Account, req.Password)
	u := db.FindUserByAccountAndPassword(req.Account, req.Password)

	//回写Login数据
	resp := new(pb.RespLogin)
	//判断u是否是空struct
	if u == nil {
		resp.ErrCode = pb.ErrorCode_LoginAccountOrPasswordError
	} else {
		//将account+时间生成token
		u.Token = util.GenTimeToken(u.Account)
		u.UpdateUser()
		resp.ErrCode = pb.ErrorCode_OK
		resp.Token = u.Token
	}
	data, err := json.Marshal(resp)
	fmt.Printf("onLogin resp=%v\n", resp)
	if err != nil {
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(data)
}

package address

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

type URL struct {
	Login    string
	Register string
	LobbyWS  string
	GameWS   string
}

var Url *URL

//重装加载配置
func (u *URL) Reload() {
	data, err := ioutil.ReadFile("conf/address/address.json")
	if err != nil {
		log.Println("address reload ReadFile err:", err)
		panic(err)
	}
	err = json.Unmarshal(data, &u)
	if err != nil {
		log.Println("address reload Unmarshal err:", err)
		return
	}
	fmt.Printf("load address success, address=%v\n", u)
}

//初始化
func init() {
	Url = new(URL)
	Url.Reload()
}

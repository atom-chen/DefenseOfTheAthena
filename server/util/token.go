package util

import (
	"crypto/md5"
	"fmt"
	"io"
	"strconv"
	"time"
)

/*通过时间生成token*/
func GenTimeToken(key string) string {
	curTime := time.Now().Unix()
	h := md5.New()
	io.WriteString(h, strconv.FormatInt(curTime, 10)+key)
	token := fmt.Sprintf("%x", h.Sum(nil))
	fmt.Println("[GenTimeToken] curTime-->", curTime, ", token--->", token)
	return token
}

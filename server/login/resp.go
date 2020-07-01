package login

import (
	"server/conf/address"
	"server/errorCode"
	"server/model"
)

type respLogin struct {
	ErrorCode errorCode.ErrorCode
	User      model.User
	Address   address.URL
}
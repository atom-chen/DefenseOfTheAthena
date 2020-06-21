package login

import (
	"server/conf/address"
	"server/errorCode"
	"server/model/user"
)

type respLogin struct {
	ErrorCode errorCode.ErrorCode
	User user.User
	Address address.URL
}
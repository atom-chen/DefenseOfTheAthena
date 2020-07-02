package login

import (
	"server/errorCode"
	"server/model"
)

type respLogin struct {
	ErrorCode errorCode.ErrorCode
	User      model.User
}
package hello

import (
	"server/conf/address"
	"server/errorCode"
)

type respLogin struct {
	ErrorCode errorCode.ErrorCode
	Address address.URL
}
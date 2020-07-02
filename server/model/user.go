package model

import (
	"fmt"
	"gopkg.in/mgo.v2/bson"
	"server/mongodb"
)

type User struct {
	Id       int    `bson:"Id"`
	Account  string `bson:"Account"`
	Password string `bson:"Password"`
	NickName string `bson:"NickName"`
	Age      int    `bson:"Age"`
	Sex      int    `bson:"Sex"`
}

//通过Id查找用户
func FindUserById(id int) *User {
	var user = new(User)
	err := mongodb.FindOne("User", bson.M{"Id": id}, nil, &user)
	if err != nil {
		fmt.Printf("GetUserByAccountAndPassword Error, id=%d\n", id)
		return user
	}
	return user
}

//通过account,password查找用户
func GetUserByAccountAndPassword(account, password string) User {
	var user User
	err := mongodb.FindOne("User", bson.M{"Account": account, "Password": password}, bson.M{"_id": 0}, &user)
	if err != nil {
		fmt.Printf("GetUserByAccountAndPassword Error, account=%s, password=%s,err=%v \n", account, password, err)
		return User{}
	}
	fmt.Printf("GetUserByAccountAndPassword success, link=%v \n", user)
	return user
}

func GetUserByAccount(account string) User {
	var user User
	err := mongodb.FindOne("User", bson.M{"Account": account}, bson.M{"_id": 0}, &user)
	if err != nil {
		fmt.Printf("GetUserByAccountAndPassword Error, account=%s,err=%v \n", account, err)
		return User{}
	}
	fmt.Printf("GetUserByAccountAndPassword success, link=%v \n", user)
	return user
}

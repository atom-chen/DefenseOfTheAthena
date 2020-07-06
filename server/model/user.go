package model

import (
	"fmt"
	"gopkg.in/mgo.v2/bson"
	"server/mongodb"
	"server/pb"
)

type User struct {
	Id       int        `bson:"Id"`
	Account  string     `bson:"Account"`
	Password string     `bson:"Password"`
	NickName string     `bson:"NickName"`
	Icon     string     `bson:"Icon"`
	Age      uint32     `bson:"Age"`
	Sex      pb.EnumSex `bson:"Sex"`
	Lv       uint32     `bson:"Lv"`
	Gold     uint32     `bson:"Gold"`
	Diamond  uint32     `bson:"Diamond"`
	Token    string     `bson:"Token"`
}

//通过Id查找用户
func FindUserById(id int) *User {
	var user = new(User)
	err := mongodb.FindOne("User", bson.M{"Id": id}, nil, &user)
	if err != nil {
		fmt.Printf("FindUserByAccountAndPassword Error, id=%d\n", id)
		return user
	}
	return user
}

//通过account,password查找用户
func FindUserByAccountAndPassword(account, password string) *User {
	var user = new(User)
	err := mongodb.FindOne("User", bson.M{"Account": account, "Password": password}, bson.M{"_id": 0}, &user)
	if err != nil {
		fmt.Printf("FindUserByAccountAndPassword Error, account=%s, password=%s,err=%v \n", account, password, err)
		return nil
	}
	fmt.Printf("FindUserByAccountAndPassword success, link=%v \n", user)
	return user
}

func FindUserByToken(token string) *User {
	var user = new(User)
	err := mongodb.FindOne("User", bson.M{"Token": token}, bson.M{"_id": 0}, &user)
	if err != nil {
		fmt.Printf("FindUserByToken Error, token=%s,err=%v \n", token, err)
		return nil
	}
	fmt.Printf("FindUserByToken success, user=%v \n", user)
	return user
}

func FindUserByAccount(account string) *User {
	var user = new(User)
	err := mongodb.FindOne("User", bson.M{"Account": account}, bson.M{"_id": 0}, &user)
	if err != nil {
		fmt.Printf("FindUserByAccountAndPassword Error, account=%s,err=%v \n", account, err)
		return nil
	}
	fmt.Printf("FindUserByAccountAndPassword success, link=%v \n", user)
	return user
}

func (t *User) UpdateUser() error {
	err := mongodb.Update("User", bson.M{"Account": t.Account}, t)
	if err != nil {
		fmt.Printf("UpdateUser Error, user=%v,err=%v \n", t, err)
		return err
	}
	fmt.Printf("UpdateUser success, user=%v,\n", t)
	return nil
}

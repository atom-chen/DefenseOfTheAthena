package mongodb

import (
	"fmt"
	"gopkg.in/mgo.v2"
	"log"
)

var (
	globalS *mgo.Session
	dbName  = "Dota"
)

func Init() {
	fmt.Println("init mongodb")
	session, err1 := mgo.Dial("mongodb://127.0.0.1:27017")
	if err1 != nil {
		fmt.Println(err1)
		return
	}
	names, err2 := session.DatabaseNames()
	if err2 != nil {
		fmt.Println("数据库为空:", err2)
	}
	isContain := false
	for _, item := range names {
		if item == dbName {
			isContain = true
		}
	}
	if !isContain {
		fmt.Println("数据库中没有名称为:" + dbName + "的数据")
		return
	}
	fmt.Println(names)
	globalS = session
}

func connect(collection string) (*mgo.Session, *mgo.Collection) {
	ms := globalS.Copy()
	c := ms.DB(dbName).C(collection)
	ms.SetMode(mgo.Monotonic, true)
	return ms, c
}

/*
每次操作之后都要主动关闭 Session defer Session.Close()
db:操作的数据库
collection:操作的文档(表)
doc:要插入的数据
*/
func Insert(collection string, doc interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()
	return c.Insert(doc)
}

/*
collection:操作的文档(表)
query:查询条件
selector:需要过滤的数据(projection)
result:查询到的结果
*/
func FindOne(collection string, query, selector, result interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()
	return c.Find(query).Select(selector).One(result)
}

func FindAll(collection string, query, selector, result interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()
	return c.Find(query).Select(selector).All(result)
}

/*
db:操作的数据库
collection:操作的文档(表)
selector:更新条件
update:更新的操作
*/
func Update(collection string, selector, update interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()

	return c.Update(selector, update)
}

//更新，如果不存在就插入一个新的数据 `upsert:true`
func Upsert(collection string, selector, update interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()
	_, err := c.Upsert(selector, update)
	return err
}

// `multi:true`
func UpdateAll(collection string, selector, update interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()

	_, err := c.UpdateAll(selector, update)
	return err
}

/*
collection:操作的文档(表)
selector:删除条件
*/
func Remove(collection string, selector interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()

	return c.Remove(selector)
}

func RemoveAll(collection string, selector interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()

	_, err := c.RemoveAll(selector)
	return err
}

/*
collection:操作的文档(表)
page:当前页面
limit:每页的数量值
query:查询条件
selector:需要过滤的数据(projection)
result:查询到的结果
*/
func FindPage(collection string, page, limit int, query, selector, result interface{}) error {
	ms, c := connect(collection)
	defer ms.Close()

	return c.Find(query).Select(selector).Skip(page * limit).Limit(limit).All(result)
}

func IsEmpty(collection string) bool {
	ms, c := connect(collection)
	defer ms.Close()
	count, err := c.Count()
	if err != nil {
		log.Fatal(err)
	}
	return count == 0
}

func Count(collection string, query interface{}) (int, error) {
	ms, c := connect(collection)
	defer ms.Close()
	return c.Find(query).Count()
}

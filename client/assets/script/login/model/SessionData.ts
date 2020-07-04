import { UserData } from "./UserData";

export class SessionData {
    
    public Token:string;
  


}


/*
* 账户别名：Session
* 一个session下有且仅有一个user,但可以有多个player
* user表示这个用户的账户数据，player对应这个账户的游戏角色数据
*/
export let Session = new SessionData();
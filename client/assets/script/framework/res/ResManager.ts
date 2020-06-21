import { IsNullOrEmpty } from "../util/StringUtil";
import { ResPath } from "./ResPath";




export class ResManager {

    private static getUrlByName(name: string) {
        if (!ResPath.hasOwnProperty(name)) {
            return name;
        }
        return ResPath[name];
    }

    /**
     * 
     * @param name 资源名称
     * @param type 资源类型 
     * @param completeCallback 回调 > error错误resource > 返回的资源
     */
    public static LoadRes(name: string, type: typeof cc.Asset, completeCallback: (error: Error, resource: any) => void) {
        let url = this.getUrlByName(name)
        if (IsNullOrEmpty(url)) {
            return
        }
        cc.loader.loadRes(url, type, completeCallback)
    }

    /**
     * @param name 释放的资源名
     */
    public static Release(name: string) {
        let url = this.getUrlByName(name)
        if (IsNullOrEmpty(url)) {
            return
        }
        cc.loader.releaseRes(url)
    }
}




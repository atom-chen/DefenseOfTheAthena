import { Time } from "../time/Time";

let debug = CC_DEBUG;

export class ClogKey {
    public static Res = "Res"
    public static UI = "UI"
    public static LocalStorage = "LocalStorage"
    public static Net = "Net"
    public static Entry = "Entry"
    public static Api = "Api"
    public static Login = "Login"
    public static Http = "Http"
    public static WebSocket="WebSocket"
}


export default class Clog {
    public static Tags: Array<string> = new Array<string>();


    public static Init() {
        this.OpenTag(ClogKey.Res)
        this.OpenTag(ClogKey.UI)
        this.OpenTag(ClogKey.LocalStorage)
        this.OpenTag(ClogKey.Net)
        this.OpenTag(ClogKey.Entry)
        this.OpenTag(ClogKey.Api)
        this.OpenTag(ClogKey.Login)
        this.OpenTag(ClogKey.Http)
        this.OpenTag(ClogKey.WebSocket)
    }

    public static OpenTag(tag) {
        if (this.Tags.indexOf(tag) < 0) {
            this.Tags.push(tag)
        }
    }

    public static Obj(tag?: string, ...msg: any[]) {
        if (!debug) {
            return;
        }

        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        msg.unshift('【' + Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.log("%c tag", "color:#ff1493;", [].slice.call(msg));
    }

    //无颜色
    public static Trace(tag: string, msg: any) {
        this.print(tag, this.GetString(msg), "")
    }

    //红色
    public static Red(tag: string, msg: any) {
        this.print(tag, this.GetString(msg), "color:red;")
    }

    //绿色
    public static Green(tag: string, msg) {
        this.print(tag, this.GetString(msg), "color:green;")
    }

    //橙色
    public static Orange(tag: string, msg) {
        this.print(tag, this.GetString(msg), "color:#ee7700;")
    }

    //灰色
    public static Gray(tag: string, msg) {
        this.print(tag, this.GetString(msg), "color:gray;")
    }

    //蓝色
    public static Blue(tag: string, msg) {
        this.print(tag, this.GetString(msg), "color:#3a5fcd;")
    }

    //紫色
    public static Purple(tag: string, msg) {
        this.print(tag, this.GetString(msg), "color:#b23aee;")
    }

    //深粉色
    public static DeepPink(tag, msg) {
        this.print(tag, this.GetString(msg), "color:#ff1493;")
    }

    private static GetString(msg) {
        return (!Array.isArray(msg) && typeof msg === 'object') ? JSON.stringify(msg) : msg;
    }

    private static print(tag, msg, color) {
        if (!debug) {
            return;
        }

        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        var backLog = console.log || cc.log;
        backLog.call(this, "%c%s:" + cc.js.formatStr.apply(cc, [msg]), color, '【' + Time.Format(new Date()) + '】' + '【' + tag + '】');
    }

    public static Warn(tag?: string, ...msg: any[]) {
        msg.unshift('【' + Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.warn.apply(null, [].slice.call(msg));
    }

    public static Error(msg: any) {
        cc.error('【' + Time.Format(new Date()) + '】' + msg);
    }

}
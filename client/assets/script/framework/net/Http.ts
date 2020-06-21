import Clog, { ClogKey } from "../clog/Clog";





export default class Http {

    public static async Get(url: string): Promise<JSON> {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    Clog.Green(ClogKey.Http, "get json from " + url + " status code :" + xhr.status);
                    switch (xhr.status) {
                        case 200:
                            {
                                let msg: JSON;
                                try {
                                    msg = JSON.parse(xhr.responseText);
                                }
                                catch (e) {
                                    reject({ message: '返回信息错误' });
                                }
                                Clog.Green(ClogKey.Http, "[XHR GET]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                resolve(msg);
                            }
                            break;
                        default:
                            {
                                reject(this.getEror(xhr.status))
                            }
                            break;
                    }
                }
            };
            xhr.open("GET", url, true);
            xhr.send(null);
        });
    }

    public static async Post(url: string, data: any): Promise<JSON> {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    switch (xhr.status) {
                        case 200:
                            {
                                let msg: JSON;
                                try {
                                    msg = JSON.parse(xhr.responseText);
                                }
                                catch (e) {
                                    reject({ message: '返回信息错误' });
                                }
                                Clog.Green(ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                resolve(msg);
                            }
                            break;
                        default:
                            {
                                reject(this.getEror(xhr.status))
                            }
                            break;
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");

            if (data) {
                var tempArr = [];
                for (var key in data) {
                    if (data.hasOwnProperty(key) && data[key]) {
                        tempArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                    }
                }
                var dataToSend = tempArr.join('&');
                xhr.send(dataToSend);
            }
            else {
                xhr.send(null);
            }

            Clog.Green(ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[post data]:" + JSON.stringify(data));
        });
    }

    private static getEror(code: number) {
        if (code >= 500) {
            return { message: '服务器返回异常，请重试' };
        }
        if (code >= 400) {
            return { message: '错误的请求，请重试' };
        }
        if (code >= 300) {
            return { message: '登录状态可能已过期，请重试' };
        }
        return { message: '服务器返回数据错误，请重试' };
    }

}

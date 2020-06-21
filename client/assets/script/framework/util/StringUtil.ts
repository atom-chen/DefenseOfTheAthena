
//校验地址是否为http
export let CheckNetUrl = (httpUrl: string): boolean => {
    let isHttp = /^http[s]*:\/\//;
    return isHttp.test(httpUrl)
}

//判断字符是否为空
export let IsNullOrEmpty = (str: string): boolean => {
    return str == null || str === ""
}

//打印map
export let MapToString = (map: Map<any, any>): string => {
    return JSON.stringify(Array.from(map.entries()).reduce((o, [key, value]) => { o[key] = value; return o; }, {}))
}

//限制为n个字符，超过的显示...
export let StringLimit = (str: string, n: number): string => {
    var strLength = 0;
    var cutIndex = 0;
    for (var i = 0; i < str.length; i++) {
        if (strLength >= n && cutIndex == 0) {
            cutIndex = i;
        }
        if (escape(str[i]).indexOf("%u") < 0) //不是中文
        {
            strLength += 1;
        }
        else //中文
        {
            strLength += 2;
        }
    }

    //如果字符长度小于截取长度，直接返回
    if (strLength <= n) {
        return str
    }

    var finalStr = str.slice(0, cutIndex) + '...';
    return finalStr
}
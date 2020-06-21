export enum EnumUIHierarchy {
    Base = 0,                   //基础层 eg:建筑名称，角色头顶上的血条   
    Normal = 10000,             //窗口 
    Fix = 20000,                //固定
    Marquee = 20100,            //跑马灯
    Tip = 20200,                //提示
    Loading = 20300,            //场景切换
    Waiting = 20400,            //等待界面
    NetDlg = 20500,             //网络消息弹框层     系统默认最大不能超过35675
    FrameMask = 20700,          //外框遮罩
}

export enum EnumUIOpenTween {
    None = 'None',
    Scale = 'Scale',
    FadeIn = 'FadeIn',
    PullUp = 'PullUp',
}

export enum EnumUICloseTween {
    None = 'None',
    Scale = 'Scale',
    FadeOut = 'FadeOut',
    PullDown = 'PullDown',
}
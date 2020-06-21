import { UIBase } from "./UIBase";
import { IsNullOrEmpty } from "../util/StringUtil";
import { ArrayRemove } from "../util/ArrayUtil";
import Clog, { ClogKey } from "../clog/Clog";
import { EnumUICloseTween, EnumUIOpenTween } from "./UIEnum";
import { ResManager } from "../res/ResManager";
import { AudioManager } from "../audio/AudioManager";







//by ming.lei 2018.09.03
export  class UIManager  {

    public static _root: cc.Node;
    //放大动画时长
    private static scaleTweenTime = 0.2;
    //渐隐渐出动画时长
    private static feadTweenTime = 0.5;
    //上拉动画时长
    private static pullTweenTime = 0.2;
    //遮罩的透明度（alpha值）
    private static maskColorA = 180;
    //已打开的UI的对象List   注：用array不用map的原因，主要原因是map是无序的集合，别再帮我改成map了各位大爷
    private static OpenedUI: Array<UIBase> = new Array<UIBase>();
    //正在打开的UI的名称List
    private static OnOpenUITag: Array<string> = new Array<string>();

    //初始化
    public static Init(root: cc.Node) {
        this._root = root
    }

    //打开UI
    public static async OpenUI(UIClass: { new(): UIBase }): Promise<UIBase> {
        return new Promise(async (resolve) => {
            let targetName = new UIClass().PrefabName
            if (IsNullOrEmpty(targetName)) {
                Clog.Error('Open UI -> UI Name is null! ')
                return null;
            }

            //已打开的情况下
            let target = this.OpenedUI.find(item => item.PrefabName == targetName)
            if (target != null) {
                this.PrintOpenedUIList('Open UI -> UI Name is opened! name:' + targetName)
                ArrayRemove(this.OpenedUI, target)  //移除

                this.OpenedUI.push(target)          //放队尾
                this.SortOrder();                   //显示在最上层
                return;
            }

            //正在打开的情况下
            let isOnOpen = this.OnOpenUITag.find(item => item == targetName)
            if (isOnOpen) {
                Clog.Warn(ClogKey.UI, 'Open UI -> but UI is OnOpen, name:' + targetName)
                return;
            }

            //未打开的情况
            this.OnOpenUITag.push(targetName)
            this.PrintOnOpenUIList('Open UI -> before Open UI with name:' + targetName)

            //从正在打开的UI List中移除
            let RemoveFromOnOpen = () => {
                let isOnOpen = this.OnOpenUITag.find(item => item == targetName)
                if (isOnOpen) {
                    Clog.Trace(ClogKey.UI, "remove target Name from OnOpen List!")
                    ArrayRemove(this.OnOpenUITag, targetName)
                }
                else {
                    Clog.Error("can not find onOpen UI name, targetName:" + targetName)
                }
                this.PrintOnOpenUIList('Open UI -> After Open UI with name:' + targetName)
            }

            //加载UI
            ResManager.LoadRes(targetName, cc.Prefab, (error: Error, prefab: cc.Prefab) => {
                if (error) {
                    RemoveFromOnOpen()
                    Clog.Error('UIManager >> GetInstance >> node is null!, name:' + targetName + ",err" + JSON.stringify(error))
                    return;
                }
                let node = cc.instantiate(prefab);
                let targetUI = node.addComponent(UIClass)
                targetUI.PrefabName = targetName;
                this._root.addChild(node);
                node.setPosition(0, 0)
                //从onOpen UI List 中移除该已打开的UI
                RemoveFromOnOpen()

                //在已打开的UI List 中添加该UI
                this.OpenedUI.push(targetUI)
                //调整UI层级
                this.SortOrder();
                //打印层级
                this.PrintOpenedUIList('After Open UI >>' + targetName)

                //UI打开动画
                switch (targetUI.OpenTween) {
                    case EnumUIOpenTween.None:
                        {
                            if (targetUI.Mask) {
                                targetUI.Mask.active = true;
                                targetUI.Mask.runAction(cc.fadeTo(0.2, this.maskColorA));
                            }

                            resolve(targetUI);

                        }
                        break;
                    case EnumUIOpenTween.Scale:
                        {
                            //动画音效
                            AudioManager.PlaySound('S_OpenUI');

                            //动画
                            let OpenConstScale = node.scale
                            let action1 = cc.callFunc(() => {
                                //遮罩不参与动画
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = false;
                                }
                                node.scale = 0.2
                            });
                            let action2 = cc.scaleTo(this.scaleTweenTime, OpenConstScale, OpenConstScale).easing(cc.easeBezierAction(OpenConstScale - 0.1, OpenConstScale + 0.2, OpenConstScale + 0.1, OpenConstScale));
                            let action3 = cc.callFunc(() => {
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = true;
                                    targetUI.Mask.runAction(cc.fadeTo(0.2, this.maskColorA));
                                }
                                resolve(targetUI);
                            });
                            node.runAction(cc.sequence(action1, action2, action3));
                        }
                        break;
                    case EnumUIOpenTween.FadeIn:
                        {
                            //动画音效
                            AudioManager.PlaySound('S_OpenUI');

                            //动画
                            let action1 = cc.callFunc(() => {
                                //遮罩不参与动画
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = false;
                                }
                                node.opacity = 0;
                            });
                            let action2 = cc.fadeIn(this.feadTweenTime);
                            let action3 = cc.callFunc(() => {
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = true;
                                    targetUI.Mask.runAction(cc.fadeTo(0.2, this.maskColorA));
                                }
                                resolve(targetUI);
                            })
                            node.runAction(cc.sequence(action1, action2, action3));
                        }
                        break;
                    case EnumUIOpenTween.PullUp:
                        {
                            //动画音效
                            // AudioManager.PlaySound('S_OpenUI');

                            //动画
                            node.setPosition(node.x, -node.parent.anchorY * node.parent.height - (1 - node.anchorY) * node.height);
                            let action1 = cc.callFunc(() => {
                                //遮罩不参与动画
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = false;
                                }
                            });
                            let action2 = cc.moveTo(this.pullTweenTime, node.x, -(node.parent.anchorY - 0.5) * node.parent.height + (node.anchorY - 0.5) * node.height).easing(cc.easeOut(3)); // 移动到屏幕中心
                            let action3 = cc.callFunc(() => {
                                if (targetUI.Mask) {
                                    targetUI.Mask.active = true;
                                }
                                resolve(targetUI);
                            });
                            // 延迟修改，防止prefab上根节点挂的widget冲突
                            targetUI.scheduleOnce(() => node.runAction(cc.sequence(action1, action2, action3)));
                        }
                        break;
                }
            })
        })
    }


    //关闭单个UI
    public static  CloseUI(UIClass: { new(): UIBase }): Promise<void> {
        return new Promise(async (resolve) => {
            let targetName = new UIClass().PrefabName

            Clog.Orange(ClogKey.UI, 'Close UI  -> UIName=' + targetName)
            let targetUI: UIBase = this.OpenedUI.find(item => item.PrefabName == targetName)
            if (targetUI == null) {
                Clog.Warn(ClogKey.UI, 'CloseUI -> target UI is null,name:' + targetName)
                return
            }

            switch (targetUI.CloseTween) {
                case EnumUICloseTween.None:
                    {
                        targetUI.node.destroy();
                        ArrayRemove(this.OpenedUI, targetUI)
                        this.PrintOpenedUIList('After Close UI :' + targetName)
                        resolve();
                    }
                    break;
                case EnumUICloseTween.Scale:
                    {
                        if (targetUI.Mask) {
                            targetUI.Mask.active = false;
                        }
                        let CloseConstScale = targetUI.node.scale
                        targetUI.node.runAction(cc.sequence(
                            cc.callFunc(() => { targetUI.node.scale = CloseConstScale }),
                            cc.scaleTo(0.1, 0.1, 0.1),
                            cc.callFunc(() => {
                                targetUI.node.destroy();
                                ArrayRemove(this.OpenedUI, targetUI)
                                this.PrintOpenedUIList('After Close UI :' + targetName)
                                resolve();
                            }),
                        ))
                    }
                    break;

                case EnumUICloseTween.FadeOut:
                    {
                        if (targetUI.Mask) {
                            targetUI.Mask.active = false;
                        }

                        targetUI.node.runAction(cc.sequence(
                            cc.fadeOut(this.feadTweenTime),
                            cc.callFunc(() => {
                                targetUI.node.destroy();
                                ArrayRemove(this.OpenedUI, targetUI)
                                this.PrintOpenedUIList('After Close UI :' + targetName)
                                resolve();
                            }),
                        ))
                    }
                    break;

                case EnumUICloseTween.PullDown:
                    {
                        if (targetUI.Mask) {
                            targetUI.Mask.active = false;
                        }

                        targetUI.node.runAction(cc.sequence(
                            cc.moveTo(this.pullTweenTime, targetUI.node.x, -targetUI.node.parent.anchorY * targetUI.node.parent.height - (1 - targetUI.node.anchorY) * targetUI.node.height).easing(cc.easeIn(3)),
                            cc.callFunc(() => {
                                targetUI.node.destroy();
                                ArrayRemove(this.OpenedUI, targetUI)
                                this.PrintOpenedUIList('After Close UI :' + targetName)
                                resolve();
                            }),
                        ));
                    }
                    break;
            }
        })
    }



    //一次关闭所有UI
    public static  CloseAll() {
        for (let index = 0; index < this.OpenedUI.length; index++) {
            const ui = this.OpenedUI[index];
            ui.node.destroy()
        }
        this.OpenedUI = new Array<UIBase>();
        this.PrintOpenedUIList('After Close All UI');
    }

    //调整UI层级
    private static  SortOrder() {
        for (let index = 0; index < this.OpenedUI.length; index++) {
            let targetUI: UIBase = this.OpenedUI[index]
            targetUI.node.zIndex = targetUI.HierarchyType + index * 2;
        }
    }

    //打印已打开的UI队列
    private static  PrintOpenedUIList(desc: string = null) {
        if (this.OpenedUI.length <= 0) {
            Clog.Orange(ClogKey.UI, desc + '>>> Now Opened UI List is Empty')
            return;
        }

        let str = ''
        for (let index = 0; index < this.OpenedUI.length; index++) {
            const ui = this.OpenedUI[index];
            str = str + '\n[ name: ' + ui.PrefabName + ', zIndex: ' + ui.node.zIndex + ' ]'
        }
        Clog.Orange(ClogKey.UI, desc + '>>> Now  Opened UI List :' + str)
    }

    //打印正在打开的UI队列
    private static  PrintOnOpenUIList(desc: string = null) {
        if (this.OnOpenUITag.length <= 0) {
            Clog.Orange(ClogKey.UI, desc + '>>> Now OnOpen UI List is Empty')
            return;
        }

        let str = ''
        for (let index = 0; index < this.OnOpenUITag.length; index++) {
            const name = this.OnOpenUITag[index];
            str = str + '\n[ name: ' + name + ' ]'
        }
        Clog.Orange(ClogKey.UI, desc + '>>> Now OnOpen UI List :' + str)
    }
}



interface ActionSheetData {
    Title: string,       //标题
    List: Array<ActionSheetDataItem>
}

interface ActionSheetDataItem {
    Id: number,         //id： 主要用来排序
    Desc: string,       //Desc: 显示的文本描述
    Action: Function    // 动作
}

export class DropDownController {
    public static data: ActionSheetData
    public static SetKey(data: ActionSheetData) {
        this.data = data
    }

    
}
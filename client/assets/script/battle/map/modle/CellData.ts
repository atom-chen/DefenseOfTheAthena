import { MapController } from "../control/MapController";
import { EnumMapCell } from "./EnumMap";
import { MapCell } from "../view/MapCell";
import { ConfigMap } from "./ConfigMap";


export class CellData {


    constructor(id: number) {
        this.Id = id;
    }

    public Id: number;

    public get Icon(): string {
        return "T_M" + MapController.CurMapId + this.Id;
    }

    public get CellType(): EnumMapCell {
        if (this.Id == 0 || this.Id == 1) {
            return EnumMapCell.None
        }
        if ([801, 802, 803, 804].indexOf(this.Id) >= 0) {
            return EnumMapCell.Flower;
        }
        return EnumMapCell.Water;
    }


    
}
import IColor from "../interfaces/IColor";

export default class Color implements IColor 
{
    private _hexColor = "";

    public get HexColor() {
        return this._hexColor;
    }

    public set HexColor(color: string) {
        this._hexColor = color;
    }
}
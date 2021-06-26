import IColor from "../interfaces/IColor";
import INote from "../interfaces/INote";
import Color from "./Color";

export default class Note implements INote
{
    private _id = "";
    private _title = "";
    private _content = "";
    private _pinned = false;
    private _createdAt: number | null = null;
    private _color: IColor;

    constructor()
    {
        this._color = new Color();
        this.Color.HexColor = "#fff";
    }

    //

    public get Id() {
        return this._id;
    }

    public set Id(id: string) {
        this._id = id;
    }

    public get Title() {
        return this._title;
    }

    public set Title(title: string) {
        this._title = title;
    }

    public get Content(): string {
        return this._content;
    }

    public set Content(content: string) {
        this._content = content;
    }

    public get Pinned(): boolean {
        return this._pinned;
    }

    public set Pinned(pinned: boolean) {
        this._pinned = pinned;
    } 

    public get CreatedAt(): (number | null) {
        return this._createdAt;
    }

    public set CreatedAt(createdAt: (number | null)) {
        this._createdAt = createdAt;
    }

    public get Color(): IColor {
        return this._color;
    }

    public set Color(color: IColor) {
        this._color = color;
    }
}
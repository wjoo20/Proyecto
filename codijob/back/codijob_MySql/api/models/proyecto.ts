export class Proyecto{
    private _pro_id: number;
    private _pro_nom: string;
    private _pro_desc: string;
    private _pro_fechin: Date;
    private _pro_fechfin: Date;

    constructor(){
        this._pro_id=0;
        this._pro_nom="";
        this._pro_desc="";
        this._pro_fechin= new Date();
        this._pro_fechfin=new Date();
    }

    public get pro_fechfin(): Date {
        return this._pro_fechfin;
    }
    public set pro_fechfin(value: Date) {
        this._pro_fechfin = value;
    }
    public get pro_fechin(): Date {
        return this._pro_fechin;
    }
    public set pro_fechin(value: Date) {
        this._pro_fechin = value;
    }
    public get pro_desc(): string {
        return this._pro_desc;
    }
    public set pro_desc(value: string) {
        this._pro_desc = value;
    }
    public get pro_nom(): string {
        return this._pro_nom;
    }
    public set pro_nom(value: string) {
        this._pro_nom = value;
    }
    public get pro_id(): number {
        return this._pro_id;
    }
    public set pro_id(value: number) {
        this._pro_id = value;
    }
}
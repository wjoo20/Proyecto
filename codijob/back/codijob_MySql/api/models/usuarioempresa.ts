export class UsuarioEmpresa{
    private _usuemp_id: number;
    private _usuemp_cargo: string;
    private _usuemp_fechin: Date;
    private _usuemp_fechfin: Date;

    constructor(){
        this._usuemp_id=0;
        this._usuemp_cargo="";
        this._usuemp_fechin= new Date();
        this._usuemp_fechfin= new Date();
    }

    public get usuemp_fechfin(): Date {
        return this._usuemp_fechfin;
    }
    public set usuemp_fechfin(value: Date) {
        this._usuemp_fechfin = value;
    }
    public get usuemp_fechin(): Date {
        return this._usuemp_fechin;
    }
    public set usuemp_fechin(value: Date) {
        this._usuemp_fechin = value;
    }
    public get usuemp_cargo(): string {
        return this._usuemp_cargo;
    }
    public set usuemp_cargo(value: string) {
        this._usuemp_cargo = value;
    }
    public get usuemp_id(): number {
        return this._usuemp_id;
    }
    public set usuemp_id(value: number) {
        this._usuemp_id = value;
    }
}
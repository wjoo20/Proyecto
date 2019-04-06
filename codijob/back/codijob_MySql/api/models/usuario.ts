export class Usuario{
    private _usu_id: number;
    private _usu_tipo: string;
    private _usu_hash: string;
    private _usu_salt: string;
    private _usu_img: string;
    private _usu_lat: string;
    private _usu_lng:string;
    private _usu_www: string;
    private _usu_git: string;
    private _usu_fb: string;

    constructor(){
        this._usu_id=0;
        this._usu_tipo="";
        this._usu_hash="";
        this._usu_salt="";
        this._usu_img="";
        this._usu_lat="";
        this._usu_lng="";
        this._usu_www="";
        this._usu_git="";
        this._usu_fb="";
    }

    public get usu_fb(): string {
        return this._usu_fb;
    }
    public set usu_fb(value: string) {
        this._usu_fb = value;
    }
    public get usu_git(): string {
        return this._usu_git;
    }
    public set usu_git(value: string) {
        this._usu_git = value;
    }
    public get usu_www(): string {
        return this._usu_www;
    }
    public set usu_www(value: string) {
        this._usu_www = value;
    }
    public get usu_lat(): string {
        return this._usu_lat;
    }
    public set usu_lat(value: string) {
        this._usu_lat = value;
    }
    public get usu_img(): string {
        return this._usu_img;
    }
    public set usu_img(value: string) {
        this._usu_img = value;
    }
    public get usu_salt(): string {
        return this._usu_salt;
    }
    public set usu_salt(value: string) {
        this._usu_salt = value;
    }

    public get usu_hash(): string {
        return this._usu_hash;
    }
    public set usu_hash(value: string) {
        this._usu_hash = value;
    }
    public get usu_tipo(): string {
        return this._usu_tipo;
    }
    public set usu_tipo(value: string) {
        this._usu_tipo = value;
    }

    public get usu_id(): number {
        return this._usu_id;
    }
    public set usu_id(value: number) {
        this._usu_id = value;
    }
}
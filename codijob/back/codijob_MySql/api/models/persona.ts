export class Persona{
    private _per_id: number;
    private _per_nom: string;
    private _per_apell: string;
    private _per_email: string;
    private _per_telf: string;
    private _per_dni: string;
    private _per_fech: Date;

    constructor(){
        this._per_id=0;
        this._per_nom="";
        this._per_apell="";
        this._per_email="";
        this._per_telf="";
        this._per_dni="";
        this._per_fech=new Date();
    }

    public get per_id(): number {
        return this._per_id;
    }
    public set per_id(value: number) {
        this._per_id = value;
    }
    
    public get per_nom(): string {
        return this._per_nom;
    }
    public set per_nom(value: string) {
        this._per_nom = value;
    }
    
    public get per_apell(): string {
        return this._per_apell;
    }
    public set per_apell(value: string) {
        this._per_apell = value;
    }
    
    public get per_email(): string {
        return this._per_email;
    }
    public set per_email(value: string) {
        this._per_email = value;
    }
   
    public get per_telf(): string {
        return this._per_telf;
    }
    public set per_telf(value: string) {
        this._per_telf = value;
    }
    
    public get per_dni(): string {
        return this._per_dni;
    }
    public set per_dni(value: string) {
        this._per_dni = value;
    }
    
    public get per_fech(): Date {
        return this._per_fech;
    }
    public set per_fech(value: Date) {
        this._per_fech = value;
    }
}
export class UsuarioProyecto{
    private _usupro_id: number;
    private _usupro_rol: string;

    constructor(){
        this._usupro_id=0;
        this._usupro_rol="";
    }

    public get usupro_rol(): string {
        return this._usupro_rol;
    }
    public set usupro_rol(value: string) {
        this._usupro_rol = value;
    }
    public get usupro_id(): number {
        return this._usupro_id;
    }
    public set usupro_id(value: number) {
        this._usupro_id = value;
    }
}
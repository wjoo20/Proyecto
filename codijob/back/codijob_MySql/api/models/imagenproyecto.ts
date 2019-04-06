export class ImagenProyecto{
    private _imgpro_id: number;
    private _imgpro_url: string;
    constructor(){
        this._imgpro_id=0;
        this._imgpro_url="";
    }
    public get imgpro_url(): string {
        return this._imgpro_url;
    }
    public set imgpro_url(value: string) {
        this._imgpro_url = value;
    }
    public get imgpro_id(): number {
        return this._imgpro_id;
    }
    public set imgpro_id(value: number) {
        this._imgpro_id = value;
    }
}
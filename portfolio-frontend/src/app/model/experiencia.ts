export class Experiencia {

    id?:number;
    nombreE: string;
    descripcionE:string;
    pathimg:string;
    urlimg:string;
    periodoE:string
    constructor(nombreE: string, descripcion:string, urlimg:string,pathimg:string,periodoE:string)
    {
        this.nombreE=nombreE;
        this.descripcionE=descripcion;
        this.pathimg=pathimg;
        this.urlimg=urlimg;
        this.periodoE=periodoE;
    }
}

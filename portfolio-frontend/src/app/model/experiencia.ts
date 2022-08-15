export class Experiencia {

    id?:number;
    nombreE: string;
    descripcionE:string;
    pathimg:string;
    urlimg:string;

    constructor(nombreE: string, descripcion:string, urlimg:string,pathimg:string)
    {
        this.nombreE=nombreE;
        this.descripcionE=descripcion;
        this.pathimg=pathimg;
        this.urlimg=urlimg;
    }
}

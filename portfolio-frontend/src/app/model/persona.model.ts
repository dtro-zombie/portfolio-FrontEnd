export class persona
{
    id?:number;
    nombre:string;
    apellido:string;
    img: string;
    path:string;
    sobremi:string;
    titulo:string;

    constructor(nombre: string, apellido:string, img:string,path:string,sobremi:string,titulo:string)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.path=path;
        this.sobremi=sobremi;
        this.titulo=titulo;
    }
} 
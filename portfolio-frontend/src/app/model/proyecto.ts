

export class Proyecto{


    id?:number;
    nombrePro: string;
    descripcioPro:string;
    link:string;
    fecha:string;
    path:string;
    urlpro:string
  
    constructor(nombrePro: string,descripcioPro:string,link:string,fecha:string,path:string,urlpro:string)
      {
          this.nombrePro=nombrePro;
          this.descripcioPro=descripcioPro;
          this.link=link;
          this.fecha=fecha;
          this.path=path;
          this.urlpro=urlpro;
        }
  
  
   }
   
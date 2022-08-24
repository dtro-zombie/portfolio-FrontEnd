

export class Proyecto{


    id?:number;
    nombrePro: string;
    descripcioPro:string;
    link:string;
    fecha:string;
    
  
    constructor(nombrePro: string,descripcioPro:string,link:string,fecha:string)
      {
          this.nombrePro=nombrePro;
          this.descripcioPro=descripcioPro;
          this.link=link;
          this.fecha=fecha;
    
        }
  
  
   }
   
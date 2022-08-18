

export class Educacion {
    id?:number;
      nombreEdu: string;
      descripcionEdu:string;
      pathimgEdu:string;
      urlimgEdu:string;
      periodo:string;
  
      constructor(nombreEdu: string, descripcionEdu:string, urlimgEdu:string,pathimgEdu:string,periodo:string)
      {
          this.nombreEdu=nombreEdu;
          this.descripcionEdu=descripcionEdu;
          this.pathimgEdu=pathimgEdu;
          this.urlimgEdu=urlimgEdu;
          this.periodo=periodo;
      }
  }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu:string='';

  descripcionEdu:string='';

  pathimgEdu:string='';

  urlimgEdu:string='';

  periodo:string='';

  public loading: boolean =true;
  constructor(private sEducacion: SEducacionService, private router: Router, private storageService:StorageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEdu,this.descripcionEdu,this.urlimgEdu,this.pathimgEdu,this.periodo);
    this.sEducacion.save(edu).subscribe(
      data=>{
      
        alert("Educacion Añadida");
        this.router.navigate(['']);

      },err=>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


  imagen: any[]=[];
  
  
  public reader2= new FileReader();
  
  cargarImagen(event : any){

    let archivos = event.target.files;
    
    let reader =new FileReader();
   
    
    reader.readAsDataURL(archivos[0]);
    reader.onloadend=() =>
    {
      this.urlimgEdu.toString();
      
      console.log(reader.result);
      
      this.reader2=reader;
      this.imagen.push(this.reader2.result);
     
      
  }
}

 input1='';
input2='';
 
getValue(val:string)
{
  console.warn(val);
  this.input1=val;
  if(this.input1!='' && this.input2!=''){

    this.loading=false;
  }
  else{
    this.loading=true
  }

}
getValue2(val:string)
{
  console.warn(val);
  this.input2=val;
  
  if(this.input1!='' && this.input2!=''){

    this.loading=false;
  }
  else{
    this.loading=true
  }
}



subir()
{
  this.loading=true;

  
   this.storageService.subirImagen(this.pathimgEdu="edu"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
  
    this.urlimgEdu="";
  
    console.log(this.urlimgEdu+=urlImagen);
  
    setTimeout(() => 
    
    this.onCreate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );

   
}


}

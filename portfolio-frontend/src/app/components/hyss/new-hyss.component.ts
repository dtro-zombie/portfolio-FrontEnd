import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/model/hard';
import { SHardService } from 'src/app/service/s-hard.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-hyss',
  templateUrl: './new-hyss.component.html',
  styleUrls: ['./new-hyss.component.css']
})
export class NewHyssComponent implements OnInit {

  nombreHard:string='';

  pathimgHard:string='';

  urlimgHard:string='';

  porcentaje:number=0;

  public loading: boolean =true;
  constructor(private sHard: SHardService, private router: Router, private storageService:StorageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hard = new Hard(this.nombreHard,this.porcentaje,this.urlimgHard,this.pathimgHard);
    this.sHard.save(hard).subscribe(
      data=>{
      
        alert("Hard o Skill añadida");
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
      this.urlimgHard.toString();
      
      console.log(reader.result);
      
      this.reader2=reader;
      this.imagen.push(this.reader2.result);
     
      
  }
}

 input1='';

 input3='';
getValue(val:string)
{
  console.warn(val);
  this.input1=val;
  if(this.input1!='' && this.input3!=''){

    this.loading=false;
  }
  else{
    this.loading=true;
  }

}


getValue3(val:string)
{
  console.warn(val);
  this.input3=val;
  
  if(this.input1!='' && this.input3!=''){

    this.loading=false;
  }
  else{
    this.loading=true;
  }
}


subir()
{
  this.loading=true;

  
   this.storageService.subirImagen(this.pathimgHard="edu"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
  
    this.urlimgHard="";
  
    console.log(this.urlimgHard+=urlImagen);
  
    setTimeout(() => 
    
    this.onCreate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );

   
}

}

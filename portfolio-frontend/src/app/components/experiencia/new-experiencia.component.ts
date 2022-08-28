import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Storage,ref, uploadBytes, getStorage, deleteObject } from '@angular/fire/storage';
import { StorageService } from 'src/app/service/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})


export class NewExperienciaComponent implements OnInit {
  
  nombreE:string='';

  descripcionE:string='';

  pathimg:string='';

  urlimg:string='';

  periodoE:string='';

  public loading: boolean =true;
  constructor(private sExperiencia: SExperienciaService, private router: Router, private storageService:StorageService) { }

  ngOnInit(): void {
  }
  

  onCreate(): void{
    const expe = new Experiencia(this.nombreE,this.descripcionE,this.urlimg,this.pathimg,this.periodoE);
    this.sExperiencia.save(expe).subscribe(
      data=>{
      
        alert("experiencia añadida");
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
      this.urlimg.toString();
      
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

      
       this.storageService.subirImagen(this.pathimg="exp"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
      
        this.urlimg="";
      
        console.log(this.urlimg+=urlImagen);
      
        setTimeout(() => 
        
        this.onCreate(),
        
        2000);
        
      })
      
      .catch(error=>console.error()
      
      );

       
    }
    
      
  }




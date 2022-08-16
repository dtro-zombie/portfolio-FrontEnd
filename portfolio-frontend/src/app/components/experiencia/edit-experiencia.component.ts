import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

import { getStorage, ref, deleteObject } from "firebase/storage";
import { StorageService } from 'src/app/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
    exLab:Experiencia=null;
  
  constructor( private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute
    ,private router: Router,private storageService:StorageService) { }

    

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id']; 
    
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.exLab=data;
      },err=>{
        alert("Error al modificar experiencia");
              this.router.navigate(['']);
      }
    )
  }

    onUpdate(): void{

      const id= this.activatedRouter.snapshot.params['id'];
      console.log("upDate");
    console.log(this.exLab);
      this.sExperiencia.update(id,this.exLab).subscribe(
        data=>{
          console.log("upDate2");
    console.log(this.exLab);
          this.router.navigate(['']);
        }, err=>{
              alert("Error al modificar experiencia");
              this.router.navigate(['']);
        }
      )
    }
    public loading: boolean =false;
    
    imagen: any[]=[];
  
  
  public reader2= new FileReader();


  cargarImagen(event : any){

    
    let archivos = event.target.files;
    
    let reader =new FileReader();
   
    
    reader.readAsDataURL(archivos[0]);
    reader.onloadend=() =>
    {
      this.exLab.urlimg.toString(); 
      
      console.log(reader.result);
      
      this.reader2=reader;
      this.imagen.push(this.reader2.result);
      console.log("onloadend");
     console.log(this.exLab.pathimg.toString());
     
  }
}

public deletefirebase(pathimg?:string)
    {
      const storage = getStorage();

      // Create a reference to the file to delete
      const desertRef = ref(storage, "experiencia/"+pathimg);
      console.log("teoria")
      console.log(desertRef)
      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        console.log("mostrando error");
        console.log(error);
        // Uh-oh, an error occurred!
      });
    }




 subir()
    {

      this.loading=true;
      console.log("antes de borrar");
      console.log(this.exLab.pathimg.toString());
      this.deletefirebase(this.exLab.pathimg);
      console.log("despues de borrar");
      console.log(this.exLab.pathimg.toString());
       this.storageService.subirImagen(this.exLab.pathimg="exp"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
      console.log();
        this.exLab.urlimg="";
      
        console.log(this.exLab.urlimg+=urlImagen);
      
        setTimeout(() => 
        
        this.onUpdate(),
        
        2000);
        
      })
      
      .catch(error=>console.error()
      
      );
        
      
   
      

       
    }
  }



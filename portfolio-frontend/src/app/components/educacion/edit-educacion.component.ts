import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { StorageService } from 'src/app/service/storage.service';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  edu:Educacion=null;
  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute
    ,private router: Router,private storageService:StorageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id']; 
    
    this.sEducacion.detail(id).subscribe(
      data=>{
        this.edu=data;
      },err=>{
        alert("Error al modificar experiencia");
              this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id= this.activatedRouter.snapshot.params['id'];
    console.log("upDate");
  console.log(this.edu);
    this.sEducacion.update(id,this.edu).subscribe(
      data=>{
        console.log("upDate2");
  console.log(this.edu);
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
    this.edu.urlimgEdu.toString(); 
    
    console.log(reader.result);
    
    this.reader2=reader;
    this.imagen.push(this.reader2.result);
    console.log("onloadend");
   console.log(this.edu.pathimgEdu.toString());
   
}
}

public deletefirebase(pathimgEdu?:string)
{
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, "educacion/"+pathimgEdu);
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
  console.log(this.edu.pathimgEdu.toString());
  this.deletefirebase(this.edu.pathimgEdu);
  console.log("despues de borrar");
  console.log(this.edu.pathimgEdu.toString());
   this.storageService.subirImagen(this.edu.pathimgEdu="edu"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
  console.log();
    this.edu.urlimgEdu="";
  
    console.log(this.edu.urlimgEdu+=urlImagen);
  
    setTimeout(() => 
    
    this.onUpdate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );
    
  

  

   
}

}

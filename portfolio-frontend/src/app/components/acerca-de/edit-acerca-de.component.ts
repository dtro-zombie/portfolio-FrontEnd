import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { StorageService } from 'src/app/service/storage.service';
import { getStorage, ref, deleteObject } from "firebase/storage";
@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute
    ,private router: Router,private storageService:StorageService) { }
  Persona:persona=null;

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id']; 
    
    this.sPersona.detail(id).subscribe(
      data=>{
        console.log("ver id carga"+id);
        this.Persona=data;
      },err=>{
        alert("Error al modificar experiencia");
              this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id= this.activatedRouter.snapshot.params['id'];
    console.log("versad id"+id);
  console.log(this.Persona);
    this.sPersona.update(id,this.Persona).subscribe(
      data=>{
     
  
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
    
    
   
    
    this.reader2=reader;
    this.imagen.push(this.reader2.result);
   

   
}
}

public deletefirebase(pathimgEdu?:string)
{
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, "perfil/"+pathimgEdu);
  
  console.log(desertRef)
  // Delete the file
  deleteObject(desertRef).then(() => {
    // File deleted successfully
  }).catch((error) => {
    
    console.log(error);
    // Uh-oh, an error occurred!
  });
}

subir()
{

  this.loading=true;
 
  
  this.deletefirebase(this.Persona.path);
  
  
   this.storageService.subirImagen(this.Persona.path="perfil"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{

    this.Persona.img="";
  
    console.log(this.Persona.img+=urlImagen);
  
    setTimeout(() => 
    
    this.onUpdate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );
    
  

  

   
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hard } from 'src/app/model/hard';
import { SHardService } from 'src/app/service/s-hard.service';
import { StorageService } from 'src/app/service/storage.service';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-edit-hyss',
  templateUrl: './edit-hyss.component.html',
  styleUrls: ['./edit-hyss.component.css']
})
export class EditHyssComponent implements OnInit {

  hard:Hard=null;
  constructor(private sHard: SHardService, private activatedRouter: ActivatedRoute
    ,private router: Router,private storageService:StorageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id']; 
    
    this.sHard.detail(id).subscribe(
      data=>{
        this.hard=data;
      },err=>{
        alert("Error al modificar experiencia");
              this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id= this.activatedRouter.snapshot.params['id'];
    console.log("upDate");
  console.log(this.hard);
    this.sHard.update(id,this.hard).subscribe(
      data=>{
        console.log("upDate2");
  console.log(this.hard);
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
    this.hard.urlimgHard.toString(); 
    
    console.log(reader.result);
    
    this.reader2=reader;
    this.imagen.push(this.reader2.result);
    console.log("onloadend");
   console.log(this.hard.pathimgHard.toString());
   
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
  console.log(this.hard.pathimgHard.toString());
  this.deletefirebase(this.hard.pathimgHard);
  console.log("despues de borrar");
  console.log(this.hard.pathimgHard.toString());
   this.storageService.subirImagen(this.hard.pathimgHard="edu"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
  console.log();
    this.hard.urlimgHard="";
  
    console.log(this.hard.urlimgHard+=urlImagen);
  
    setTimeout(() => 
    
    this.onUpdate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );
    
  

  

   
}


}

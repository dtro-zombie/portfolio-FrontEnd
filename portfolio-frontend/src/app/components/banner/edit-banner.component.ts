import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { SBannerService } from 'src/app/service/s-banner.service';
import { StorageService } from 'src/app/service/storage.service';
import { getStorage, ref, deleteObject } from "firebase/storage";
@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  constructor(private sBanner: SBannerService, private activatedRouter: ActivatedRoute
    ,private router: Router,private storageService:StorageService) { }
  banner:Banner=null;

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id']; 
    
    this.sBanner.detail(id).subscribe(
      data=>{
        this.banner=data;
      },err=>{
        alert("Error al modificar experiencia");
              this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id= this.activatedRouter.snapshot.params['id'];
    
  
    this.sBanner.update(id,this.banner).subscribe(
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
  const desertRef = ref(storage, "banner/"+pathimgEdu);
  
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
 
  
  this.deletefirebase(this.banner.pathBa);
  
  
   this.storageService.subirImagen(this.banner.pathBa="banner"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{

    this.banner.linkBa="";
  
    console.log(this.banner.linkBa+=urlImagen);
  
    setTimeout(() => 
    
    this.onUpdate(),
    
    2000);
    
  })
  
  .catch(error=>console.error()
  
  );
    
  

  

   
}

}

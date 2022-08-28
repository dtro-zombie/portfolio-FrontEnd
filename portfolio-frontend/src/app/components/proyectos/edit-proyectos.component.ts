import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { StorageService } from 'src/app/service/storage.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto:Proyecto=null;
 
  constructor(private sProyecto: SProyectoService,private activatedRouter: ActivatedRoute
    , private router: Router, private storageService:StorageService) { }
    ngOnInit(): void {
      const id= this.activatedRouter.snapshot.params['id']; 
      
      this.sProyecto.detail(id).subscribe(
        data=>{
          this.proyecto=data;
        },err=>{
          alert("Error al modificar experiencia");
                this.router.navigate(['']);
        }
      )
    }
  
      onUpdate(): void{
  
        const id= this.activatedRouter.snapshot.params['id'];
        console.log("upDate");
      console.log(this.proyecto);
        this.sProyecto.update(id,this.proyecto).subscribe(
          data=>{
            console.log("upDate2");
      console.log(this.proyecto);
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
        this.proyecto.link.toString(); 
        
        console.log(reader.result);
        
        this.reader2=reader;
        this.imagen.push(this.reader2.result);
        console.log("onloadend");
       console.log(this.proyecto.path.toString());
       
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
        console.log(this.proyecto.link.toString());
        this.deletefirebase(this.proyecto.path);
        console.log("despues de borrar");
        console.log(this.proyecto.path.toString());
         this.storageService.subirImagen(this.proyecto.path="exp"+"_"+Date.now(),this.reader2.result).then(urlImagen=>{
        console.log();
          this.proyecto.link="";
        
          console.log(this.proyecto.link+=urlImagen);
        
          setTimeout(() => 
          
          this.onUpdate(),
          
          2000);
          
        })
        
        .catch(error=>console.error()
        
        );
          
        
     
        
  
         
      }
    }
  



import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
    expe: Experiencia []=[];
  constructor(private sExpericia:SExperienciaService,private tokenService:TokenService) { }
    isLogged=false;
  ngOnInit(): void {
    this.cargarExperiencia(); 
      if(this.tokenService.getToken())
      {
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    }

    cargarExperiencia():void{
      this.sExpericia.lista().subscribe(data=>{this.expe=data;});
    }
    
    delete(id?:number, pathimg?:string){
      if(id != undefined)
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
          // Uh-oh, an error occurred!
        });

       
setTimeout(() => 
        
this.sExpericia.delete(id).subscribe(
  data=>{
    this.cargarExperiencia();

  },err=>{
    alert("No se pudo eliminar experiencia");
  }
),2000);
        
      }
   
    }


  }



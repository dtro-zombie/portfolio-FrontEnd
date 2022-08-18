import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion []=[];
  constructor(private sEducacion:SEducacionService,private tokenService:TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.cargarEducacion(); 
      if(this.tokenService.getToken())
      {
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
  }
  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data=>{this.edu=data;});
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
        // Uh-oh, an error occurred!
      });
    }


    async delete(id?:number, pathimg?:string){
      if(id != undefined)
      {
        
        //await this.storage.deletefirebase(pathimg);
      await this.deletefirebase(pathimg);

       
setTimeout(() => 
        
this.sEducacion.delete(id).subscribe(
  data=>{
    this.cargarEducacion();

  },err=>{
    alert("No se pudo eliminar experiencia");
  }
),2000);
        
      }
   
    }

  }
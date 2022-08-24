import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto:Proyecto[]=[];

  constructor(private sProyecto:SProyectoService,private tokenService:TokenService) { }
  isLogged=false;
 
 


 ngOnInit(): void {

  


  console.log(this.proyecto);



   this.cargarProyecto(); 

    
    
   
    if(this.tokenService.getToken())
    {
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  

        
  }
  cargarProyecto():void{
    this.sProyecto.lista().subscribe(data=>{this.proyecto=data;});
    
  }

  public deletefirebase(pathimg?:string)
  {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "hard/"+pathimg);
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
      
this.sProyecto.delete(id).subscribe(
data=>{
  this.cargarProyecto();

},err=>{
  alert("No se pudo eliminar Hard");
}
),2000);
      
    }
 
  }


 
  




}

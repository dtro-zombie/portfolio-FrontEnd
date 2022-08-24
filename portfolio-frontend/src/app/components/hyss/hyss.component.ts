import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { SHardService } from 'src/app/service/s-hard.service';
import { Hard } from 'src/app/model/hard';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css']
})
export class HyssComponent implements OnInit {

  hard:Hard[]=[];
  constructor(private sHard:SHardService,private tokenService:TokenService) { }
  isLogged=false;
 
 
 ngOnInit(): void {
  
   this.cargarHard(); 

    


    if(this.tokenService.getToken())
    {
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }


  }
  cargarHard():void{
    this.sHard.lista().subscribe(data=>{this.hard=data;});
    
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
      
this.sHard.delete(id).subscribe(
data=>{
  this.cargarHard();

},err=>{
  alert("No se pudo eliminar Hard");
}
),2000);
      
    }
 
  }

  

}

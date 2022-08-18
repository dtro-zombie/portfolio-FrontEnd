import { Injectable } from '@angular/core';
import { deleteObject, getStorage, ref } from '@angular/fire/storage';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

firebase.initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: 'root'
})



export class StorageService {
    
    storareRef= firebase.app().storage().ref();

  constructor() { }
  public rta2: string;
  async subirImagen(nombre: string, imgBase64:any){

    try{
         let carpeta:string;
         if(nombre.includes("exp"))
         {
           carpeta="experiencia/"
         }
         if(nombre.includes("edu"))
         {
           carpeta="educacion/"
         }
          let respuesta= await this.storareRef.child(carpeta+nombre).putString(imgBase64,'data_url');
          this.rta2=respuesta.ref.fullPath;
       
          console.log("obtengo algo");
          console.log(this.rta2);
          
          return await respuesta.ref.getDownloadURL();

    } catch (err){
      console.log(err);
      return "https://png.pngtree.com/png-clipart/20190921/original/pngtree-no-photo-taking-photo-illustration-png-image_4698291.jpg";
    }
  }

}



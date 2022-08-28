import { Injectable } from '@angular/core';
import { deleteObject, getStorage, ref } from '@angular/fire/storage';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment} from 'src/environments/environment';
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
           carpeta="experiencia/";
         }
         if(nombre.includes("edu"))
         {
           carpeta="educacion/";
         }
         if(nombre.includes("banner"))
         {
           carpeta="banner/";
         }
         if(nombre.includes("perfil"))
         {
           carpeta="perfil/";
         }
         if(nombre.includes("proye"))
         {
           carpeta="proye/";
         }
          let respuesta= await this.storareRef.child(carpeta+nombre).putString(imgBase64,'data_url');
          this.rta2=respuesta.ref.fullPath;
          
          
          return await respuesta.ref.getDownloadURL();

    } catch (err){
      console.log(err);
      return "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-1.appspot.com/o/pexels-danny-meneses-943096.jpg?alt=media&token=cd51fbec-4e7c-4a5a-8375-71e5ff6a43ef";
    }
  }

}



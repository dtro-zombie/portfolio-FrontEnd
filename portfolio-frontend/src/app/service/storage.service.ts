import { Injectable } from '@angular/core';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { NewExperienciaComponent } from '../components/experiencia/new-experiencia.component';

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
         
          let respuesta= await this.storareRef.child("experiencia/"+nombre).putString(imgBase64,'data_url');
          this.rta2=respuesta.ref.fullPath;
       
          console.log("obtengo algo");
          console.log(this.rta2);
          
          return await respuesta.ref.getDownloadURL();

    } catch (err){
      console.log(err);
      return null;
    }
  }
}



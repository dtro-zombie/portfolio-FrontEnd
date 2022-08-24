import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
Persona: persona[]=[];
  
  
  constructor(private perosnaService:PersonaService,private tokenService:TokenService) { }
  isLogged=false;
 public isnull:boolean =false;
  ngOnInit(): void {
   
    this.cargarPersona(); 
      
      if(this.tokenService.getToken())
      {
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
      console.log(this.Persona);
  }
  cargarPersona():void{
    this.perosnaService.lista().subscribe(data=>{this.Persona=data;});
  }

}

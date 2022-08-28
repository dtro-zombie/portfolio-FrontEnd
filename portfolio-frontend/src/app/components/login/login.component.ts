import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

isLogged= false;
isLogginFail= false;
loginUsuario!: LoginUsuario;
nombreUsuario!:string;
password!: string;
roles: string[]=[];
errMsj!:string;

  constructor(private tokenService: TokenService, private authService:AuthService, private router:Router,private cookieService:CookieService) { 
    
  }

  ngOnInit(): void {

    if(this.tokenService.getToken())
    {
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles= this.tokenService.getAuthorities();
    }

  }

onLogin(): void{

  this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);

    this.authService.login(this.loginUsuario).subscribe(data => {
    this.isLogged=true;
    this.isLogginFail=false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);
    this.roles=data.authorities;
    this.cookieService.set('token_access',data.token,4,'/');


    this.router.navigate(['/'])

  },err=>{
    this.isLogged=false;
    this.isLogginFail=true;
    this.errMsj=err.error.mensaje;
    if(this.errMsj='undefined')
    {
      alert("Usuario o Contraseña incorrecta");
    }
   
     
  })
}


}

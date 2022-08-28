import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class PortfolioGuardGuard implements CanActivate {
  constructor(private cookiService:CookieService,private router:Router){}

  redirect(flag:boolean):any{
    if(!flag)
    {
      this.router.navigate(['/','login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

const cookie= this.cookiService.check('token_access');
this.redirect(cookie);


    return cookie;
  }
  
}

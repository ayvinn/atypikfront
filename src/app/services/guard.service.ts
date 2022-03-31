
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router  } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
  })

export class AuthServiceGuard implements CanActivate{
    constructor(private _router : Router , private jwtHelper : JwtHelperService){
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = localStorage.getItem('jwt');
        //let url: string = state.url; 
        if(token && !this.jwtHelper.isTokenExpired(token)){
          return true;
        }
        this._router.navigate(["login"]);
        return false;
      }

}

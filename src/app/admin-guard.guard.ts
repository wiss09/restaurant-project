import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
constructor(private router:Router){}
   token:any=sessionStorage.getItem('DingoToken')
   user:any = jwtDecode(this.token)  
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
     
     console.log(this.user.role);
     console.log(sessionStorage.length);
     
     if (sessionStorage.length==0 || this.user.role!=='admin' ) {
      
      this.router.navigate(['/login']);
      return false
    }else{
       return true;
      }
      
      
      
      
   
  }
  
}

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'services/loginservice';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private loginService: LoginService
) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.loginService.getCurrentUser();
      console.log(currentUser.role)
      console.log(   next.data.roles[0] )
   
      if (currentUser) {
        console.log(next.data.roles)

           if (next.data.roles[0] !== currentUser.role) {
               // role not authorised so redirect to home page
               this.router.navigate(['/login']);
               return false;
           }

          // authorised so return true
          return true;
      }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

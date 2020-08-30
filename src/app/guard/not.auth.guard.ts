import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router, private authenService: AuthenService) {

  }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const user = this.authenService.getUserInfo();
    if (user && user.token && user.token.value) {
      this.gotoDashboard();
      return false;
    }
    return true;
  }
  gotoDashboard() {
    this.router.navigate(['pages/dashboard']);
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenService: AuthenService) {

  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<any> {
      const user = this.authenService.getUserInfo();
      if (!user || !user.token || !user.token.access_token) {
        this.login();
        return false;
      }
      return true;
  }
  login() {
    this.router.navigate(['/login']);
  }
}

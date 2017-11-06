import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    const result = this.authService.isLoggedIn();
    if (!result) {
      this.router.navigate(['']);
    }
    return true;
  }
}

import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit(email: string, password: string) {
    email = email.trim();
    password = password.trim();
    this.authService.login(email, password).subscribe(success => {
      if (success) {
        this.router.navigate(['']);
      } else {
        this.error = true;
      }
    });
  }

}

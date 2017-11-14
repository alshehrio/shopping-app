import { UserService } from '../../service/user.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  getUsername() {
    this.userService.get('').subscribe(response => {
      console.log(response);
    });
    return 'dksfjld';
  }

}

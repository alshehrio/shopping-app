import { Cart } from 'shared/models/cart.model';
import { CartService } from 'shared/services/cart.service';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public cart: Cart;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private cartService: CartService) {
      this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  getUsername(): string {
    return this.authService.getUser().name;
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}

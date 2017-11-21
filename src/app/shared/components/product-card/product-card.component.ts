import 'rxjs/add/operator/take';

import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { CartService } from 'shared/services/cart.service';
import { Cart } from 'shared/models/cart.model';

@Component({
  selector: 'shared-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: Product;
  @Input() hasAction = false;
  public cart: Cart;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  addToCart() {
    this.cartService.addItem(this.product)
      .subscribe(cart => this.cart = cart);
  }

}

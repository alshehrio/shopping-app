import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { CartService } from 'shared/services/cart.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'shared-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: Product;
  @Input() hasAction = false;

  quantity = 0;
  constructor(private cartService: CartService) {
    this.cartService.cart.subscribe(cart => {
      console.log(cart);
      const item = cart.getItem(this.product);
      this.quantity = item ? item.quantity : 0;
    });
   }

  addToCart() {
    console.log('hamdallah0');
    this.cartService.addItem(this.product);
  }

}

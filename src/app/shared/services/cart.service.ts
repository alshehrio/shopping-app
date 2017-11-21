
import { Product } from 'app/shared/models/product.model';
import { Http } from '@angular/http';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { FirebaseHttpService } from 'shared/services/firebase-http.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject as Subject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class CartService extends FirebaseHttpService<Cart> {
  private cart$: Subject<Cart>;

  constructor(http: Http) {
    super('carts', http);
  }

  get cart(): Subject<Cart> {
    if (this.cart$) { return this.cart$; }

    this.cart$ = new Subject(new Cart({id: 'a', items : []}));

    this.getById('a').subscribe(cart => this.cart$.next(cart));
    return this.cart$;
  }

  transformFirebaseEntityToObject(cartJson) {
    return new Cart(cartJson);
  }

  transformObjectToFirebaseEntity(cart: Cart) {
    return { items: cart.items };
  }

  addItem(product: Product, quantity = 1) {
    this.cart.map(cart => {
      cart.addItem(product, quantity);
      return cart;
    }).switchMap(cart => this.update(cart))
      .subscribe(cart => {
        this.cart$.next(cart);
      });
  }
}

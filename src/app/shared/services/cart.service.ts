import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from 'app/shared/models/product.model';
import { Observable } from 'rxjs/Observable';
import { FirebaseHttpService } from 'shared/services/firebase-http.service';

import { Cart } from './../models/cart.model';
import { LocalStorgrUtil } from 'shared/utils/local-storge.util';


@Injectable()
export class CartService extends FirebaseHttpService<Cart> {
  private _cart$: Observable<Cart>;

  constructor(http: Http) {
    super('carts', http);
  }

  get cart$(): Observable<Cart> {
    if (!LocalStorgrUtil.has('token')) {
      return Observable.of(new Cart());
    }
    if(!this._cart$) {
      this._cart$ = this.getById('a');
    }
    return this._cart$;
  }

  transformFirebaseEntityToObject(cartJson) {
    return new Cart(cartJson);
  }

  transformObjectToFirebaseEntity(cart: Cart) {
    return { items: cart.items };
  }

  addItem(product: Product, quantity = 1): Observable<Cart> {
    return this.cart$.map(cart => {
      cart.addItem(product, quantity);
      return cart;
    })
      .switchMap(cart => this.update(cart));
  }
}

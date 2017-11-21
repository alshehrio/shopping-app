import { Product } from 'shared/models/product.model';

import { CartItem } from './cart-item.model';
import { Identifiable } from './Identfiable.model';

export class Cart implements Identifiable {
    public id;
    items: CartItem[] = [];

    constructor(init?: Partial<Cart>) {
        Object.assign(this, init);
    }

    addItem(product: Product, quantity = 1) {
        let item = this.getItem(product);
        if (!item) {
            item = new CartItem(product, quantity);
            this.items.push(item);
        } else {
            item.quantity += 1;
        }
    }

    getItem(product) {
        for (const item of this.items) {
            if (item.product.id === product.id) {
                return item;
            }
        }
    }

    get quantity() {
        return this.items.reduce((previos: number, current: CartItem) => previos + current.quantity, 0);
    }
}

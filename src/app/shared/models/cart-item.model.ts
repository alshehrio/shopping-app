import { Product } from './product.model';
import { Identifiable } from './Identfiable.model';

export class CartItem {

    constructor(public product, public quantity) { }
}

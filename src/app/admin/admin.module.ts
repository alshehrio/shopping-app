import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import { OrdersComponent } from './component/orders/orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, OrdersComponent],
  exports: [
    OrdersComponent,
    ProductsComponent
  ]
})
export class AdminModule { }

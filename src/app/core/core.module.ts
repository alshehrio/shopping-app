import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { appRoutes } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ProductsComponent, OrdersComponent, ProductFormComponent],
  exports: [
    OrdersComponent,
    ProductsComponent
  ]
})
export class AdminModule { }

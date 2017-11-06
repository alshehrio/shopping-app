import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './admin/component/orders/orders.component';
import { ProductsComponent } from './admin/component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGaurd } from './guard/auth.guard';

export class Paths {
  static SHOPPING_CART = 'shopping-cart';
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'admin/orders', component: OrdersComponent, canActivate: [AuthGaurd, AdminGuard]},
  { path: 'admin/products', component: ProductsComponent, canActivate: [AuthGaurd, AdminGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AdminGuard,
    AuthGaurd
  ]
})
export class AppRoutingModule {}

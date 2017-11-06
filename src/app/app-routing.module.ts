import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

export class Paths {
  static SHOPPING_CART = 'shopping-cart';
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: Paths.SHOPPING_CART, component: ShoppingCartComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

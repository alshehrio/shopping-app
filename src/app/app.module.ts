import { RouterModule } from '@angular/router';
import { ProductService } from './service/product.service';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { UserService } from './service/user.service';
import { AuthHttp } from './service/auth-http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductGridComponent } from './component/product-grid/product-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    LoginComponent,
    ProductCardComponent,
    ProductGridComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    AdminModule,

    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [AuthService, AuthHttp, UserService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }

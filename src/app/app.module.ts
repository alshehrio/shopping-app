import { UserService } from './service/user.service';
import { AuthHttp } from './service/auth-http.service';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    AdminModule,

    FormsModule,
    HttpModule
  ],
  providers: [AuthService, AuthHttp, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

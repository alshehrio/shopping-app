import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { AuthGaurd } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
    import {TranslateModule} from 'ng2-translate';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // TranslateModule,
    NgbModule.forRoot(),
  ],
  exports: [
    ProductCardComponent,
    FormsModule,
    BrowserModule,
    NgbModule,
    // TranslateModule,
    CustomFormsModule,
  ],
  declarations: [ProductCardComponent],
  providers: [
    AuthService,
    UserService,
    CategoryService,
    ProductService,
    CustomFormsModule,
    AuthGaurd,
  ]
})
export class SharedModule { }

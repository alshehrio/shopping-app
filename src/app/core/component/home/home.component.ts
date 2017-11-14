import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './../../model/product.model';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[];
  categoryParam;
  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService
      .getAllCateogries()
      .subscribe(cs => (this.categories = cs));
    this.route.queryParamMap.subscribe(queryParams => {
      this.categoryParam = queryParams.get('category');
      if (this.categoryParam) {
        this.productService
          .getByCategory(this.categoryParam)
          .subscribe(products => (this.products = products));
      } else {
        this.productService.getAll().subscribe(ps => this.products = ps);
      }
    });
  }

  chooseCategory(categoryKey) {
    this.productService.getByCategory(categoryKey).subscribe(products => {
      this.products = products;
    });
  }
}

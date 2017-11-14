import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: string[];
  private id;
  @Input() product: Product;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getAllCateogries().subscribe(cs => this.categories = cs);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service.get(id).subscribe(p => {
          this.id = id;
          this.product = p;
          console.log(p);
        });
      } else {
        this.product = new Product();
      }
    });
  }

  submit() {
    console.log('submit', this.product);
    if (this.product.id) {
      this.service.update(this.product).subscribe(r => {
        console.log(r);
      });
    } else {
      this.service.add(this.product).subscribe(id => {
        console.log(id);
      });
    }
  }

  delete() {
    console.log('delete', this.product);
    this.service.delete(this.id).subscribe();
  }

  goToProducts(): void {
    this.router.navigateByUrl('/admin/products');
  }
}

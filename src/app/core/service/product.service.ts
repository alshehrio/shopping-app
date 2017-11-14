import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Product } from '../model/product.model';
import { AuthHttp } from './auth-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  URL = 'https://fir-demo-524e3.firebaseio.com/products.json';

  constructor(private http: Http, private authHttp: AuthHttp, private authService: AuthService) {}

  getAll(): Observable<any> {
    return this.authHttp
      .get(this.URL)
      .map(response => response.json())
      .map(response => {
        const array = [];
        Object.keys(response).forEach(key => {
          array.push({ ...response[key], id: key });
        });
        return array;
      });
  }

  getByCategory(categoryKey): Observable<any> {
    return this.http
      .get(
        `https://fir-demo-524e3.firebaseio.com/products.json?orderBy="category"&equalTo="${categoryKey}"&auth=${this.authService.getIdToken()}`
      )
      .map(response => response.json())
      .map(response => {
        const array = [];
        Object.keys(response).forEach(key => {
          array.push({ ...response[key], id: key });
        });
        return array;
      });
  }

  get(id: string): Observable<Product> {
    return this.authHttp
      .get(`https:// fir-demo-524e3.firebaseio.com/products/${id}.json`)
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }

  add(p: Product): Observable<string> {
    return this.authHttp
      .post(this.URL, p)
      .map(response => response.json().name);
  }

  update(p: Product): Observable<any> {
    return this.authHttp.put(this.URL, p).map(response => response.json());
  }

  delete(id: number): Observable<Product> {
    return this.authHttp
      .delete(`https://fir-demo-524e3.firebaseio.com/products/${id}.json`)
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }

  getAllCateogries(): Observable<any[]> {
    return this.authHttp
      .get('https://fir-demo-524e3.firebaseio.com/categories.json')
      .map(response => response.json())
      .map(response => {
        const array = [];
        Object.keys(response).forEach(key => {
          array.push({ ...response[key], key: key });
        });
        return array;
      });
  }
}

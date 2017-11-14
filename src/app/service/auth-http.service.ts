import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHttp {
  constructor(private authService: AuthService, private http: Http) {}

  get(url): Observable<any> {
    return this.http.get(`${url}?auth=${this.authService.getIdToken()}`);
  }

  post(url, body): Observable<any> {
    return this.http.post(`${url}?auth=${this.authService.getIdToken()}`, body);
  }

  put(url, body): Observable<any> {
    return this.http.put(`${url}?auth=${this.authService.getIdToken()}`, body);
  }
  delete(url): Observable<any> {
    return this.http.delete(`${url}?auth=${this.authService.getIdToken()}`);
  }
}

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHttp {

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  get(url): Observable<any> {
    return this.http.get(`url?auth=${this.authService.getIdToken()}`);
  }
}

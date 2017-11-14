import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  AUTH_ENDPOINT = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBPUKGPMmaJsVMqq-KaY56Kn5TPLAKOqks';
  constructor(private http: Http, private router: Router) {}

  login(email: string, password): Observable<boolean> {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this.http
      .post(
        this.AUTH_ENDPOINT,
        {
          email: email,
          password: password,
          returnSecureToken: true
        },
        {
          headers: headers
        }
      )
      .map(response => {
        this.storeFirebaseToken(response.json());
      }).mergeMap(response => {
        const username = email.substring(0, email.indexOf('@'));
        console.log(username);
        return this.http.get(`https://fir-demo-524e3.firebaseio.com/users/${username}.json?auth=${this.getIdToken()}`);
      })
      .map(response => {
        console.log(response);
        this.storeUser(response.json());
        return true;
      })
      .catch(error => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return Observable.of(false);
      });
  }

  storeFirebaseToken(user: any) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  storeUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  getToken() {
    if (!this.isLoggedIn()) {
      throw new Error('Not logged in');
    }
    const token = localStorage.getItem('token');
    if (token === null) {
      throw new Error('No user object in the localStorge');
    }
    return JSON.parse(token);

  }

  getIdToken() {
    return JSON.parse(localStorage.getItem('token')).idToken;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null && localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

}

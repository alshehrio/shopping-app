import { AuthHttp } from './auth-http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  URL = 'https://fir-demo-524e3.firebaseio.com';
  constructor(private authHttp: AuthHttp) { }

  get(username: string) {
    return this.authHttp.get('${URL}/useres/a.json');
  }

}

import { Injectable } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

import {AppConfig} from '../../app.config';
import {User} from '../_models/user';

@Injectable()
export class AuthRegisterService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    console.log(user);
    return this.http.post(appConfig.apiUrl + 'api/signup', user);
  }

}

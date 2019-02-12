import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {AppConfig} from '../app.config';
import {Review} from '../_models/review';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReviewService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

  create(review: Review) {
    console.log(review);

    return this.http.post(AppConfig.apiUrl + '/api/film', review);
  }

  getAllReviews(): Observable<Array<Review>> {
    try {

      return this.http.get(`${AppConfig.apiUrl}/api/film`).map(res => res as Array<Review> || []) ;
    } catch (error) {
      console.log(error.msg);
    }
  }

  delete(id: string) {
    return this.http.delete(`${AppConfig.apiUrl}/api/film` + id);
  }
}

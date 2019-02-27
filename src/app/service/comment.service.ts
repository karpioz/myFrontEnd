import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../app.config';
import {Comment} from '../_models/comment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  createComment(comment: Comment){
    console.log(comment);

    return this.http.post(AppConfig.apiUrl + '/api/comment', comment);
  }

  deleteComment(id: string) {
    return this.http.delete(`${AppConfig.apiUrl}/api/comment` + id);
  }

  getCommentsByFilmID(filmID: string): Observable<Array<Comment>> {
    try {
      return this.http.get(`${AppConfig.apiUrl}/api/comment` + filmID).map(res => res as Comment);
    } catch (error) {
      console.log(error.msg);
    }
  }

  updateComment(comment: Comment) {
    return this.http.put(`${AppConfig.apiUrl}/api/comment` + comment._id, comment);
  }

}

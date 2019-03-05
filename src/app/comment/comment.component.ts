import { Component, OnInit, Input } from '@angular/core';
import { CommentService} from '../service/comment.service';
import { Comment} from '../_models/comment';
import {Router} from '@angular/router';
import {User} from '../_models/user';
import { AuthLoginService} from '../service/auth-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() filmID: string;
  allComments: Array<Comment>;
  currentUser: User;
  username: Observable<string>;
  constructor(private commentService: CommentService,
              private authService: AuthLoginService,
              private router: Router) { }

  ngOnInit() {
    this.commentService.getCommentsByFilmID(this.filmID).subscribe(data => {
      this.allComments = data;
      console.log(data);
      console.log('this comment');
      console.log(this.allComments);
    });
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AuthLoginService} from '../service/auth-login.service';
import { Comment } from '../_models/comment';
import { CommentService} from '../service/comment.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() filmID: string;
  currentUser: User;
  newComment = new Comment();
    constructor(private commentService: CommentService,
              private authService: AuthLoginService,
              private router: Router) { }

  ngOnInit = () => {
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = this.currentUser);
  }

  sendComment() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.newComment.userID = this.currentUser._id;
      const array = this.currentUser.email.split('@');
      this.newComment.userName = array[0];
      // this.newComment.comment = 'Type your message here';
    this.newComment.filmID = this.filmID;
    console.log(this.newComment);
    this.commentService.createComment(this.newComment)
      .subscribe(res => {
        const success = res['success'];
        console.log('success');
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
  }
}

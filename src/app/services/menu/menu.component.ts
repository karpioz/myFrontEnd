import { Component, OnInit, NgModule } from '@angular/core';
import {ViewChild} from '@angular/core';

import {User} from '../../_models/user';

import {MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';

import {AuthLoginService} from '../../service/auth-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  currentUser: User;
  LoggedIn: boolean;

  constructor(private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.authService.currentLoggedIn.subscribe(LoggedIn => this.LoggedIn = LoggedIn);
    this.authService.currentUserObserver._subscribe(currentUser => this.currentUser = currentUser);
    // noinspection JSIgnorePromiseFromCall
  }

}

/*
import {Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {AuthRegisterService} from '../service/auth-register.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: AuthRegisterService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }
}
*/
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  currentUser: User;


  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }


}

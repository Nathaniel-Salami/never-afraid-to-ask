import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    return this.authService.isAuthenticated();
  }

  onSetupCourse() {

  }
  // isStudent() {

  // }

  // isProfessor() {

  // }

}
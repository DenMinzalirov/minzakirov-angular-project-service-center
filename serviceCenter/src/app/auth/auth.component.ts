import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // isLoginMode = true;

  constructor(private authService: AuthService) {
  }
  user: Observable<firebase.User | null> | string;

  check() {
    // console.log(this.authService.user.subscribe(console.log));
    this.authService.getAuth().subscribe(console.log);
    // console.log(this.user.subscribe(console.log));
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
    // this.authService.getAuth().subscribe(x => this.user = x.email);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.user = this.authService.getAuth();
  }

}

import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
  // isLoginMode = true;
  user = this.fb.group({
    email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  register = this.fb.group({
    email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
  }
  logged: Observable<firebase.User | null> | string;

  getErrorMessage() {
    return this.user.value.email.hasError('required') ? 'You must enter a value' :
      this.user.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  check() {
    // console.log(this.authService.user.subscribe(console.log));
    // this.authService.getAuth().subscribe(console.log);
    // console.log(this.user.subscribe(console.log));
  }

  onSubmit() {
    const email = this.user.value.email;
    const password = this.user.value.password
    this.authService.login(email, password);
    // this.authService.getAuth().subscribe(x => this.user = x.email);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // TODO исправить для новой формы
    this.logged = this.authService.getAuth();
  }

}

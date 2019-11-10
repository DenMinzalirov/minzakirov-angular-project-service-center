import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {
  user: FormGroup = this.fb.group({
    email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  register: FormGroup = this.fb.group({
    email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  logged: Observable<firebase.User | null>;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  getErrorMessage() {
    return this.user.value.email.hasError('required') ? 'You must enter a value' :
      this.user.value.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    const email = this.user.value.email;
    const password = this.user.value.password;
    this.authService.login(email, password);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.logged = this.authService.getAuth();
  }

}

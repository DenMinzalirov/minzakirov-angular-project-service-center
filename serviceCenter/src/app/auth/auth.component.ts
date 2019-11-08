import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
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
  logged; // : Observable<firebase.User | null> | string;

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
    // TODO исправить для новой формы
    this.logged = this.authService.getAuth();
  }

}

import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }
  user;
  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(r => this.user = r.user.email);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState;
  }
}

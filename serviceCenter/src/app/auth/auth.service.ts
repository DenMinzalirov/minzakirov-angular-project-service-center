import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

// export interface AuthResponseData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//   registered?: boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  user;

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(r => this.user = r.user.email);
    // console.log(this.afAuth.user.subscribe(x => x.email));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState;
  }
}

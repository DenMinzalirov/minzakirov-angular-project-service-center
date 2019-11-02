import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {environment} from '../../environments/environment';
import {MatButtonModule, MatCardModule, MatTabsModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatIconModule, MatProgressBarModule} from '@angular/material';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    AngularFireAuthModule,
    FormsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatPasswordStrengthModule,
    MatProgressBarModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class AuthModule { }

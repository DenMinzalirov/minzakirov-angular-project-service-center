import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderAcceptanceComponent } from './order-acceptance/order-acceptance.component';
import { OrderControlComponent } from './order-control/order-control.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import { OrderViewComponent } from './order-view/order-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { TemppComponent } from './order-view/tempp/tempp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrderAcceptanceComponent,
    OrderControlComponent,
    OrderViewComponent,
    TemppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

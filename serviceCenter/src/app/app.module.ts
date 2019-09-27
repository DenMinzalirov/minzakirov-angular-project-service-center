import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderAcceptanceComponent } from './order-acceptance/order-acceptance.component';
import { OrderControlComponent } from './order-control/order-control.component';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrderAcceptanceComponent,
    OrderControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

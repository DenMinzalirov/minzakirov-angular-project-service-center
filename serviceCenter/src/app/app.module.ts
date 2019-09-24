import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderAcceptanceComponent } from './order-acceptance/order-acceptance.component';
import { OrderControlComponent } from './order-control/order-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrderAcceptanceComponent,
    OrderControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

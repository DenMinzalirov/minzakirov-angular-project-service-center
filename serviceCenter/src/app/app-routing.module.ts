import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderAcceptanceComponent} from "./order-acceptance/order-acceptance.component";
import {OrderControlComponent} from "./order-control/order-control.component";


const routes: Routes = [
  {path: '', component: OrderAcceptanceComponent},
  {path: 'order-control', component: OrderControlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

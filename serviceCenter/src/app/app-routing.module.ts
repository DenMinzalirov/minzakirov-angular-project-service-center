import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderAcceptanceComponent} from './order-acceptance/order-acceptance.component';
import {OrderControlComponent} from './order-control/order-control.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {QuickEditComponent} from './order-control/quick-edit/quick-edit.component';


const routes: Routes = [

  {path: '', component: OrderAcceptanceComponent},
  {path: 'order-control', component: OrderControlComponent},

  {path: 'order-control/:id', component: QuickEditComponent},
  {path: 'order-view', component: OrderViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderAcceptanceComponent} from './order-acceptance/order-acceptance.component';
import {OrderControlComponent} from './order-control/order-control.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {QuickEditComponent} from './order-control/quick-edit/quick-edit.component';
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [

  {path: 'order-acceptance', component: OrderAcceptanceComponent, canActivate: [AuthGuard]},
  {path: 'order-control', component: OrderControlComponent, canActivate: [AuthGuard]},

  {path: 'order-control/:id', component: QuickEditComponent, canActivate: [AuthGuard]},
  {path: 'order-view', component: OrderViewComponent, canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

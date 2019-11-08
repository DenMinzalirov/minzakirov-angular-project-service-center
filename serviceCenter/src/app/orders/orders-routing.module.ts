import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderAcceptanceComponent} from './order-acceptance/order-acceptance.component';
import {AuthGuard} from '../auth/auth.guard';
import {OrderControlComponent} from './order-control/order-control.component';
import {QuickEditComponent} from './order-control/quick-edit/quick-edit.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {OrderCreatedComponent} from './order-created/order-created.component';
import {FormGuard} from './form/form.guard';

const routes: Routes = [
  {path: 'order-acceptance', component: OrderAcceptanceComponent, canActivate: [AuthGuard], canDeactivate: [FormGuard]},
  {path: 'order-control', component: OrderControlComponent, canActivate: [AuthGuard]},
  {path: 'order-view', component: OrderViewComponent, canActivate: [AuthGuard]},
  {path: 'order-created', component: OrderCreatedComponent, canActivate: [AuthGuard]},
  {path: ':id', component: QuickEditComponent, canDeactivate: [FormGuard], canActivate: [AuthGuard]},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}

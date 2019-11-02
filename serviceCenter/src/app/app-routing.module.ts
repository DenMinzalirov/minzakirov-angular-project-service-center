import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {OrderAcceptanceComponent} from './orders/order-acceptance/order-acceptance.component';
import {OrderControlComponent} from './orders/order-control/order-control.component';
import {OrderViewComponent} from './orders/order-view/order-view.component';
import {QuickEditComponent} from './orders/order-control/quick-edit/quick-edit.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderAcceptanceComponent} from './order-acceptance/order-acceptance.component';
import {OrderControlComponent} from './order-control/order-control.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {TemppComponent} from './order-view/tempp/tempp.component';
import {FormComponent} from './form/form.component';
import {QuickEditComponent} from './order-control/quick-edit/quick-edit.component';
import {RouterModule} from '@angular/router';
import {OrdersRoutingModule} from "./orders-routing.module";
import {AuthComponent} from '../auth/auth.component';
import {MatButtonModule, MatInputModule, MatTableModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderCreatedComponent } from './order-created/order-created.component';



@NgModule({
  declarations: [
    OrderAcceptanceComponent,
    OrderControlComponent,
    OrderViewComponent,
    TemppComponent,
    FormComponent,
    QuickEditComponent,
    OrderCreatedComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild([{path: '', component: OrderAcceptanceComponent}]),
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }

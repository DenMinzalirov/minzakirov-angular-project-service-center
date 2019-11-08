import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderAcceptanceComponent} from './order-acceptance/order-acceptance.component';
import {OrderControlComponent} from './order-control/order-control.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {FormComponent} from './form/form.component';
import {QuickEditComponent} from './order-control/quick-edit/quick-edit.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderCreatedComponent } from './order-created/order-created.component';
import {PartsModule} from '../parts/parts.module';

@NgModule({
  declarations: [
    OrderAcceptanceComponent,
    OrderControlComponent,
    OrderViewComponent,
    FormComponent,
    QuickEditComponent,
    OrderCreatedComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    PartsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule
  ]
})
export class OrdersModule { }

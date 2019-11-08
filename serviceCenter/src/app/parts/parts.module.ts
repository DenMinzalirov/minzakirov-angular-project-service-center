import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartsComponent } from './add-parts/add-parts.component';
import {PartsRoutingModule} from './parts-routing.module';
import { PartsNavigationComponent } from './parts-navigation/parts-navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { PartsCreatedComponent } from './parts-created/parts-created.component';
import { PartsListComponent } from './parts-list/parts-list.component';



@NgModule({
  declarations: [AddPartsComponent, PartsNavigationComponent, PartsCreatedComponent, PartsListComponent],
  exports: [
    PartsListComponent
  ],
  imports: [
    CommonModule,
    PartsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCardModule
  ]
})
export class PartsModule { }

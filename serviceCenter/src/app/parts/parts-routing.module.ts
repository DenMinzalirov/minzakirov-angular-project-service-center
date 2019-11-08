import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {AddPartsComponent} from './add-parts/add-parts.component';
import {PartsNavigationComponent} from './parts-navigation/parts-navigation.component';
import {PartsCreatedComponent} from './parts-created/parts-created.component';
import {PartsListComponent} from './parts-list/parts-list.component';

const routes: Routes = [
  {path: 'add-parts', component: AddPartsComponent, canActivate: [AuthGuard]},
  {path: 'parts-created', component: PartsCreatedComponent, canActivate: [AuthGuard]},
  {path: 'parts-list', component: PartsListComponent, canActivate: [AuthGuard]},
  {path: '', component: PartsNavigationComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }

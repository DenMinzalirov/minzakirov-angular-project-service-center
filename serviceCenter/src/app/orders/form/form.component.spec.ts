import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {CommonModule} from "@angular/common";
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrdersRoutingModule} from "../orders-routing.module";
import {PartsModule} from "../../parts/parts.module";
import {FirebaseService} from "../../shared/firebase.service";
import {Router} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('FormComponent', () => {

  let router: Partial<Router>;
  class MockRouter {
    user = {
      name: 'John'
    };
  }
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {AngularFireAuth} from "@angular/fire/auth";
import {FormBuilder} from "@angular/forms";

describe('NavigationComponent', () => {
  let afAuth: Partial<AngularFireAuth>;
  class MockAfAuth {
    user = {
      name: 'John'
    };
  }
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: AngularFireAuth, useClass: MockAfAuth },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    afAuth = TestBed.get(AngularFireAuth);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

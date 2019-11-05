import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartsComponent } from './add-parts.component';

describe('AddPartsComponent', () => {
  let component: AddPartsComponent;
  let fixture: ComponentFixture<AddPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderControlComponent } from './order-control.component';

describe('OrderControlComponent', () => {
  let component: OrderControlComponent;
  let fixture: ComponentFixture<OrderControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

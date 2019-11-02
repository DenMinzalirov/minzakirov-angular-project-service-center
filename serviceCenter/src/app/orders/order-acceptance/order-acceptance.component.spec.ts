import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAcceptanceComponent } from './order-acceptance.component';

describe('OrderAcceptanceComponent', () => {
  let component: OrderAcceptanceComponent;
  let fixture: ComponentFixture<OrderAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

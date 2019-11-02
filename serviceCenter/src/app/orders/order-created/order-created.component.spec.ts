import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreatedComponent } from './order-created.component';

describe('OrderCreatedComponent', () => {
  let component: OrderCreatedComponent;
  let fixture: ComponentFixture<OrderCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

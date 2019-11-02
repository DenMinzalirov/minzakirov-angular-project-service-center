import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemppComponent } from './tempp.component';

describe('TemppComponent', () => {
  let component: TemppComponent;
  let fixture: ComponentFixture<TemppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

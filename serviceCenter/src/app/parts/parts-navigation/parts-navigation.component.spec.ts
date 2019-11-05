import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsNavigationComponent } from './parts-navigation.component';

describe('PartsNavigationComponent', () => {
  let component: PartsNavigationComponent;
  let fixture: ComponentFixture<PartsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

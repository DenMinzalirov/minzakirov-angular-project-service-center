import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCreatedComponent } from './parts-created.component';

describe('PartsCreatedComponent', () => {
  let component: PartsCreatedComponent;
  let fixture: ComponentFixture<PartsCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimProDGComponent } from './sim-pro-dg.component';

describe('SimProDGComponent', () => {
  let component: SimProDGComponent;
  let fixture: ComponentFixture<SimProDGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimProDGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimProDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

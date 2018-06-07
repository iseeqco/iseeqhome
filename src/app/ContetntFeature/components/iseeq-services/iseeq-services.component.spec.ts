import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqServicesComponent } from './iseeq-services.component';

describe('IseeqServicesComponent', () => {
  let component: IseeqServicesComponent;
  let fixture: ComponentFixture<IseeqServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

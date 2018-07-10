import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqButtonComponent } from './iseeq-button.component';

describe('IseeqButtonComponent', () => {
  let component: IseeqButtonComponent;
  let fixture: ComponentFixture<IseeqButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

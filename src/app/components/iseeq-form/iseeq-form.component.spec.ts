import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqFormComponent } from './iseeq-form.component';

describe('IseeqFormComponent', () => {
  let component: IseeqFormComponent;
  let fixture: ComponentFixture<IseeqFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

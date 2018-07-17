import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqFlagComponent } from './iseeq-flag.component';

describe('IseeqFlagComponent', () => {
  let component: IseeqFlagComponent;
  let fixture: ComponentFixture<IseeqFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

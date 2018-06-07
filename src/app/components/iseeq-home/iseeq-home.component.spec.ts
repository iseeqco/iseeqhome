import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqHomeComponent } from './iseeq-home.component';

describe('IseeqHomeComponent', () => {
  let component: IseeqHomeComponent;
  let fixture: ComponentFixture<IseeqHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqAboutComponent } from './iseeq-about.component';

describe('IseeqAboutComponent', () => {
  let component: IseeqAboutComponent;
  let fixture: ComponentFixture<IseeqAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

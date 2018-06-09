import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqBaseContentComponent } from './iseeq-base-content.component';

describe('IseeqBaseContentComponent', () => {
  let component: IseeqBaseContentComponent;
  let fixture: ComponentFixture<IseeqBaseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqBaseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqBaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

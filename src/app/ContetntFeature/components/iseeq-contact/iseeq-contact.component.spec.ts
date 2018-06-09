import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqContactComponent } from './iseeq-contact.component';

describe('IseeqContactComponent', () => {
  let component: IseeqContactComponent;
  let fixture: ComponentFixture<IseeqContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

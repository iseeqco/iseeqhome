import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqFotoviewerComponent } from './iseeq-fotoviewer.component';

describe('IseeqFotoviewerComponent', () => {
  let component: IseeqFotoviewerComponent;
  let fixture: ComponentFixture<IseeqFotoviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqFotoviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqFotoviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

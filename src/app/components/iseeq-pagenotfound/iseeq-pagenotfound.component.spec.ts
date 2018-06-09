import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqPagenotfoundComponent } from './iseeq-pagenotfound.component';

describe('IseeqPagenotfoundComponent', () => {
  let component: IseeqPagenotfoundComponent;
  let fixture: ComponentFixture<IseeqPagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqPagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

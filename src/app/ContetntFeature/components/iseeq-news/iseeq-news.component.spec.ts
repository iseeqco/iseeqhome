import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqNewsComponent } from './iseeq-news.component';

describe('IseeqNewsComponent', () => {
  let component: IseeqNewsComponent;
  let fixture: ComponentFixture<IseeqNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

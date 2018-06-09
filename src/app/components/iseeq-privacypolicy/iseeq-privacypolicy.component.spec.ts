import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqPrivacypolicyComponent } from './iseeq-privacypolicy.component';

describe('IseeqPrivacypolicyComponent', () => {
  let component: IseeqPrivacypolicyComponent;
  let fixture: ComponentFixture<IseeqPrivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqPrivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqPrivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

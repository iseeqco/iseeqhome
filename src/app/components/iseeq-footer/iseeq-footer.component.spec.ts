import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqFooterComponent } from './iseeq-footer.component';

describe('IseeqFooterComponent', () => {
  let component: IseeqFooterComponent;
  let fixture: ComponentFixture<IseeqFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

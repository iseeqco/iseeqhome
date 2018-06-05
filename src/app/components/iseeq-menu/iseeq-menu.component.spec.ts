import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqMenuComponent } from './iseeq-menu.component';

describe('IseeqMenuComponent', () => {
  let component: IseeqMenuComponent;
  let fixture: ComponentFixture<IseeqMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqProjektorComponent } from './iseeq-projektor.component';

describe('IseeqProjektorComponent', () => {
  let component: IseeqProjektorComponent;
  let fixture: ComponentFixture<IseeqProjektorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqProjektorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqProjektorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

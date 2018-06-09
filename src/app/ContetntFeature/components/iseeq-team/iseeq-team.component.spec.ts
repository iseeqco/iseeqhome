import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqTeamComponent } from './iseeq-team.component';

describe('IseeqTeamComponent', () => {
  let component: IseeqTeamComponent;
  let fixture: ComponentFixture<IseeqTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqClientsComponent } from './iseeq-clients.component';

describe('IseeqClientsComponent', () => {
  let component: IseeqClientsComponent;
  let fixture: ComponentFixture<IseeqClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

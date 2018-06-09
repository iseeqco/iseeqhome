import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseeqSitemapComponent } from './iseeq-sitemap.component';

describe('IseeqSitemapComponent', () => {
  let component: IseeqSitemapComponent;
  let fixture: ComponentFixture<IseeqSitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseeqSitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseeqSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

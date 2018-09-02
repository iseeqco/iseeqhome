import { TestBed, inject } from '@angular/core/testing';

import { IseeqFormService } from './iseeq-form.service';

describe('IseeqFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IseeqFormService]
    });
  });

  it('should be created', inject([IseeqFormService], (service: IseeqFormService) => {
    expect(service).toBeTruthy();
  }));
});

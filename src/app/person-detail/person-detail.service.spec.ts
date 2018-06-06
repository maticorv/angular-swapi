import { TestBed, inject } from '@angular/core/testing';

import { PersonDetailService } from './person-detail.service';

describe('PersonDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonDetailService]
    });
  });

  it('should be created', inject([PersonDetailService], (service: PersonDetailService) => {
    expect(service).toBeTruthy();
  }));
});

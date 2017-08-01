import { TestBed, inject } from '@angular/core/testing';

import { SimPROServiceService } from './sim-proservice.service';

describe('SimPROServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimPROServiceService]
    });
  });

  it('should be created', inject([SimPROServiceService], (service: SimPROServiceService) => {
    expect(service).toBeTruthy();
  }));
});

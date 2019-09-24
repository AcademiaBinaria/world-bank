import { TestBed } from '@angular/core/testing';

import { CountryCounterStoreService } from './country-counter-store.service';

describe('CountryCounterStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryCounterStoreService = TestBed.get(CountryCounterStoreService);
    expect(service).toBeTruthy();
  });
});

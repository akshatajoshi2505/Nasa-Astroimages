import { TestBed } from '@angular/core/testing';

import { AstronomicalSearchService } from './astronomical-search.service';

describe('AstronomicalSearchService', () => {
  let service: AstronomicalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstronomicalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

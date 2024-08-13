import { TestBed } from '@angular/core/testing';

import { NasaImageOfTheDayService } from './nasaImageOfTheDay.service';

describe('nasaImageOfTheDay', () => {
  let service: NasaImageOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaImageOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

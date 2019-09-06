import { TestBed } from '@angular/core/testing';

import { CarPlateService } from './car-plate.service';

describe('CarPlateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarPlateService = TestBed.get(CarPlateService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CarsProjectService } from './cars-project.service';

describe('CarsProjectService', () => {
  let service: CarsProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

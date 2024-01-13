import { TestBed } from '@angular/core/testing';

import { FiresotreService } from './firesotre.service';

describe('FiresotreService', () => {
  let service: FiresotreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiresotreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

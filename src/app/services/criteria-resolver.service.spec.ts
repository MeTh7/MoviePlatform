import { TestBed } from '@angular/core/testing';

import { CriteriaResolverService } from './criteria-resolver.service';

describe('CriteriaResolverService', () => {
  let service: CriteriaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteriaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

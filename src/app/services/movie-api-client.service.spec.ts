import { TestBed } from '@angular/core/testing';

import { MovieApiClientService } from './movie-api-client.service';

describe('MovieApiClientService', () => {
  let service: MovieApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

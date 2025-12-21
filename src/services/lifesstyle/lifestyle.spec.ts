import { TestBed } from '@angular/core/testing';

import { Lifestyle } from './lifestyle';

describe('Lifestyle', () => {
  let service: Lifestyle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lifestyle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

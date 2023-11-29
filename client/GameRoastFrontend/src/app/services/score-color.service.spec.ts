import { TestBed } from '@angular/core/testing';

import { ScoreColorService } from './score-color.service';

describe('ScoreColorService', () => {
  let service: ScoreColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

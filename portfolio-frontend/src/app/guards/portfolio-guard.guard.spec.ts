import { TestBed } from '@angular/core/testing';

import { PortfolioGuardGuard } from './portfolio-guard.guard';

describe('PortfolioGuardGuard', () => {
  let guard: PortfolioGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PortfolioGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

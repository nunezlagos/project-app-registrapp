import { TestBed } from '@angular/core/testing';

import { GuardEstudianteGuard } from './guard-estudiante.guard';

describe('GuardEstudianteGuard', () => {
  let guard: GuardEstudianteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardEstudianteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

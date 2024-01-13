import { TestBed } from '@angular/core/testing';

import { InteraccionusuarioService } from './interaccionusuario.service';

describe('InteraccionusuarioService', () => {
  let service: InteraccionusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteraccionusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

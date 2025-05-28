import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './usuario.service';

describe('UsuarioService', () => {
  let service: PersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

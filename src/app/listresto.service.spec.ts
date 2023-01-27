import { TestBed } from '@angular/core/testing';

import { ListrestoService } from './listresto.service';

describe('ListrestoService', () => {
  let service: ListrestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListrestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

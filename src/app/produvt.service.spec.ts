import { TestBed } from '@angular/core/testing';

import { ProduvtService } from './product.service';

describe('ProduvtService', () => {
  let service: ProduvtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduvtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

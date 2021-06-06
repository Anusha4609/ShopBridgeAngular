import { TestBed } from '@angular/core/testing';

import { ShopBridgeServiceService } from './shop-bridge-service.service';

describe('ShopBridgeServiceService', () => {
  let service: ShopBridgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopBridgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

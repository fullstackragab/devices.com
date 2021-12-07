import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DeviceResolver } from './device.resolver';

describe('DeviceResolver', () => {
  let resolver: DeviceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    resolver = TestBed.inject(DeviceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

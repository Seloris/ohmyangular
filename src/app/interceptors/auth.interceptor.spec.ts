import { TestBed, inject } from '@angular/core/testing';

import { AutInterceptor } from './auth.interceptor';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutInterceptor]
    });
  });

  it('should ...', inject([AutInterceptor], (service: AutInterceptor) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { GetActiveUsers } from './get-active-users';

describe('GetActiveUsers', () => {
  let service: GetActiveUsers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActiveUsers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

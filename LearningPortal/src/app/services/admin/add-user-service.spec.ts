import { TestBed } from '@angular/core/testing';

import { AddUSerService } from './add-user-service';

describe('AddUSerService', () => {
  let service: AddUSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DeleteUSerService } from './delete-user-service';

describe('DeleteUSerService', () => {
  let service: DeleteUSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteUSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

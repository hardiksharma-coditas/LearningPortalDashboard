import { TestBed } from '@angular/core/testing';

import { EditUSerService } from './edit-user-service';

describe('EditUSerService', () => {
  let service: EditUSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditUSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

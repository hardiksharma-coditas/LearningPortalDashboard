import { TestBed } from '@angular/core/testing';

import { EditCourseForm } from './edit-course-form';

describe('EditCourseForm', () => {
  let service: EditCourseForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCourseForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

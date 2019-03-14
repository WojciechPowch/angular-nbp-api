import { TestBed } from '@angular/core/testing';

import { SingleCourseService } from './single-course.service';

describe('SingleCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleCourseService = TestBed.get(SingleCourseService);
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { CoursesService } from '../courses.service';
import { SingleCourseService } from '../course-chart/single-course.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private coursesService: CoursesService) { }

  public getAvailableRates(): Observable<any> {
    return this.coursesService.getCoursesObservable();
  }
}

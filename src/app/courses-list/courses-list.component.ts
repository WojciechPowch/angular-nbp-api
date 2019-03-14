import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course';
import { DialogHelperService } from './../dialog-helper.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesService]
})
export class CoursesListComponent implements OnInit {

  public coursesList: Array<Course> = new Array<any>();
  public rateDate: string;

  constructor(private service: CoursesService,
              private dialogHelper: DialogHelperService) { }

  ngOnInit() {
    this.prepareCoursesList();
  }

  public openConverter(): void {
    this.dialogHelper.openConverter();
  }

  private prepareCoursesList(): void {
    this.service.getCoursesObservable().subscribe(
      result => {
        this.successHandler(result);
      },
      error => {
        this.dialogHelper.openWarningMessage(error.message);
      }
    );
  }

  private successHandler(result: any): void {
    this.setCoursesList(result);
    this.setRateDate(result);
  }

  private setCoursesList(result: any): void {
    const localResult: any = result[0];
    this.coursesList = <Array<Course>>localResult.rates;
  }

  private setRateDate(result: any): void {
    this.rateDate = result[0].effectiveDate;
  }

}

import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepicker, MatDialog } from '@angular/material';
import { Course } from '../course';
import { SingleCourseService } from './single-course.service';
import * as moment from 'moment';
import { WarningMessageComponent } from './../../warning-message/warning-message.component';

@Component({
  selector: 'app-course-chart',
  templateUrl: './course-chart.component.html',
  styleUrls: ['./course-chart.component.css']
})
export class CourseChartComponent implements OnInit {

  @ViewChild('dpFrom') dpFrom: any;
  @ViewChild('dpTo') dpTo: any;

  public chartType = 'line';

  public chartDatasets: Array<any> = [];

  public chartLabels: Array<any>;

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(63,	81,	181, 0.4)',
      borderColor: '#3f51b5',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public dataOd: any;
  public dataDo: any;

  private nbpDateFormat = 'YYYY-MM-DD';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Course,
              private dialogRef: MatDialogRef<CourseChartComponent>,
              private service: SingleCourseService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.initDateData();
    this.initChart();
  }

  private initDateData(): void {
    let now = moment();
    this.dataDo = now.format();
    this.dataOd = now.subtract(30, 'days').format();
  }

  private initChart(): void {
    let startDate = this.getParsedData(this.dataOd);
    let endDate = this.getParsedData(this.dataDo);
    this.service.getSingleCourseHistory(this.data.code, startDate, endDate).subscribe(
      (result) => {
        this.prepareRates(result);
      },
      (error) => {
        this.handleError(error.error);
      }
    );
  }

  private prepareRates(result: any): void {
    let rateData: Array<number> = new Array<number>();
    let rateLabels: Array<string> = new Array<string>();
    result.rates.forEach((element, index) => {
      rateData.push(element.mid);
      rateLabels.push(element.effectiveDate);
    });
    this.chartDatasets = [];
    this.chartDatasets.push({data: rateData, label: 'Kurs dnia'});
    this.chartLabels = rateLabels;
  }

  public valueChanged(): void {
    let dateTo = this.getParsedData(this.dataDo);
    let dateFrom = this.getParsedData(this.dataOd);
    this.initChart();
  }

  private getParsedData(date: any): string {
    if (date instanceof Date) {
      let parsedDate = moment(date.toUTCString());
      return parsedDate.format(this.nbpDateFormat);
    } else {
      let parsedDate = moment(date);
      return parsedDate.format(this.nbpDateFormat);
    }
  }

  private handleError(message: string): void {
    this.openErrorDialog(message);
    this.ngOnInit();
  }

  private openErrorDialog(message: string): void {
    this.dialog.open(WarningMessageComponent, {
      data: {
        message: message
      }
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}

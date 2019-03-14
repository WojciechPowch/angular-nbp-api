import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CourseChartComponent } from './courses-list/course-chart/course-chart.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { ConverterComponent } from './courses-list/converter/converter.component';

@Injectable({
  providedIn: 'root'
})
export class DialogHelperService {

  constructor(private dialog: MatDialog) { }

  public openRateChart(data: any, callback: Function = null): void {
    const dialogRef: MatDialogRef<CourseChartComponent> = this.getDialogRef(data);

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (callback !== null) {
          callback(result);
        }
      }
    );
  }

  public openWarningMessage(message: string): void {
    this.dialog.open(WarningMessageComponent, {
      data: {
        message: message
      }
    });
  }

  public openConverter(): void {
    this.dialog.open(ConverterComponent, {
      width: '40vw'
    });
  }

  private getDialogRef(data: any): MatDialogRef<CourseChartComponent> {
    return this.dialog.open(CourseChartComponent, {
      width: '80vw',
      data: data
    });
  }

}

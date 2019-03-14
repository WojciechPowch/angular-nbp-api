import { Component, OnInit, Input } from '@angular/core';
import { Course } from './../course';
import { DialogHelperService } from 'src/app/dialog-helper.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input('data') data: Course;

  constructor(private dialogHelper: DialogHelperService) { }

  ngOnInit() {
  }

  public onRateClick() {
    this.dialogHelper.openRateChart(this.data);
  }

}

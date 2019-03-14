import { Component, OnInit, ViewChild } from '@angular/core';
import { ConverterService } from './converter.service';
import { Course } from '../course';
import { DialogHelperService } from 'src/app/dialog-helper.service';
import { MatDialogRef, MatSelect } from '@angular/material';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @ViewChild('select') select: MatSelect;

  public ratesSelect: Array<Course> = new Array<Course>();
  public selected: any;

  public foraign: number;
  public pln: number;

  constructor(private service: ConverterService,
              private dialogRef: MatDialogRef<ConverterComponent>) { }

  ngOnInit() {
    this.selectChangeListener();
    this.initAvailableRates();
  }

  private selectChangeListener(): void {
    this.select.selectionChange.subscribe(
      () => {
        this.resetValues();
      }
    );
  }

  private resetValues(): void {
    this.pln = 0;
    this.foraign = 0;
  }

  private initAvailableRates(): void {
    this.service.getAvailableRates().subscribe(
      (result) => {
        this.successHandler(result);
      },
      (error) => {
      }
    );
  }

  private successHandler(result: any): void {
    this.setRateSelect(result);
  }

  private setRateSelect(result: any): void {
    this.ratesSelect = <Array<Course>> result[0].rates;
  }

  public getRateAsJSON(rate): string {
    return JSON.stringify(rate);
  }

  public getCode(): string {
    let rate: Course =  this.getParsedRate();
    return rate.code;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public foraignChange(): void {
    let rate: Course = this.getParsedRate();
    this.pln = this.foraign * rate.mid;
  }

  public plnChange(): void {
    let rate: Course = this.getParsedRate();
    this.foraign = this.pln / rate.mid;
  }

  private getParsedRate(): Course {
    return <Course> JSON.parse(this.selected);
  }

}

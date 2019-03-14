import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule, MatDialogModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RateComponent } from './courses-list/rate/rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { CourseChartComponent } from './courses-list/course-chart/course-chart.component';
import { FormsModule } from '@angular/forms';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { ConverterComponent } from './courses-list/converter/converter.component';

const appRoutes: Routes = [
  { path: '', component: CoursesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    RateComponent,
    CourseChartComponent,
    WarningMessageComponent,
    ConverterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    ChartsModule,
    WavesModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule
  ],
  entryComponents: [
    CourseChartComponent,
    WarningMessageComponent,
    ConverterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

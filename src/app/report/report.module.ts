import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { WeeklyReportComponent } from './components/weekly-report/weekly-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './../material/material.module';
import { ReportFormModalComponent } from './components/report-form-modal/report-form-modal.component';
import { WeeklyReportFormComponent } from './components/weekly-report-form/weekly-report-form.component';
import { WeeklyReportInfoComponent } from './components/weekly-report-info/weekly-report-info.component';
@NgModule({
  declarations: [
    NavComponent,
    ReportFormComponent,
    WeeklyReportComponent,
    ReportFormModalComponent,
    WeeklyReportFormComponent,
    WeeklyReportInfoComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ReportModule { }

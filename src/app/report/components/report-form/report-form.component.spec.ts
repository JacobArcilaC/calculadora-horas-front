import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormComponent } from './report-form.component';
import { FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ReportService} from '../../../core/services/report.service';

import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-report-form-modal',
  template: '<div></div>',
})
export class ReportFormModalComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ReportFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}

describe('ReportFormComponent', () => {
  let component: ReportFormComponent;
  let fixture: ComponentFixture<ReportFormComponent>;

  beforeEach(async () => {
    const expectCreateResponse = {
      code: 201,
      data: {
          idTecnico: "1152224910",
          idServicio: "1",
          fechaInicio: "2021-06-03T05:30",
          fechaFin: "2021-06-03T07:30",
          valid: true
      },
      errors: null
    }
    let mockReportService;
    mockReportService = jasmine.createSpyObj(['createReport']);
    mockReportService.createReport.and.returnValue(expectCreateResponse);
    await TestBed.configureTestingModule({
      declarations: [ ReportFormComponent,  ReportFormModalComponent],
      providers: [ {provide: ReportService, useValue: mockReportService}, FormBuilder,  MatDialog ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

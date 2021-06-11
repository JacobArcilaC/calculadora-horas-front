import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {ReportService} from './../../../core/services/report.service';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';
import { ReportFormModalComponent } from '../report-form-modal/report-form-modal.component';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent {
  
  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private router: Router,
    private modal: MatDialog
  ) {}


  reportForm = this.formBuilder.group({
    idTecnico: [null, Validators.required],
    idServicio: [null, Validators.required],
    fechaInicio: [null, Validators.required],
    fechaFin: [null, Validators.required],
  });

  saveReport(event: Event) {
    event.preventDefault();
    if (this.reportForm.valid) {
      const report = this.reportForm.value;
      this.reportService.createReport(report).subscribe((response) => {
        console.log(response);
        if(response.code == 201){
          this.reportForm.reset();
          this.openModal([]);
        }else{
          this.openModal(response.errors)
        }
      });
    }
  }

  openModal(messages: string[]): void {
    console.log(messages);
    const dialogRef = this.modal.open(ReportFormModalComponent, {
      height: '250px',
      width: '250px',
      data: {messages: messages}
    });
  }

}

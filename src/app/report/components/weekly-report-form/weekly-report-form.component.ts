import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ReportService} from './../../../core/services/report.service';

@Component({
  selector: 'app-weekly-report-form',
  templateUrl: './weekly-report-form.component.html',
  styleUrls: ['./weekly-report-form.component.scss']
})
export class WeeklyReportFormComponent {

  constructor(private formBuilder: FormBuilder, private reportService: ReportService) { }

  isButtonOn: boolean = false;
  @Output() buttonClicked = new EventEmitter();
  @Output() sendResponse = new EventEmitter();


  informForm = this.formBuilder.group({
    idTecnico: [null, Validators.required],
    semana: [null, Validators.required],
  }); 

  generateReport(){
    if(this.informForm.valid){
      const inform = this.informForm.value;
      this.reportService.generateInform(inform).subscribe(response => {
        if(response.code == 201){
          console.log(response);
          this.buttonClicked.emit(!this.isButtonOn);
          this.sendResponse.emit(response.data);
        }
      });
    }
  }

}

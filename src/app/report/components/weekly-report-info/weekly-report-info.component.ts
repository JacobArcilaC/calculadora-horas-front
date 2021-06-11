import { Component, Input, OnInit } from '@angular/core';
import { Inform } from 'src/app/core/models/inform.model';

@Component({
  selector: 'app-weekly-report-info',
  templateUrl: './weekly-report-info.component.html',
  styleUrls: ['./weekly-report-info.component.scss']
})
export class WeeklyReportInfoComponent implements OnInit {

  @Input() informe: Inform;
  
  constructor() { }

  ngOnInit(): void {
  }

}

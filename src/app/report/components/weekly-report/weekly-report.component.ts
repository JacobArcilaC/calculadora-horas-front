import { Component} from '@angular/core';
import { Inform } from 'src/app/core/models/inform.model';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.scss']
})
export class WeeklyReportComponent {

  showInform: boolean;
  inform: Inform;

  constructor() { }

  setShowInform($event: any){
    console.log($event);
    this.showInform = $event;
  }

  setInformData($event: any){
    console.log($event);
    this.inform = $event;
  }
  

}

import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-report-form-modal',
  templateUrl: './report-form-modal.component.html',
})
export class ReportFormModalComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ReportFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    } 

}

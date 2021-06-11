import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { ReportFormModalComponent } from './report-form-modal.component';

describe('ReportFormModalComponent', () => {
  let component: ReportFormModalComponent;
  let fixture: ComponentFixture<ReportFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormModalComponent],
      providers: [MatDialogRef]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

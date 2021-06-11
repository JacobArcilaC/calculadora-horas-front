import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormModalComponent } from './report-form-modal.component';

describe('ReportFormModalComponent', () => {
  let component: ReportFormModalComponent;
  let fixture: ComponentFixture<ReportFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

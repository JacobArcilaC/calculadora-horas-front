import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReportFormComponent } from './weekly-report-form.component';

describe('WeeklyReportFormComponent', () => {
  let component: WeeklyReportFormComponent;
  let fixture: ComponentFixture<WeeklyReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

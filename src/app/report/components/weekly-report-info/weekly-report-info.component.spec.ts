import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReportInfoComponent } from './weekly-report-info.component';

describe('WeeklyReportInfoComponent', () => {
  let component: WeeklyReportInfoComponent;
  let fixture: ComponentFixture<WeeklyReportInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyReportInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

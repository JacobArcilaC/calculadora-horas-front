import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ReportService } from 'src/app/core/services/report.service';

import { WeeklyReportFormComponent } from './weekly-report-form.component';

describe('WeeklyReportFormComponent', () => {
  let component: WeeklyReportFormComponent;
  let fixture: ComponentFixture<WeeklyReportFormComponent>;

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
      declarations: [ WeeklyReportFormComponent ],
      providers: [ FormBuilder, {provide: ReportService, useValue: mockReportService} ],
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

  it('user should update from form changes', () => {
    const inform = {
      idTecnico: '1152224910',
      semana: '24'
    };
    component.informForm.controls['idTecnico'].setValue(inform.idTecnico);
    component.informForm.controls['semana'].setValue(inform.semana);
    expect(component.informForm.value).toEqual(inform);
  });
});

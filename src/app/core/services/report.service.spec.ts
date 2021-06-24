import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Report } from '../models/report.model';
import { Inform } from '../models/inform.model';
import { InformRequest } from '../models/informRequest.model';
import { HttpClient } from '@angular/common/http';

describe('ReportService', () => {
  let httpClient: HttpClient;
  let service: ReportService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ReportService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create a report with the correct url and the given method', () => {
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

    const createRequest: Report = {
      idTecnico: "1152224910",
      idServicio: "1",
      fechaInicio: "2021-06-03T05:30",
      fechaFin: "2021-06-03T07:30"
    }

    service.createReport(createRequest).subscribe((response) => {
      expect(response).toEqual(expectCreateResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/reporte');
    expect(req.request.method).toEqual('POST');
    req.flush(expectCreateResponse);
  });

  it('should generate a inform for the week with the correct url and the given method', () => {
    const expectedGenerateResponse: Inform = {
      idTecnico: "1152224910",
      semana: 24,
      horasNormales: 0,
      horasNocturnas: 0,
      horasDominicales: 0,
      horasNormalesExtra: 0,
      horasNocturnasExtra: 0,
      horasDominicalesExtra: 0,
    }

    const generateRequest: InformRequest = {
      idTecnico: "1152224910",
      semana: "24",
    }

    service.generateInform(generateRequest).subscribe((response) => {
      expect(response).toEqual(expectedGenerateResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/reporte/informe');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedGenerateResponse);

  });

});

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Report } from './../models/report.model';
import { InformRequest } from '../models/informRequest.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  createReport(report: Report) {
    return this.http.post<any>(`${environment.url_api}`, report);
  }

  generateInform(informRequest: InformRequest){
    return this.http.post<any>(`${environment.url_api}/informe`, informRequest);
  }

}

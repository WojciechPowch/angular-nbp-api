import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleCourseService {

  constructor(private http: HttpClient) { }

  public getSingleCourseHistory(code: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`http://api.nbp.pl/api/exchangerates/rates/A/${code}/${startDate}/${endDate}?format=json`, {});
  }

}

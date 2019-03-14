import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {}

  public getCoursesObservable(): Observable<any> {
    return this.http.get('http://api.nbp.pl/api/exchangerates/tables/A?format=json', {});
  }

}

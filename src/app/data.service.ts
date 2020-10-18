import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { mytype } from './mytype';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  Url = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  //Url = './d1.json'
  posturl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  getConfig(): Observable<mytype> {
    return this.http.get<mytype>(this.Url);
  }
  postConfig(data): Observable<any> {
    return this.http.post<any>(this.posturl, data);
  }
}

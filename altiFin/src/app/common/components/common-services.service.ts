import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(public http: HttpClient) { }

  getAPI(url: any): Observable<any> {
    return this.http.get<any>(url).pipe(map((response: any) => response))
  }

  postAPI(url: any, payload: any): Observable<any> {
    return this.http.post<any>(url, payload).pipe(map((response: any) => response))
  }

  putAPI(url: any, payload: any): Observable<any> {
    return this.http.put<any>(url, payload).pipe(map((response: any) => response))
  }

  deleteAPI(url: any): Observable<any> {
    return this.http.delete<any>(url).pipe(map((response: any) => response))
  }
}

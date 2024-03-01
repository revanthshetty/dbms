import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  create_user(data: any): Observable<any> {

    console.log('in service', data)

    const url = 'http://localhost/api/insert.php';
    return this.httpClient.post<any>(url, data).pipe(map((data) => data));
  }

  
}      
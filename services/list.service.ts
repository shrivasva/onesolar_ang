import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class ListService {
  getLatLongDetalis(ele:any) {
    return this.http.post<any>('http://localhost:3000/api/getLatLongDetails',{"lead":ele})
}

    constructor( private http: HttpClient) { }
    getLeadList (): Observable<any> {
        return this.http.get<any>('http://localhost:3000/api/getLeadList')
      }
}
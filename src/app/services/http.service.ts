import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * GET method
   *
   * @param {string} url
   * @return {*}  {Observable<Object>}
   * @memberof HttpService
   */
  public get(url: string): Observable<Object> {
    return this.http.get(url);
  }
}

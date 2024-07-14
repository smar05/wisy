import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpService) {}

  /**
   * GET method
   *
   * @param {string} url
   * @return {*}  {Promise<any>}
   * @memberof HttpService
   */
  public get(url: string): Promise<any> {
    return this.http.get(url);
  }
}

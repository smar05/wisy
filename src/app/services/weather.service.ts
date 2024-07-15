import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrls: any = {
    TOP: 'https://api.weather.gov/gridpoints/TOP/31,80/forecast',
    LWX: 'https://api.weather.gov/gridpoints/LWX/31,80/forecast',
  };

  constructor(private http: HttpService) {}

  /**
   * Get and parse the JSON data
   *
   * @param {string} option
   * @return {*}  {Observable<any>}
   * @memberof WeatherService
   */
  public getWeatherForecast(option: string): Observable<any> {
    const url: string = this.apiUrls[option];
    return this.http.get(url).pipe(
      map((response: any) =>
        response.properties.periods.map((period: any) => ({
          time: period.startTime,
          temperature: period.temperature,
        }))
      )
    );
  }
}

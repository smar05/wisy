import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumRoutes } from 'src/app/enums/enums-routes';
import { EnumWeatherOptions } from 'src/app/enums/enums-weather-options';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public weatherOption: string = null as any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.getUrlParam();
  }

  /**
   * Get the param from URL
   *
   * @private
   * @memberof WeatherComponent
   */
  private getUrlParam(): void {
    this.route.paramMap.subscribe((params) => {
      this.weatherOption = params.get('weatherOption') as string;
      if (this.weatherOption !== null) {
        // Validate that url param belowns to a weather option
        let weatherOptions: string[] = Object.keys(EnumWeatherOptions);

        if (!weatherOptions.includes(this.weatherOption))
          this.router.navigate([`/${EnumRoutes.HOME}`]);
      } else {
        this.router.navigate([`/${EnumRoutes.HOME}`]);
      }
    });
  }
}

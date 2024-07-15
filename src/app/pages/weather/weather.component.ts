import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { EnumRoutes } from 'src/app/enums/enums-routes';
import { EnumWeatherOptions } from 'src/app/enums/enums-weather-options';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public weatherOption: string = null as any;
  public chart!: Chart;
  public title: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) {
    Chart.register(...registerables);
  }

  public ngOnInit(): void {
    this.getUrlParam();
    this.queryWeatherData();
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

        switch (this.weatherOption) {
          case EnumWeatherOptions.LWX:
            this.title = 'District of Columbia Forecast';
            break;

          case EnumWeatherOptions.TOP:
            this.title = 'Kansas Forecast';
            break;
        }
      } else {
        this.router.navigate([`/${EnumRoutes.HOME}`]);
      }
    });
  }

  private queryWeatherData(): void {
    this.weatherService
      .getWeatherForecast(this.weatherOption.toUpperCase())
      .subscribe((res) => {
        this.createChart(res);
      });
  }

  private createChart(data: any): void {
    const temperatures: number[] = data.map((d: any) => d.temperature);
    const times: string[] = data.map((d: any) => d.name);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: times,
        datasets: [
          {
            label: 'Temperature',
            data: temperatures,
            borderColor: 'black',
            backgroundColor: '#18bc9c',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
}

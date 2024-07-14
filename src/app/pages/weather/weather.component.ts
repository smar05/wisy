import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumRoutes } from 'src/app/enums/enums-routes';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public weatherOption: string = null as any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.weatherOption = params.get('weatherOption') as string;
      if (this.weatherOption !== null) {
        this.weatherOption = this.weatherOption.toString();
      } else {
        this.router.navigate([`/${EnumRoutes.HOME}`]);
      }
    });
  }
}

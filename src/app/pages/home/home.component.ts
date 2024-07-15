import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnumRoutes } from 'src/app/enums/enums-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public f: UntypedFormGroup = this.form.group({
    weather: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  get weather() {
    return this.f.controls['weather'];
  }

  constructor(private form: UntypedFormBuilder, private router: Router) {}

  public searchWeather(): void {
    this.router.navigate([`/${EnumRoutes.WEATHER}/${this.weather.value}`]);
  }
}

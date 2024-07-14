import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { EnumRoutes } from '../enums/enums-routes';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: EnumRoutes.HOME,
    component: HomeComponent,
  },
  {
    path: `${EnumRoutes.WEATHER}/:weatherOption`,
    component: WeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

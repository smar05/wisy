import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRoutes } from './enums/enums-routes';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${EnumRoutes.HOME}`,
    pathMatch: 'full',
  },
  {
    path: `${EnumRoutes.HOME}`,
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
export class AppRoutingModule {}

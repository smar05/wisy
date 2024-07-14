import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { EnumRoutes } from '../enums/enums-routes';

const routes: Routes = [
  {
    path: EnumRoutes.HOME,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

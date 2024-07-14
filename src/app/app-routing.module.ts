import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRoutes } from './enums/enums-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${EnumRoutes.HOME}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

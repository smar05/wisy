import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [PagesRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
})
export class PagesModule {}

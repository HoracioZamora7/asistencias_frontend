import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HistogramaComponent } from './components/histograma/histograma.component';
import { Chart } from 'chart.js';


@NgModule({
  declarations: [
    DashboardPageComponent,
    HistogramaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaDelDiaComponent } from './components/asistencia-del-dia/asistencia-del-dia.component';
import { AsistenciaPageComponent } from './pages/asistencia-page/asistencia-page.component';


@NgModule({
  declarations: [
    AsistenciaDelDiaComponent,
    AsistenciaPageComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ]
})
export class AsistenciaModule { }

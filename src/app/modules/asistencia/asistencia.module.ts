import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaDelDiaComponent } from './components/asistencia-del-dia/asistencia-del-dia.component';
import { AsistenciaPageComponent } from './pages/asistencia-page/asistencia-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AsistenciaDelDiaComponent,
    AsistenciaPageComponent,
    HistorialPageComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AsistenciaModule { }

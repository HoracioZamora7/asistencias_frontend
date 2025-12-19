import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificacionesRoutingModule } from './justificaciones-routing.module';
import { CrearJustificacionPageComponent } from './pages/crear-justificacion-page/crear-justificacion-page.component';
import { AdminJustificacionesComponent } from './pages/admin-justificaciones/admin-justificaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearJustificacionPageComponent,
    AdminJustificacionesComponent
  ],
  imports: [
    CommonModule,
    JustificacionesRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class JustificacionesModule { }

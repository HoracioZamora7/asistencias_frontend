import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJustificacionPageComponent } from './pages/crear-justificacion-page/crear-justificacion-page.component';
import { AdminJustificacionesComponent } from './pages/admin-justificaciones/admin-justificaciones.component';
import { roleGuard } from '@core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: CrearJustificacionPageComponent,
  },
  {
    path: 'admin',
    component: AdminJustificacionesComponent,
    canActivate: [roleGuard],
    data: { roles: ['ROLE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JustificacionesRoutingModule { }

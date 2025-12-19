import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';

const routes: Routes = [
  {
    path: 'asistencias',
    loadChildren: () => import('../asistencia/asistencia.module').then(m => m.AsistenciaModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
    canMatch: [roleGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'justificaciones',
    loadChildren: () => import('../justificaciones/justificaciones.module').then(m => m.JustificacionesModule)
  },
  {
    path: '',
    redirectTo: 'asistencias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

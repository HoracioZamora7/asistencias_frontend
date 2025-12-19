import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaPageComponent } from './pages/asistencia-page/asistencia-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaPageComponent
  },
  {
    path: 'historial',
    component: HistorialPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }

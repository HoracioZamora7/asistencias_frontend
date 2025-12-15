import { Component } from '@angular/core';
import { AsistenciaService } from '@modules/asistencia/services/asistencia.service';

@Component({
  selector: 'app-asistencia-page',
  templateUrl: './asistencia-page.component.html',
  styleUrls: ['./asistencia-page.component.css']
})
export class AsistenciaPageComponent {

  constructor(private asistenciaService: AsistenciaService) { }

  getAsistenciasDelDia(){
    this.asistenciaService.getAsistenciasDelDia();
  }
}

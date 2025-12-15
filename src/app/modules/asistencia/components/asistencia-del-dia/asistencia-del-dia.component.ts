import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '@modules/asistencia/services/asistencia.service';

@Component({
  selector: 'app-asistencia-del-dia',
  templateUrl: './asistencia-del-dia.component.html',
  styleUrls: ['./asistencia-del-dia.component.css']
})
export class AsistenciaDelDiaComponent implements OnInit {

  constructor(private asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.asistenciaService.getAsistenciasDelDia();
  }
}

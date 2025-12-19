import { Component, OnInit } from '@angular/core';
import { JustificacionModel } from '@core/models/justificacion.model';
import { JustificacionesService } from '@modules/justificaciones/services/justificaciones.service';

@Component({
  selector: 'app-admin-justificaciones',
  templateUrl: './admin-justificaciones.component.html',
  styleUrls: ['./admin-justificaciones.component.css']
})
export class AdminJustificacionesComponent implements OnInit {

  listaJustificaciones: Array<JustificacionModel> = [];

  page: number = 0;
  size: number = 10;
  primeraPag: boolean = true;
  ultimaPag: boolean = false
  totalPages: number = 0;
  totalElements: number = 0;  
 
  id_estado: number = 1; // 1: Pendiente, 2: aprobado, 3: Rechazado
  
  constructor(private justificacionesService: JustificacionesService) { }

  ngOnInit(): void {
    this.cargarJustificaciones();
  }

  cargarJustificaciones(): void {
    this.justificacionesService.getListaJustificaciones(this.page, this.size, this.id_estado)
    .subscribe(res => {
      this.listaJustificaciones = res.content;
      this.page = res.number;
      this.totalPages = res.totalPages;
      this.totalElements = res.totalElements;
      this.primeraPag = res.first;
      this.ultimaPag = res.last;
    });
  }

  aprobarJustificacion(idJustificacion: number): void {
    // Lógica para aprobar la justificación
    if (!confirm(`¿Estás seguro de aprobar la justificación con ID: ${idJustificacion}?`)){
      return;
    }
    console.log(`Aprobar justificación con ID: ${idJustificacion}`);
    this.listaJustificaciones = this.listaJustificaciones.filter(j => j.id !== idJustificacion);
    this.justificacionesService.aprobarJustificacion(idJustificacion);
  }

  rechazarJustificacion(idJustificacion: number): void {
    // Lógica para rechazar la justificación
    if (!confirm(`¿Estás seguro de rechazar la justificación con ID: ${idJustificacion}?`)){
      return;
    }
    console.log(`Rechazar justificación con ID: ${idJustificacion}`);
    this.listaJustificaciones = this.listaJustificaciones.filter(j => j.id !== idJustificacion);
    this.justificacionesService.rechazarJustificacion(idJustificacion);
  }
}

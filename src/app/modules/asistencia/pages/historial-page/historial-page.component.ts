import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsistenciaModel } from '@core/models/asistencia.model';
import { AsistenciaService } from '@modules/asistencia/services/asistencia.service';
import { RelojService } from '@shared/services/reloj.service';

@Component({
  selector: 'app-historial-page',
  templateUrl: './historial-page.component.html',
  styleUrls: ['./historial-page.component.css']
})
export class HistorialPageComponent implements OnInit {

  formHistorial: FormGroup = new FormGroup({});
  errorSession: boolean = false;
  errorMsg: string = '';

  
  /* variables paginacion */
  page: number = 0;
  size: number = 2;
  /* fechaInicio: string = '2025-01-01'
  fechaFin: string = '2025-12-31' */
  primeraPag: boolean = true;
  ultimaPag: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  maxfecha: string = '';

  historialAsistencias: Array<AsistenciaModel> = [];

  constructor(private asistenciaService: AsistenciaService, private relojService: RelojService) { };

  ngOnInit(): void {
    const hoy = this.relojService.hoyISO();
    const hace7dias = this.relojService.haceDiasISO(7);
    this.maxfecha = hoy;

    this.formHistorial = new FormGroup(
      {
        fechaInicio: new FormControl(hace7dias ,Validators.required),
        fechaFin: new FormControl(hoy, Validators.required)
      }
    );

    this.cargarHistorialAsistencias();
  }

  cargarHistorialAsistencias(): void {

    if (!this.rangoFechasValidator(this.formHistorial.value.fechaInicio, this.formHistorial.value.fechaFin)) {
      return;
    }

    this.asistenciaService.getHistorialAsistencias(this.page, this.size, this.formHistorial.value.fechaInicio, this.formHistorial.value.fechaFin)
    .subscribe(res => {
      this.historialAsistencias = res.content;
      this.page = res.number;
      this.totalPages = res.totalPages;
      this.totalElements = res.totalElements;
      this.primeraPag = res.first;
      this.ultimaPag = res.last;

      console.log(this.historialAsistencias);
      console.log(this.primeraPag);
    });
  }

  rangoFechasValidator(fechaInicio: string, fechaFin: string): boolean {
    const inicio = fechaInicio;
    const fin = fechaFin;

    if(fin > this.maxfecha){
      return false;
    }

    return inicio <= fin;
  }

  ngOnDestroy(): void {
    /* this.page = 0; */
  }


}

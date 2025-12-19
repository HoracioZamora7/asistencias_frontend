import { Component, OnInit } from '@angular/core';
import { AsistenciaModel } from '@core/models/asistencia.model';
import { AsistenciaService } from '@modules/asistencia/services/asistencia.service';
import { RelojService } from '@shared/services/reloj.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-asistencia-del-dia',
  templateUrl: './asistencia-del-dia.component.html',
  styleUrls: ['./asistencia-del-dia.component.css']
})
export class AsistenciaDelDiaComponent implements OnInit {

  /* hora$!: Observable<string>;
  segundos$!: Observable<string>; */

  
  reloj$ = this.relojService.reloj$;
  
  constructor(private asistenciaService: AsistenciaService, private relojService: RelojService) {}


  asistenciaDelDia$= this.asistenciaService.asistenciaDelDiaSubject.asObservable();

  ngOnInit(): void {
    this.asistenciaService.getAsistenciasDelDia();
  }

  checkIn(): void {
    this.asistenciaService.checkIn();
  }

  checkOut(): void {
    this.asistenciaService.checkOut();
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JustificacionesService } from '@modules/justificaciones/services/justificaciones.service';
import { RelojService } from '@shared/services/reloj.service';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-crear-justificacion-page',
  templateUrl: './crear-justificacion-page.component.html',
  styleUrls: ['./crear-justificacion-page.component.css']
})
export class CrearJustificacionPageComponent implements OnInit {

  tipoJustificaciones = [
    { id: 1, nombre: 'Tardanza' },
    { id: 2, nombre: 'Ausencia' },
  ];

  constructor(private justificacionesService: JustificacionesService, private relojService: RelojService) { }
  
  formJustificacion : FormGroup = new FormGroup({});
  errorSession: boolean = false;
  errorMsg: string = '';
  
  ngOnInit(): void {
    this.formJustificacion = new FormGroup({
      fecha: new FormControl(this.relojService.hoyISO(), Validators.required),
      tipo: new FormControl(null, Validators.required),
      comentario: new FormControl('', Validators.maxLength(200))
    });
  }


  get fecha() { return this.formJustificacion.get('fecha'); }
  get tipo() { return this.formJustificacion.get('tipo'); }
  get comentario() { return this.formJustificacion.get('comentario'); }

  sendJustificacion() {
      const fecha = this.formJustificacion.get('fecha')?.value;
      const tipo = this.formJustificacion.get('tipo')?.value;
      const comentario = this.formJustificacion.get('comentario')?.value;

      this.justificacionesService.registrarJustificacion(fecha, tipo, comentario).subscribe({
        next: (response) => {
          console.log('Justificación enviada con éxito', response);
          alert('Justificación enviada con éxito');
          this.errorSession = false;
          this.formJustificacion.reset();
        },
        error: (error) => {
          this.errorMsg = error.message;
          this.errorSession = true;
          console.log('Error al enviar la justificación', error);
        }
      });
  }


}

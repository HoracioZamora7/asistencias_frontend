import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relojPipe'
})
export class RelojPipePipe implements PipeTransform {

 transform(horaEntrada: string, esDiaLaboral: boolean): boolean {
    if (!esDiaLaboral) return false; 

    const hora = new Date(horaEntrada);
    const limite = new Date(hora);
    limite.setHours(9, 0, 0, 0);

    return hora > limite ? false : true;
  }
}

import { Component, OnInit } from '@angular/core';
import { ReporteDetalleModel } from '@core/models/reporte.model';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-histograma',
  templateUrl: './histograma.component.html',
  styleUrls: ['./histograma.component.css']
})
export class HistogramaComponent implements OnInit {

  chart!: Chart;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getReporteMensual().subscribe(data => {
      this.crearHistograma(data);
    });
  }

  crearHistograma(data: ReporteDetalleModel[]): void {

    const labels = data.map(item => item.fecha);

    const asistencias = data.map(item =>
      item.puntuales + item.justificacionesAceptadas
    );

    const tardanzas = data.map(item =>
      item.tardanzas +
      item.entradasPuntualesSalidasTempranas +
      item.entradasTardiasSalidasTempranas +
      item.entradasSinSalidas
    );

    const faltas = data.map(item => item.faltas);

    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Asistencias',
            data: asistencias,
            backgroundColor: 'lightgreen',
          },
          {
            label: 'Tardanzas y Salidas Tempranas',
            data: tardanzas,
            backgroundColor: 'orange',
          },
          {
            label: 'Faltas',
            data: faltas,
            backgroundColor: 'red',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Reporte mensual de asistencias'
          }
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    };

    const canvas = document.getElementById('histogramaCanvas') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(canvas, config);
  }
}

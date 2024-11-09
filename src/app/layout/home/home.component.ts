import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const data = {
        labels: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            label: 'station1',
            data: [65, 59, 90, 81, 56, 90, 70, 80, 56, 55, 76, 70],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'station2',
            data: [99, 60, 90, 70, 96, 27, 100, 77, 96, 27, 100, 77],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
          },
        ],
      };

      const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'radar',
          data: data,
          options: {
            elements: {
              line: {
                borderWidth: 3,
              },
            },
          },
        });
      }
    }
  }
}

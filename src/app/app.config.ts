// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration()
  ]
};

// chart-config.ts
export const chartConfig1 = {
  type: 'radar',
  data: {},
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
};

export const chartConfig2 = {
  type: 'bar',
  data: {},
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
};
import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveer las rutas aquí
  ],
};

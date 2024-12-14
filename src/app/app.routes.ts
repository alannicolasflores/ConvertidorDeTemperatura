import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta inicial (Home)
  { path: 'calculadora', component: CalculadoraComponent }, // Ruta para Conversor Grados
];

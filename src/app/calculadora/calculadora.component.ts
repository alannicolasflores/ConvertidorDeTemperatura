import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  celsius: string = ''; // Almacenará el valor de Celsius como string
  fahrenheit: string = ''; // Almacenará el valor de Fahrenheit como string

  // Convertir de Celsius a Fahrenheit
  convertirCelsiusAFahrenheit(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.celsius = value;

    if (value === '' || isNaN(Number(value))) {
      this.fahrenheit = '';
    } else {
      this.fahrenheit = ((Number(value) * 9) / 5 + 32).toFixed(2); // Redondeo a 2 decimales
    }
  }

  // Convertir de Fahrenheit a Celsius
  convertirFahrenheitACelsius(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.fahrenheit = value;

    if (value === '' || isNaN(Number(value))) {
      this.celsius = '';
    } else {
      this.celsius = (((Number(value) - 32) * 5) / 9).toFixed(2); // Redondeo a 2 decimales
    }
  }

  // Limpiar los campos
  limpiar(): void {
    this.celsius = '';
    this.fahrenheit = '';
  }
}

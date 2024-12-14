import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que este es un Standalone Component
  imports: [RouterOutlet], // Importa RouterOutlet para manejar el enrutamiento
  templateUrl: './app.component.html', // Define el archivo HTML asociado
  styleUrls: ['./app.component.css'], // Corrige el error de styleUrl -> styleUrls
})
export class AppComponent {
  title = 'ConvertidorDeTemperatura'; // Título de la aplicación
}

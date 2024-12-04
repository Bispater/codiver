import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],  // Importamos RouterModule para el enrutamiento
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // El contenido del componente
}

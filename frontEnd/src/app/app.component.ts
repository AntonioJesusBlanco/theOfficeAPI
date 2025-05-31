import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importante para <router-outlet>
import { PersonajesService, Personaje } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';   // <-- Importa HttpClientModule aquí
import { FiltroVersionPipe } from './filtro-version.pipe';  // Asegúrate de que la ruta sea correcta
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule ,
    HttpClientModule,    // necesario para router-outlet
    FiltroVersionPipe
  ],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  personajes: Personaje[] = [];
  filtro: string = '';
  versionesDisponibles: string[] = [];
menuAbierto = false;
  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe({
      next: (personajes) => {
        console.log('Datos recibidos:', personajes);
        this.personajes = personajes;

        // Extraer versiones únicas
        this.versionesDisponibles = [
          ...new Set(personajes.map(p => p.version))
        ];
      },
      error: (err) => {
        console.error('Error en petición personajes:', err);
      }
    });
  }
}


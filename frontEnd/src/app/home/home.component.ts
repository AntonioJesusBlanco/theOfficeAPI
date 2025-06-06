import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importante para <router-outlet>
import { PersonajesService, Personaje } from '../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';   // <-- Importa HttpClientModule aquí
import { FiltroVersionPipe } from '../filtro-version.pipe';  // Asegúrate de que la ruta sea correcta
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule ,
    HttpClientModule,    // necesario para router-outlet
    FiltroVersionPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'frontEnd';
  personajes: Personaje[] = [];
  filtro: string = '';
  versionesDisponibles: string[] = [];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    interface GetPersonajesResponse {
      version: string;
      // Agrega aquí otras propiedades si las tiene Personaje
      [key: string]: any;
    }

    this.personajesService.getPersonajes().subscribe({
      next: (personajes: GetPersonajesResponse[]) => {
      console.log('Datos recibidos:', personajes);
      this.personajes = personajes as Personaje[];

      // Extraer versiones únicas
      this.versionesDisponibles = [
        ...new Set(personajes.map((p: GetPersonajesResponse) => p.version))
      ];
      },
      error: (err: any) => {
      console.error('Error en petición personajes:', err);
      }
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importante para <router-outlet>
import { PersonajesService, Personaje } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';   // <-- Importa HttpClientModule aquí

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule ,
    HttpClientModule    // necesario para router-outlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  personajes: Personaje[] = [];

  constructor(private personajesService: PersonajesService) {}
ngOnInit() {
  this.personajesService.getPersonajes().subscribe({
    next: (personajes) => {
      console.log('Datos recibidos:', personajes);
      this.personajes = personajes;  // Aquí directo, no ternario raro
    },
    error: (err) => {
      console.error('Error en petición personajes:', err);
    }
  });
}
}

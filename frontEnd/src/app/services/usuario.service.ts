import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Frase {
  texto: string;
  capitulos: string[];
}

export interface Personaje {
  nombre_personaje: string;
  nombre_actor: string;
  apellido_actor: string;
  foto: string;
  primera_aparicion: string;
  version: string;
  frases: Frase[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiUrl = 'http://localhost:3000/api/personajes';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }
}

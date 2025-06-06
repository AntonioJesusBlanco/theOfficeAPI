import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroVersion',
  standalone: true, // Si estás usando componentes standalone
})
export class FiltroVersionPipe implements PipeTransform {
  transform(personajes: any[], version: string): any[] {
    if (!version) return personajes;
    return personajes.filter(p => p.version === version);
  }
}

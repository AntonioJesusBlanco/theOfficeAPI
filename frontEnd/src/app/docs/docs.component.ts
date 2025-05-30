import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // ✅ Aquí se importa el módulo que permite usar *ngIf, *ngFor, etc.
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {
  mostrarMenu = false;
}

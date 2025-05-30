import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // ✅ Aquí se importa el módulo que permite usar *ngIf, *ngFor, etc.
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mostrarMenu = false;
}

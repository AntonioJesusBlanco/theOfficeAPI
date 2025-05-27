import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // <--- Importa esto

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // <-- Importa aquí

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule  // <--- Agrégalo aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

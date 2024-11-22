import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  characters: Character[] = [];  // Usa el tipo Character en lugar de any

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Especificamos el tipo para el parámetro 'data' (data: { results: Character[] })
    this.authService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results;  // Ahora 'data' tiene un tipo definido
      },
      (error) => {
        console.error('Error al obtener personajes:', error);
      }
    );
  }
}
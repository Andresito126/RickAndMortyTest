// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://therickandmortyapi.vercel.app/api/character';

  constructor(private http: HttpClient) {}

  // Modificamos el tipo de la respuesta para que sea un arreglo de personajes
  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.apiUrl);
  }
}

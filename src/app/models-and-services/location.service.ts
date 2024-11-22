import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.http.get(`${this.apiURL}/location`);
  }
}

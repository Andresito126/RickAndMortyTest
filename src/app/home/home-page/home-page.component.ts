import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../models-and-services/location.service';
import { Location } from '../../models-and-services/location';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  locations: Location[] = []; 

  constructor(private locationS:LocationService ) { }

  getDimensions(): void {
    this.locationS.getAllLocations().subscribe(
      (response) => {
        this.locations = response.results; 
      },
      (error) => {
        console.error('Error al cargar las locaciones:', error);
      }
    );
  }


  ngOnInit(): void {
    this.getDimensions();
  }
}

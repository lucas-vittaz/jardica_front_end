import { Component, ViewChild } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [GoogleMapsModule, ScrollRevealDirective],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss',
})
export class GoogleMapsComponent {
  center: google.maps.LatLngLiteral = {
    lat: 47.29957600,
    lng: -1.55063800,
  };
  zoom = 13;
  markerPosition = { lat: 47.29957600, lng: -1.55063800 };
  infoContent =
    'Les Boisiers<br>6 Place Saint-Omer, 44130 Blain<br>Téléphone : 02 40 79 07 11<br>Email : restaurantlesboisiers@gmail.com';

  @ViewChild('infoWindow') infoWindow: any;

  openInfoWindow(marker: any) {
    this.infoWindow.open(marker);
  }
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-location-icon',
  template: '<fa-icon [icon]="faLocationDot"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class LocationIconComponent {
  faLocationDot = faLocationDot;
}
  
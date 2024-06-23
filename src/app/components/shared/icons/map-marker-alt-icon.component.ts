import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-map-marker-alt-icon',
  template: '<fa-icon [icon]="faMapMarkerAlt" class="fa-mapMarkerAlt"></fa-icon>',
  imports: [FontAwesomeModule],
})
export class mapMarkerAltIconComponent {
  faMapMarkerAlt = faMapMarkerAlt;
}

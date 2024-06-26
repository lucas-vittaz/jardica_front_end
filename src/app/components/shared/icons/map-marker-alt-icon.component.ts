import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-map-marker-alt-icon',
  template: '<fa-icon [icon]="faMapMarkerAlt" class="fa-mapMarkerAlt"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-mapMarkerAlt {
        color: #6aaf08;
      }
    `,
  ],
})
export class mapMarkerAltIconComponent {
  faMapMarkerAlt = faMapMarkerAlt;
}

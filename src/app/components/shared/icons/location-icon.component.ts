import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-location-icon',
  template: `<fa-icon [icon]="faLocationDot" class="fa-location-dot-icon"></fa-icon>`,
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-location-dot-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class LocationIconComponent {
  faLocationDot = faLocationDot;
}

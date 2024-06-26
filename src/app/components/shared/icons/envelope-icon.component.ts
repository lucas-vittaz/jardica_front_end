import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-envelope-icon',
  template: '<fa-icon [icon]="faEnvelope" class="fa-envolope-icon"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-envolope-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class EnvelopeIconComponent {
  faEnvelope = faEnvelope;
}

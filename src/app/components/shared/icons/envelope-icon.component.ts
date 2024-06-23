import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-envelope-icon',
  template: '<fa-icon [icon]="faEnvelope"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class EnvelopeIconComponent {
  faEnvelope = faEnvelope;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-envelope-icon',
  template: '<fa-icon [icon]="faEnvelopeOpenText"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class EnvelopeIconComponent {
  faEnvelopeOpenText = faEnvelopeOpenText;
}

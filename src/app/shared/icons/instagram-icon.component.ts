import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-instagram-icon',
  template: '<fa-icon [icon]="faInstagram"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class InstagramIconComponent {
  faInstagram = faInstagram;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-instagram-icon',
  template: '<fa-icon [icon]="faInstagram" class="fa-instagram-icon"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-instagram-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class InstagramIconComponent {
  faInstagram = faInstagram;
}

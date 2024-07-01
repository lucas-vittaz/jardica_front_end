import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-facebook-icon',
  template: '<fa-icon [icon]="faFacebook" class="fa-facebook-icon"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-facebook-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class FacebookIconComponent {
  faFacebook = faFacebook;
}

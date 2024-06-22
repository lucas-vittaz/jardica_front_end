import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-facebook-icon',
  template: '<fa-icon [icon]="faFacebook"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class FacebookIconComponent {
  faFacebook = faFacebook;
}

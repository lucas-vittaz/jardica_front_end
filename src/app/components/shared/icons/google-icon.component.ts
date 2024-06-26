import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-google-icon',
  template: '<fa-icon [icon]="faGoogle" class="fa-google-icon"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-google-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class GoogleIconComponent {
  faGoogle = faGoogle;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-user-icon',
  template: '<fa-icon [icon]="faUser" class="fa-user"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-user {
      }
    `,
  ],
})
export class UserIconComponent {
  faUser = faUser;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-phone-icon',
  template: '<fa-icon [icon]="faPhone"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class PhoneIconComponent {
  faPhone = faPhone;
}
  
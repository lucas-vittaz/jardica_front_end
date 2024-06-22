import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-arrow-down-icon',
  template: '<fa-icon [icon]="faArrowDown"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class ClockIconComponent {
  faArrowDown = faArrowDown;
}

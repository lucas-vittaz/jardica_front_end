import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-clock-icon',
  template: '<fa-icon [icon]="faClock"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class ClockIconComponent {
  faClock = faClock;
}

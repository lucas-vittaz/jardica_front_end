import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-arrow-down-icon',
  template: '<fa-icon [icon]="faArrowDown" class="fa-arrow-down"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-arrow-down {
        position: absolute;
        width: 2rem;
        height: 2rem;
        color: white;
        border: 2px solid white;
        border-radius: 50%;
        padding-top: 2px;
        font-size: 17px;
        animation: bounce-out-down 2s ease-in-out infinite;
      }

      @keyframes bounce-out-down {
        0% {
          transform: translateY(0);
        }
        20% {
          opacity: 1;
          transform: translateY(-20px);
        }
        100% {
          opacity: 0;
          transform: translateY(20px);
        }
      }
    `,
  ],
})
export class ArrowDownIconComponent {
  faArrowDown = faArrowDown;
}

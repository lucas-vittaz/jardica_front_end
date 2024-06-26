import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-phone-icon',
  template: `
    <fa-icon
      [icon]="faPhone"
      [ngClass]="{ 'fa-phone-animated': isAnimated }"
      class="fa-phone"
    ></fa-icon>
  `,
  imports: [CommonModule, FontAwesomeModule],
  styles: [
    `
      .fa-phone {
        color: #6aaf08;
      }

      .fa-phone-animated {
        animation: hithere 2s ease-in-out infinite;
        padding: 10px;
        font-size: 24px;
        display: inline-block;
      }

      @keyframes hithere {
        30% {
          transform: scale(1.2);
        }
        40%,
        60% {
          transform: rotate(-20deg) scale(1.2);
        }
        50% {
          transform: rotate(20deg) scale(1.2);
        }
        70% {
          transform: rotate(0deg) scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class PhoneIconComponent {
  @Input() isAnimated = false;
  faPhone = faPhone;
}

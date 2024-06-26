import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-list-icon',
  template: '<fa-icon [icon]="faList" class="fa-list-icon"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-list-icon {
        color: #6aaf08;
      }
    `,
  ],
})
export class ListIconComponent {
  faList = faList;
}

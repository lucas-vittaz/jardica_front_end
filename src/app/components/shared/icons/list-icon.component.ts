import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-list-icon',
  template: '<fa-icon [icon]="faList"></fa-icon>',
  imports: [FontAwesomeModule]
})
export class ListIconComponent {
  faList = faList;
}

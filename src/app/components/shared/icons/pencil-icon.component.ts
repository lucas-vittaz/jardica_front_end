import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-pencil-icon',
  template: '<fa-icon [icon]="faPencil" class="fa-pencil"></fa-icon>',
  imports: [FontAwesomeModule],
  styles: [
    `
      .fa-pencil {
        color: #6aaf08;
      }
    `,
  ],
})
export class PencilIconComponent {
  faPencil = faPencil;
}

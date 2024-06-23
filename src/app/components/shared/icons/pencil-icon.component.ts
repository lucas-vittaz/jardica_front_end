import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-pencil-icon',
  template: '<fa-icon [icon]="faPencil"></fa-icon>',
  imports: [FontAwesomeModule],
})
export class PencilIconComponent {
  faPencil = faPencil;
}

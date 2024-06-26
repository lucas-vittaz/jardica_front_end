import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}

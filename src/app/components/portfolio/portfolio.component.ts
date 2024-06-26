import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}

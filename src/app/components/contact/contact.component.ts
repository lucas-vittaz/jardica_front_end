import { Component } from '@angular/core';
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactFormComponent, ScrollRevealDirective]
})
export class ContactComponent {

}

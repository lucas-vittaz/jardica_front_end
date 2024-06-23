import { Component } from '@angular/core';
import { ArrowDownIconComponent } from '../shared/icons/arrow-down.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ ArrowDownIconComponent]
})
export class HeaderComponent {}

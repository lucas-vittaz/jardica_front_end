import { Component } from '@angular/core';
import { ClockIconComponent } from "../shared/icons/arrow-down.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ClockIconComponent]
})
export class HeaderComponent {

}

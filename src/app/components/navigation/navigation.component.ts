import { Component } from '@angular/core';
import { PhoneIconComponent } from "../shared/icons/phone-icon.component";

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    imports: [PhoneIconComponent]
})
export class NavigationComponent {

}

import { Component } from '@angular/core';
import { FacebookIconComponent } from "../shared/icons/facebook-icon.component";
import { InstagramIconComponent } from "../shared/icons/instagram-icon.component";
import { GoogleIconComponent } from "../shared/icons/google-icon.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [FacebookIconComponent, InstagramIconComponent, GoogleIconComponent]
})
export class FooterComponent {

}

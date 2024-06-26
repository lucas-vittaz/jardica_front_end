import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { CookieBannerComponent } from './components/shared/cookie-banner/cookie-banner.component';
import { GoogleMapsComponent } from './components/shared/google-maps/google-maps.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    GoogleMapsComponent,
    CookieBannerComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'jardica_front_end';
}

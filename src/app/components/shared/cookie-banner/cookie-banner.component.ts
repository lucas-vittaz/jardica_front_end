import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent {
  showBanner: boolean = false;

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.showBanner = !localStorage.getItem('cookieConsent');
    }
  }

  acceptCookies(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookieConsent', 'true');
    }
    this.showBanner = false;
  }

  refuseCookies(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookieConsent', 'false');
    }
    this.showBanner = false;
  }
}

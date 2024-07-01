import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PhoneIconComponent } from '../shared/icons/phone-icon.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [PhoneIconComponent],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  currentSection: string = 'header';

  sectionMap: Record<string, string> = {
    header: 'home',
    about: 'about',
    services: 'services',
    portfolio: 'portfolio',
    contact: 'contact',
  };

  sections = Object.keys(this.sectionMap);

  ngOnInit(): void {
    this.observeSections();
  }

  ngAfterViewInit(): void {
    this.observeSections();
  }

  observeSections(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
          this.updateActiveLink();
          console.log(`Current section: ${this.currentSection}`); // Debugging
        }
      });
    }, options);

    this.sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        console.log(`Observing section: ${sectionId}`); // Debugging
        observer.observe(section);
      } else {
        console.warn(`Section with ID ${sectionId} not found`); // Debugging
      }
    });
  }

  updateActiveLink(): void {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
      const targetId = this.sectionMap[this.currentSection];
      if (link.getAttribute('href') === `#${targetId}`) {
        link.classList.add('active');
      }
    });
  }
}

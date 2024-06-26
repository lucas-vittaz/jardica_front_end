import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      text: "Nous avons confié des travaux d’élagage dans notre propriété à l’entreprise Jardi'CA. Charlie est très professionnel. Je recommande cette entreprise à tous les Chapelains.",
      author: 'B. Jeremy',
    },
    {
      text: "Sollicité pour la taille des haies d'un jardin ignoré depuis un an... A répondu très rapidement et a été ponctuel au rendez-vous prévu. Travail efficace et propre. Très aimable. Je vous recommande les yeux fermés Jardi'CA !",
      author: 'P. Marie',
    },
    {
      text: "Très bonne expérience ! Nous avons sollicité Jardi'CA pour la taille de nos haies. Le travail est soigné, le ramassage aussi. Aucun dégât sur nos autres arbres et arbustes ou dans le potager. Génial ! Nous recommandons sans hésitation !",
      author: 'J. Lemaire',
    },
    {
      text: 'Le travail effectué a été impeccable, rien à redire. Taille de 2 haies assez grosses et coupe de bambous ont été faites dans le plus grand soin. Le jardin est rendu très propre et il est très gentil. Je recommande sans hésiter.',
      author: 'A. Laurence',
    },
  ];

  currentTestimonialIndex: number = 0;
  previousTestimonialIndex: number = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 8000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextTestimonial(): void {
    this.previousTestimonialIndex = this.currentTestimonialIndex;
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.previousTestimonialIndex = this.currentTestimonialIndex;
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.stopAutoSlide();
    this.previousTestimonialIndex = this.currentTestimonialIndex;
    this.currentTestimonialIndex = index;
    this.startAutoSlide();
  }

  onPrevClick(): void {
    this.stopAutoSlide();
    this.prevTestimonial();
    this.startAutoSlide();
  }

  onNextClick(): void {
    this.stopAutoSlide();
    this.nextTestimonial();
    this.startAutoSlide();
  }
}

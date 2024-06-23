import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setupObserver();
  }

  private setupObserver() {
    const ratio = 0.2;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
          this.renderer.addClass(entry.target, 'reveal-visible'); // Ajoute simplement la classe
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}

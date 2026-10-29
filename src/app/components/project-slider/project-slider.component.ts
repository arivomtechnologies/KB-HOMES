import { Component, signal, ElementRef, viewChild, afterNextRender, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';

export interface SlideItem {
  id: number;
  title: string;
  category: string;
  location: string;
  specs: string;
  tagline: string;
  image: string;
  year: string;
}

@Component({
  selector: 'app-project-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative w-full overflow-hidden bg-dark border-y border-dark-border py-16">
      <div class="container mx-auto px-6 lg:px-12">
        <!-- Section Header with Controls -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Interactive Showcase</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
              Featured <span class="italic text-gold font-serif">Estates Slider</span>
            </h2>
          </div>

          <!-- Controls: Prev, Next & Slide Index -->
          <div class="flex items-center gap-4">
            <div class="font-display text-sm tracking-widest text-gold/80 font-bold">
              0{{ currentIndex() + 1 }} <span class="text-gray-600">/</span> 0{{ slides.length }}
            </div>
            <div class="flex items-center gap-2">
              <button 
                (click)="prevSlide()" 
                class="w-12 h-12 rounded-full border border-gold-border flex items-center justify-center text-gold hover:bg-gold hover:text-dark hover:border-gold hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Previous Project">
                ←
              </button>
              <button 
                (click)="nextSlide()" 
                class="w-12 h-12 rounded-full border border-gold-border flex items-center justify-center text-gold hover:bg-gold hover:text-dark hover:border-gold hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Next Project">
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Slider Main Stage -->
        <div #sliderStage 
             (mouseenter)="pauseAutoPlay()" 
             (mouseleave)="resumeAutoPlay()"
             class="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full border border-dark-border overflow-hidden bg-dark-card group shadow-card">
          
          <!-- Current Active Slide Visual -->
          <div #slideImage 
               class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
               [style.background-image]="'url(' + currentSlide().image + ')'">
            <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent"></div>
          </div>

          <!-- Top-Right Category Badge -->
          <div class="absolute top-6 right-6 z-20 bg-dark/85 backdrop-blur-md border border-gold-border px-4 py-1.5 text-xs text-gold uppercase tracking-[0.2em] font-semibold">
            {{ currentSlide().category }} · {{ currentSlide().year }}
          </div>

          <!-- Slide Content Overlay (Bottom-Left) -->
          <div #slideContent class="absolute bottom-8 left-6 sm:left-12 max-w-2xl z-20">
            <div class="text-xs text-gold font-semibold uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span class="w-6 h-[1px] bg-gold"></span>
              {{ currentSlide().location }}
            </div>

            <h3 class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {{ currentSlide().title }}
            </h3>

            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 line-clamp-2 max-w-xl">
              {{ currentSlide().tagline }}
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <div class="px-4 py-2 bg-dark/70 border border-dark-border text-xs text-gray-300">
                {{ currentSlide().specs }}
              </div>
              <a routerLink="/projects" class="px-6 py-2.5 bg-gold text-dark text-xs font-bold uppercase tracking-widest hover:bg-gold-light hover:shadow-gold transition-all duration-300">
                View Project Details
              </a>
            </div>
          </div>

          <!-- Decorative Gold Corner Accents -->
          <div class="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold pointer-events-none z-20"></div>
          <div class="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold pointer-events-none z-20"></div>

          <!-- Progress Bar at Bottom of Slider -->
          <div class="absolute bottom-0 left-0 h-1 bg-dark-border w-full z-20">
            <div 
              class="h-full bg-gold transition-all duration-500 ease-out" 
              [style.width.%]="((currentIndex() + 1) / slides.length) * 100"></div>
          </div>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center items-center gap-3 mt-8">
          @for (s of slides; track s.id; let idx = $index) {
            <button 
              (click)="goToSlide(idx)" 
              [class.w-8]="currentIndex() === idx"
              [class.bg-gold]="currentIndex() === idx"
              [class.w-2.5]="currentIndex() !== idx"
              [class.bg-gray-700]="currentIndex() !== idx"
              class="h-2.5 rounded-full transition-all duration-300 hover:bg-gold-light"
              [attr.aria-label]="'Go to slide ' + (idx + 1)">
            </button>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectSliderComponent implements OnDestroy {
  private gsapService = inject(GsapService);

  sliderStage = viewChild<ElementRef>('sliderStage');
  slideImage = viewChild<ElementRef>('slideImage');
  slideContent = viewChild<ElementRef>('slideContent');

  currentIndex = signal<number>(0);
  private autoPlayTimer: any = null;

  slides: SlideItem[] = [
    {
      id: 1,
      title: 'The Azure Cantilever Villa',
      category: 'Luxury Villa',
      location: 'East Coast Road, Chennai',
      specs: '6,400 Sq.Ft · 5 BHK · Infinity Pool',
      tagline: 'A bold, cantilevered modern glass pavilion facing the Bay of Bengal with custom Italian marble and double-height ocean-view salons.',
      image: 'images/residential-1.jpg',
      year: '2025'
    },
    {
      id: 2,
      title: 'Serenade Contemporary Residence',
      category: 'Modern Residence',
      location: 'Anna Nagar, Chennai',
      specs: '4,800 Sq.Ft · 4 BHK · Private Courtyard',
      tagline: 'Harmonious integration of lush internal courtyard gardens, skylit living spaces, and bespoke teak millwork.',
      image: 'images/residential-2.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'The Waterfront Beach Estate',
      category: 'Luxury Villa',
      location: 'Besant Nagar, Chennai',
      specs: '7,200 Sq.Ft · 6 BHK · Coastal Estate',
      tagline: 'Panoramic coastal glazing engineered with hurricane-rated triple-glazed panels and an expansive rooftop entertainment deck.',
      image: 'images/residential-3.jpg',
      year: '2025'
    },
    {
      id: 4,
      title: 'Aurora Corporate Landmark',
      category: 'Commercial',
      location: 'OMR Tech Corridor, Chennai',
      specs: '32,000 Sq.Ft · High-Performance Glass',
      tagline: 'Signature architectural glass tower with integrated solar facade shading, VRF climate control, and high-speed lifts.',
      image: 'images/commercial-1.jpg',
      year: '2024'
    },
    {
      id: 5,
      title: 'Calacatta Marble Penthouse',
      category: 'Renovation',
      location: 'Poes Garden, Chennai',
      specs: '3,800 Sq.Ft · Luxury Penthouse Restructure',
      tagline: 'Full structural reconfiguration featuring continuous bookmatched Italian Calacatta marble and acoustic brass ceilings.',
      image: 'images/renovation-1.jpg',
      year: '2025'
    },
    {
      id: 6,
      title: 'Imperial Glass Wing Restoration',
      category: 'Renovation & Extension',
      location: 'Nungambakkam, Chennai',
      specs: '5,500 Sq.Ft · Heritage Architecture',
      tagline: 'Sympathetic structural restoration of historic stone masonry fused with an ultra-modern cantilevered glass wing.',
      image: 'images/renovation-2.jpg',
      year: '2024'
    }
  ];

  currentSlide = () => this.slides[this.currentIndex()];

  constructor() {
    afterNextRender(() => {
      this.startAutoPlay();
    });
  }

  nextSlide() {
    const nextIdx = (this.currentIndex() + 1) % this.slides.length;
    this.animateSlideTransition(nextIdx, 1);
  }

  prevSlide() {
    const prevIdx = (this.currentIndex() - 1 + this.slides.length) % this.slides.length;
    this.animateSlideTransition(prevIdx, -1);
  }

  goToSlide(idx: number) {
    if (idx === this.currentIndex()) return;
    const direction = idx > this.currentIndex() ? 1 : -1;
    this.animateSlideTransition(idx, direction);
  }

  private animateSlideTransition(newIdx: number, direction: number) {
    const gsap = this.gsapService.gsap;
    if (!gsap || !this.slideImage() || !this.slideContent()) {
      this.currentIndex.set(newIdx);
      return;
    }

    const imgEl = this.slideImage()!.nativeElement;
    const contentEl = this.slideContent()!.nativeElement;

    // Slide out animation
    gsap.to(imgEl, {
      opacity: 0.3,
      scale: 1.08,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        this.currentIndex.set(newIdx);
        // Slide in animation from left or right
        gsap.fromTo(imgEl, 
          { x: direction * 40, opacity: 0.3, scale: 1.08 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out' }
        );
      }
    });

    gsap.fromTo(contentEl,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, delay: 0.25, ease: 'power3.out' }
    );
  }

  private startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 5500);
  }

  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  resumeAutoPlay() {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.pauseAutoPlay();
  }
}

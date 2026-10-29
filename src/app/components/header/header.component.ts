import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.bg-dark\/95]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.border-b]="isScrolled()"
      [class.border-gold-border\/25]="isScrolled()"
      [class.shadow-card]="isScrolled()"
      [class.py-3]="isScrolled()"
      [class.py-5]="!isScrolled()">
      
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
        
        <!-- 1. Brand Logo: KB HOMES -->
        <a routerLink="/" class="flex items-center gap-3 group shrink-0" (click)="closeMobileMenu()">
          <div class="w-10 h-10 border border-gold flex items-center justify-center relative bg-dark-card group-hover:shadow-gold transition-all duration-300">
            <span class="text-gold font-display font-bold text-lg tracking-tighter">KB</span>
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-gold"></div>
          </div>
          <div class="flex flex-col">
            <span class="font-display text-lg sm:text-xl font-bold tracking-widest text-white group-hover:text-gold transition-colors whitespace-nowrap">
              KB HOMES
            </span>
            <span class="text-[8px] sm:text-[9px] tracking-[0.26em] text-gray-400 uppercase -mt-0.5 whitespace-nowrap">
              Architects & Builders
            </span>
          </div>
        </a>

        <!-- 2. Desktop Navigation Links (with gold underline indicator) -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-8 shrink-0">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
             class="nav-item">
            Home
          </a>
          <a routerLink="/about" routerLinkActive="active"
             class="nav-item">
            About
          </a>
          <a routerLink="/services" routerLinkActive="active"
             class="nav-item">
            Services
          </a>
          <a routerLink="/projects" routerLinkActive="active"
             class="nav-item">
            Projects
          </a>
          <a routerLink="/estimator" routerLinkActive="active"
             class="nav-item inline-flex items-center gap-1.5 text-gold-light hover:text-gold">
            <span class="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0"></span>
            Cost Estimator
          </a>
          <a routerLink="/contact" routerLinkActive="active"
             class="nav-item">
            Contact
          </a>
        </nav>

        <!-- 3. Actions: Direct Phone & Start Project CTA -->
        <div class="flex items-center gap-3 sm:gap-4 shrink-0">
          <!-- Sleek One-Click Phone Badge -->
          <a 
            href="tel:+917397413423" 
            class="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border/40 hover:border-gold bg-dark/60 text-[11px] font-semibold tracking-wider text-gray-200 hover:text-gold transition-all whitespace-nowrap group">
            <svg class="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z"/>
            </svg>
            <span>+91 73974 13423</span>
          </a>

          <!-- Primary Gold CTA Button -->
          <a 
            routerLink="/contact" 
            class="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-gold text-dark font-sans font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap">
            Start Project
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            (click)="toggleMobileMenu()" 
            class="lg:hidden text-gray-300 hover:text-gold p-2 focus:outline-none" 
            aria-label="Toggle navigation menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (!mobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Slide-Down Drawer -->
      @if (mobileMenuOpen()) {
        <div class="lg:hidden bg-dark-card border-b border-gold-border/40 px-6 py-8 flex flex-col gap-5 animate-fadeIn shadow-2xl">
          <a (click)="closeMobileMenu()" routerLink="/" routerLinkActive="text-gold font-bold" [routerLinkActiveOptions]="{exact: true}"
             class="text-xs uppercase tracking-widest text-gray-200 hover:text-gold py-1">Home</a>
          <a (click)="closeMobileMenu()" routerLink="/about" routerLinkActive="text-gold font-bold"
             class="text-xs uppercase tracking-widest text-gray-200 hover:text-gold py-1">About</a>
          <a (click)="closeMobileMenu()" routerLink="/services" routerLinkActive="text-gold font-bold"
             class="text-xs uppercase tracking-widest text-gray-200 hover:text-gold py-1">Services</a>
          <a (click)="closeMobileMenu()" routerLink="/projects" routerLinkActive="text-gold font-bold"
             class="text-xs uppercase tracking-widest text-gray-200 hover:text-gold py-1">Projects</a>
          <a (click)="closeMobileMenu()" routerLink="/estimator" routerLinkActive="text-gold font-bold"
             class="text-xs uppercase tracking-widest text-gold-light hover:text-gold py-1 font-semibold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Cost Estimator
          </a>
          <a (click)="closeMobileMenu()" routerLink="/contact" routerLinkActive="text-gold font-bold"
             class="text-xs uppercase tracking-widest text-gray-200 hover:text-gold py-1">Contact</a>
          
          <div class="pt-4 border-t border-dark-border flex flex-col gap-3">
            <a 
              href="tel:+917397413423" 
              class="flex items-center justify-center gap-2 py-3 border border-gold-border text-xs text-gold font-semibold tracking-wider uppercase">
              <span>📞</span> +91 73974 13423
            </a>
            <a 
              (click)="closeMobileMenu()" 
              routerLink="/contact" 
              class="text-center py-3.5 bg-gold text-dark font-bold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors">
              Start Your Project
            </a>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .nav-item {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #D1D5DB;
      position: relative;
      padding: 0.35rem 0;
      white-space: nowrap;
      transition: color 0.25s ease;
    }
    @media (min-width: 1280px) {
      .nav-item {
        font-size: 0.78rem;
        letter-spacing: 0.2em;
      }
    }
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #C9A84C;
      transition: width 0.3s ease;
    }
    .nav-item:hover,
    .nav-item.active {
      color: #C9A84C;
    }
    .nav-item.active::after,
    .nav-item:hover::after {
      width: 100%;
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}

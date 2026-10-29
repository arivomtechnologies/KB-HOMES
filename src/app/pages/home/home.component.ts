import { Component, ElementRef, viewChild, afterNextRender, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GsapService } from '../../services/gsap.service';
import { CostEstimatorComponent } from '../../components/estimator/estimator.component';
import { ProjectSliderComponent } from '../../components/project-slider/project-slider.component';
import { MarqueeTickerComponent } from '../../components/marquee-ticker/marquee-ticker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CostEstimatorComponent, ProjectSliderComponent, MarqueeTickerComponent],
  template: `
    <!-- ═══ 1. HERO SECTION WITH GSAP ENTRANCE & PARALLAX ═══ -->
    <section #heroSection class="relative min-h-screen flex items-center bg-dark overflow-hidden pt-28 pb-16">
      <!-- Background Image with Parallax -->
      <div #heroBg class="absolute inset-0 bg-cover bg-center opacity-45 scale-105 will-change-transform"
           style="background-image: url('images/hero-bg.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent"></div>

      <!-- Vertical Architectural Metadata (Left Rail) -->
      <div class="hidden lg:flex fixed left-6 bottom-32 items-center gap-4 -rotate-90 origin-left text-[10px] tracking-[0.3em] text-gold/60 z-20 pointer-events-none">
        <span class="w-12 h-[1px] bg-gold/30"></span>
        <span>PUZHUTHIVAKKAM · CHENNAI · EST. 2004</span>
      </div>

      <!-- Hero Main Content -->
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div class="max-w-3xl">
          <div class="hero-label inline-flex items-center gap-3 text-gold text-xs tracking-[0.35em] font-semibold uppercase mb-4">
            <span class="w-8 h-[1px] bg-gold"></span>
            MASTER ARCHITECTS & BUILDERS
          </div>

          <h1 class="hero-title font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
            Building the Future of <br>
            <span class="italic text-gold font-serif">Luxury Living.</span>
          </h1>

          <p class="hero-desc font-sans text-gray-300 text-sm sm:text-lg mb-8 max-w-xl leading-relaxed">
            KB HOMES crafts bespoke contemporary estates, master-planned residences, and turnkey architectural spaces with precision engineering and timeless craftsmanship.
          </p>

          <div class="hero-actions flex flex-wrap gap-4">
            <a routerLink="/estimator" 
               class="px-8 py-4 bg-gold text-dark font-sans font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
              Calculate Estimate
            </a>
            <a routerLink="/projects" 
               class="px-8 py-4 border border-gold-border text-white font-sans text-xs tracking-widest uppercase hover:border-gold hover:text-gold hover:-translate-y-1 transition-all duration-300">
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>

      <!-- Animated Scroll Hint Indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 pointer-events-none">
        <span class="text-[9px] tracking-[0.25em] uppercase">SCROLL</span>
        <div class="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
      </div>
    </section>

    <!-- ═══ 2. INFINITE MATERIALS & BRANDS TICKER ═══ -->
    <app-marquee-ticker />

    <!-- ═══ 3. STATS COUNTER BAR WITH GSAP NUMERICAL TWEENS ═══ -->
    <section class="border-y border-dark-border bg-dark-surface py-12 relative z-20">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="stat-card p-4 border-r border-dark-border last:border-r-0">
            <div class="font-display text-3xl sm:text-5xl font-bold text-white mb-1">
              <span #statNum1 class="text-gold">0</span><span class="text-gold">+</span>
            </div>
            <div class="text-[11px] tracking-widest uppercase text-gray-400">Years of Heritage</div>
          </div>
          <div class="stat-card p-4 border-r border-dark-border last:border-r-0">
            <div class="font-display text-3xl sm:text-5xl font-bold text-white mb-1">
              <span #statNum2 class="text-gold">0</span><span class="text-gold">+</span>
            </div>
            <div class="text-[11px] tracking-widest uppercase text-gray-400">Villas & Homes Built</div>
          </div>
          <div class="stat-card p-4 border-r border-dark-border last:border-r-0">
            <div class="font-display text-3xl sm:text-5xl font-bold text-white mb-1">
              <span #statNum3 class="text-gold">0</span><span class="text-gold">M+</span>
            </div>
            <div class="text-[11px] tracking-widest uppercase text-gray-400">Sq. Ft. Constructed</div>
          </div>
          <div class="stat-card p-4">
            <div class="font-display text-3xl sm:text-5xl font-bold text-white mb-1">
              <span #statNum4 class="text-gold">0</span><span class="text-gold">%</span>
            </div>
            <div class="text-[11px] tracking-widest uppercase text-gray-400">On-Time Handover</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 4. INTERACTIVE LEFT-RIGHT PROJECT SLIDER ═══ -->
    <app-project-slider />

    <!-- ═══ 5. ABOUT INTRO: LEFT/RIGHT GSAP SCROLL REVEAL ═══ -->
    <section class="py-24 bg-dark relative overflow-hidden">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Visual: Slides in from Left -->
          <div #aboutImageWrap class="lg:col-span-6 relative group">
            <div class="relative overflow-hidden border border-dark-border">
              <img src="images/studio-team.jpg" alt="KB HOMES Architects Reviewing Blueprints" 
                   class="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <!-- Gold Corner Accents -->
            <div class="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold pointer-events-none"></div>
            <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold pointer-events-none"></div>
            <!-- Floating Experience Badge -->
            <div class="absolute -bottom-6 left-8 bg-dark-card border border-gold-border px-6 py-4 shadow-xl">
              <div class="font-display text-2xl font-bold text-gold">Mr. Baskar</div>
              <div class="text-[10px] tracking-widest uppercase text-gray-400">2 Decades Structural Mastery</div>
            </div>
          </div>

          <!-- Content Side: Slides in from Right -->
          <div #aboutTextWrap class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-3 text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              <span class="w-6 h-[1px] bg-gold"></span>
              WHO WE ARE
            </div>
            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Where Visionary Architecture Meets <span class="italic text-gold font-serif">Master Execution.</span>
            </h2>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              At KB HOMES, we understand that a home is more than physical structure—it is an enduring legacy. Founded by <strong class="text-white">Mr. Baskar</strong> at Puzhuthivakkam, Chennai, our multidisciplinary team of structural engineers, master architects, and luxury interior curators have sculpted residences that redefine skyline elegance.
            </p>
            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We manage the entire lifecycle: from initial soil testing, vastu-compliant architectural planning, and 3D elevations to municipal approvals and turnkey civil execution with 100% contract transparency.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-dark-border">
              <div class="flex items-center gap-3">
                <span class="text-gold text-lg">◈</span>
                <span class="text-xs uppercase tracking-wider text-gray-200">10-Year Warranty</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-gold text-lg">◈</span>
                <span class="text-xs uppercase tracking-wider text-gray-200">Zero Cost Overruns</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-gold text-lg">◈</span>
                <span class="text-xs uppercase tracking-wider text-gray-200">3D BIM Visuals</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-gold text-lg">◈</span>
                <span class="text-xs uppercase tracking-wider text-gray-200">Premium Materials</span>
              </div>
            </div>

            <div class="pt-2">
              <a routerLink="/about" class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light group">
                <span>Read Our Full Story</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 6. CORE SERVICES GRID (GSAP CONTAINER-TRIGGERED REVEAL) ═══ -->
    <section class="py-24 bg-dark-surface border-t border-dark-border relative">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Specialized Capabilities</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
              Comprehensive <span class="italic text-gold font-serif">Building Services</span>
            </h2>
          </div>
          <a routerLink="/services" class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light group">
            <span>View All Services</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div id="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          @for (service of services; track service.title) {
            <div class="service-card bg-dark-card border border-dark-border p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-gold-border/60 hover:shadow-card transition-all duration-300">
              <!-- Top Gold hairline border animation on hover -->
              <div class="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div class="text-3xl mb-6 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{{ service.icon }}</div>
              <h3 class="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-xs text-gray-400 leading-relaxed mb-6">
                {{ service.description }}
              </p>
              <div class="flex items-center justify-between text-xs text-gold font-semibold pt-4 border-t border-dark-border/60">
                <span>{{ service.highlight }}</span>
                <span class="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══ 7. FEATURED PROJECTS PORTFOLIO ═══ -->
    <section class="py-24 bg-dark relative">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Our Portfolio</span>
          <h2 class="font-display text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Curated <span class="italic text-gold font-serif">Masterworks</span>
          </h2>
          <p class="text-gray-400 text-xs sm:text-sm">
            Explore our recently completed villas, residential enclaves, and commercial landmarks crafted for discerning homeowners.
          </p>

          <!-- Filter Tabs -->
          <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            @for (tab of projectTabs; track tab) {
              <button 
                (click)="selectedTab.set(tab)"
                [class.bg-gold]="selectedTab() === tab"
                [class.text-dark]="selectedTab() === tab"
                [class.border-gold]="selectedTab() === tab"
                [class.text-gray-400]="selectedTab() !== tab"
                [class.border-dark-border]="selectedTab() !== tab"
                class="px-5 py-2 border text-xs tracking-wider uppercase font-semibold hover:border-gold-border transition-all">
                {{ tab }}
              </button>
            }
          </div>
        </div>

        <!-- Projects Grid -->
        <div id="projectsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          @for (project of filteredProjects(); track project.title) {
            <div class="project-card group bg-dark-card border border-dark-border overflow-hidden relative shadow-card hover:border-gold-border/60 hover:-translate-y-2 transition-all duration-300">
              <div class="relative overflow-hidden h-72">
                <img [src]="project.image" [alt]="project.title" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
                <div class="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm border border-gold-border px-3 py-1 text-[10px] text-gold uppercase tracking-widest font-semibold">
                  {{ project.category }}
                </div>
              </div>
              <div class="p-6">
                <div class="text-xs text-gold/80 mb-1 tracking-wider">{{ project.location }}</div>
                <h3 class="font-display text-lg font-bold text-white group-hover:text-gold transition-colors mb-2">
                  {{ project.title }}
                </h3>
                <div class="flex justify-between text-xs text-gray-400 pt-3 border-t border-dark-border">
                  <span>{{ project.specs }}</span>
                  <span class="text-gold font-semibold">{{ project.status }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══ 8. COST ESTIMATOR SECTION ═══ -->
    <section class="py-24 bg-dark-surface border-t border-dark-border">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <app-cost-estimator />
      </div>
    </section>

    <!-- ═══ 9. CLIENT TESTIMONIALS (GSAP STAGGERED FADE-UP) ═══ -->
    <section class="py-24 bg-dark relative">
      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="text-center max-w-xl mx-auto mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Testimonials</span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Voices of <span class="italic text-gold font-serif">Distinction</span>
          </h2>
        </div>

        <div id="testimonialsGrid" class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          @for (test of testimonials; track test.author) {
            <div class="testi-card p-8 bg-dark-card border border-dark-border flex flex-col justify-between relative group hover:border-gold-border/50 hover:-translate-y-1 transition-all duration-300">
              <div class="text-gold text-3xl font-serif mb-4">“</div>
              <p class="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                {{ test.quote }}
              </p>
              <div class="pt-4 border-t border-dark-border">
                <div class="font-display font-bold text-sm text-white">{{ test.author }}</div>
                <div class="text-[11px] text-gold tracking-wider">{{ test.project }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnDestroy {
  private gsapService = inject(GsapService);

  heroSection = viewChild<ElementRef>('heroSection');
  heroBg = viewChild<ElementRef>('heroBg');
  aboutImageWrap = viewChild<ElementRef>('aboutImageWrap');
  aboutTextWrap = viewChild<ElementRef>('aboutTextWrap');

  statNum1 = viewChild<ElementRef>('statNum1');
  statNum2 = viewChild<ElementRef>('statNum2');
  statNum3 = viewChild<ElementRef>('statNum3');
  statNum4 = viewChild<ElementRef>('statNum4');

  selectedTab = signal<string>('All');
  projectTabs = ['All', 'Luxury Villas', 'Modern Residences', 'Commercial', 'Renovations'];

  services = [
    {
      icon: '🏛️',
      title: 'Turnkey Civil Construction',
      description: 'End-to-end master structural construction with premium Fe550 grade steel, certified aggregate, and zero-compromise engineering.',
      highlight: 'Turnkey Delivery Guarantee'
    },
    {
      icon: '📐',
      title: 'Architectural & 3D BIM Design',
      description: 'Parametric CAD floor plans, photorealistic 3D external daylight & dusk rendering, and structural engineering compliance.',
      highlight: 'Photorealistic 3D Walkthrough'
    },
    {
      icon: '✨',
      title: 'Luxury Interior Curation',
      description: 'Bespoke marble flooring, acoustic ceiling treatments, integrated ambient LED channels, and customized teak millwork.',
      highlight: 'Bespoke Finishing Tier'
    },
    {
      icon: '🌿',
      title: 'Sustainable Smart Homes',
      description: 'Rooftop solar integration, rainwater harvesting systems, double-glazed thermal windows, and full home automation wiring.',
      highlight: 'Eco-Luxury Standards'
    },
    {
      icon: '🔄',
      title: 'Heritage Renovation & Expansion',
      description: 'Structural reinforcement, vertical floor additions, retrofitting vintage facades with high-performance glass.',
      highlight: 'Adaptive Architecture'
    },
    {
      icon: '📋',
      title: 'Statutory Approvals & Liaison',
      description: 'Complete regulatory handling, CMDA / DTCP compliance, soil tests, and water table analysis before construction start.',
      highlight: 'Full Legal Peace of Mind'
    }
  ];

  projects = [
    {
      title: 'The Azure Cantilever Villa',
      category: 'Luxury Villas',
      location: 'ECR, Chennai',
      specs: '6,400 Sq.Ft · 5 BHK Luxury Estate',
      status: 'Delivered 2025',
      image: 'images/residential-1.jpg'
    },
    {
      title: 'Serenade Contemporary Residence',
      category: 'Modern Residences',
      location: 'Anna Nagar, Chennai',
      specs: '4,800 Sq.Ft · Infinity Pool & Court',
      status: 'Delivered 2024',
      image: 'images/residential-2.jpg'
    },
    {
      title: 'The Waterfront Beach Estate',
      category: 'Luxury Villas',
      location: 'Besant Nagar, Chennai',
      specs: '7,200 Sq.Ft · Coastal Glass Residence',
      status: 'Delivered 2025',
      image: 'images/residential-3.jpg'
    },
    {
      title: 'Aurora Corporate Landmark',
      category: 'Commercial',
      location: 'OMR Tech Corridor',
      specs: '32,000 Sq.Ft · High-Performance Glass',
      status: 'Delivered 2024',
      image: 'images/commercial-1.jpg'
    },
    {
      title: 'Calacatta Marble Penthouse',
      category: 'Renovations',
      location: 'Poes Garden, Chennai',
      specs: '3,800 Sq.Ft · Italian Marble Curation',
      status: 'Delivered 2025',
      image: 'images/renovation-1.jpg'
    },
    {
      title: 'Imperial Glass Wing Restoration',
      category: 'Renovations',
      location: 'Nungambakkam, Chennai',
      specs: '5,500 Sq.Ft · Contemporary Extension',
      status: 'Delivered 2024',
      image: 'images/renovation-2.jpg'
    }
  ];

  testimonials = [
    {
      quote: 'KB HOMES completed our 5,800 sq.ft villa in ECR three weeks ahead of schedule. Mr. Baskar and his team were on site daily ensuring absolute structural perfection.',
      author: 'Dr. Raghavan Sundaram',
      project: 'Azure Villa Owner, ECR'
    },
    {
      quote: 'From 3D elevations to final handover, the transparent milestone updates and cost control were unlike any contractor we have worked with.',
      author: 'Priya & Ashwin Venkat',
      project: 'Contemporary Residence, Anna Nagar'
    },
    {
      quote: 'The team managed municipal approvals, foundation engineering in challenging soil, and built our corporate building flawlessly.',
      author: 'K. Balachandran',
      project: 'Managing Director, Apex Logistics'
    }
  ];

  filteredProjects() {
    const tab = this.selectedTab();
    if (tab === 'All') return this.projects;
    return this.projects.filter(p => p.category === tab);
  }

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  private initAnimations() {
    const gsap = this.gsapService.gsap;
    if (!gsap) return;

    // 1. Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (this.heroBg()) {
      tl.fromTo(this.heroBg()!.nativeElement,
        { scale: 1.15, filter: 'blur(6px)' },
        { scale: 1.05, filter: 'blur(0px)', duration: 1.8 }
      );
    }

    tl.from('.hero-label', { y: 25, opacity: 0, duration: 0.8 }, '-=1.2')
      .from('.hero-title', { y: 35, opacity: 0, duration: 0.9 }, '-=0.7')
      .from('.hero-desc', { y: 25, opacity: 0, duration: 0.8 }, '-=0.7')
      .from('.hero-actions a', { y: 20, opacity: 0, stagger: 0.15, duration: 0.7 }, '-=0.5');

    // 2. Parallax on Hero Background while scrolling
    if (this.heroBg()) {
      this.gsapService.parallax(this.heroBg()!.nativeElement, 15);
    }

    // 3. Counter Animations
    if (this.statNum1()) this.gsapService.animateCounter(this.statNum1()!.nativeElement, 20, '', 1.8);
    if (this.statNum2()) this.gsapService.animateCounter(this.statNum2()!.nativeElement, 150, '', 2.0);
    if (this.statNum3()) this.gsapService.animateCounter(this.statNum3()!.nativeElement, 1.2, '', 1.8);
    if (this.statNum4()) this.gsapService.animateCounter(this.statNum4()!.nativeElement, 100, '', 2.2);

    // 4. About Section Left / Right Slide Reveals
    if (this.aboutImageWrap()) {
      this.gsapService.slideFromLeft(this.aboutImageWrap()!.nativeElement, 0);
    }
    if (this.aboutTextWrap()) {
      this.gsapService.slideFromRight(this.aboutTextWrap()!.nativeElement, 0.15);
    }

    // 5. Container-Triggered Grids (Guarantees ALL cards animate to full opacity 1)
    this.gsapService.staggerGrid('#servicesGrid', '.service-card', 0.1);
    this.gsapService.staggerGrid('#projectsGrid', '.project-card', 0.1);
    this.gsapService.staggerGrid('#testimonialsGrid', '.testi-card', 0.12);
  }

  ngOnDestroy() {
    this.gsapService.cleanup();
  }
}

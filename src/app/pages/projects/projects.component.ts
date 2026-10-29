import { Component, signal, afterNextRender, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-28 pb-20 bg-dark text-white min-h-screen">
      <!-- Page Hero Header -->
      <section class="container mx-auto px-6 lg:px-12 py-12 border-b border-dark-border">
        <div class="max-w-3xl">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Architectural Portfolio</span>
          <h1 class="font-display text-4xl sm:text-6xl font-bold mt-3 mb-6">
            Curated Works of <br>
            <span class="italic text-gold font-serif">Distinction.</span>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Browse our landmark residential estates, beachfront villas, and corporate commercial spaces built with meticulous precision across Tamil Nadu.
          </p>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-3 mt-8">
            @for (tab of tabs; track tab) {
              <button 
                (click)="setTab(tab)"
                [class.bg-gold]="activeTab() === tab"
                [class.text-dark]="activeTab() === tab"
                [class.border-gold]="activeTab() === tab"
                [class.text-gray-400]="activeTab() !== tab"
                [class.border-dark-border]="activeTab() !== tab"
                class="px-5 py-2 border text-xs tracking-wider uppercase font-semibold hover:border-gold-border transition-all">
                {{ tab }}
              </button>
            }
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="container mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of filteredList(); track item.title) {
            <div class="project-portfolio-card bg-dark-card border border-dark-border overflow-hidden group hover:border-gold-border/70 hover:shadow-card hover:-translate-y-2 transition-all duration-300">
              <div class="relative overflow-hidden h-72">
                <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-dark/85 backdrop-blur-sm border border-gold-border px-3 py-1 text-[10px] text-gold uppercase tracking-widest font-semibold">
                  {{ item.category }}
                </div>
              </div>

              <div class="p-6">
                <div class="text-xs text-gold/80 mb-1 tracking-wider">{{ item.location }}</div>
                <h3 class="font-display text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{{ item.title }}</h3>
                <p class="text-xs text-gray-400 mb-4 leading-relaxed">{{ item.description }}</p>

                <div class="flex items-center justify-between text-xs pt-4 border-t border-dark-border text-gray-400">
                  <span>{{ item.area }}</span>
                  <span class="text-gold font-semibold">{{ item.year }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Bottom Banner -->
      <section class="container mx-auto px-6 lg:px-12 py-12 text-center">
        <div class="p-12 bg-dark-surface border border-gold-border/30 max-w-3xl mx-auto">
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mb-3">Have a Unique Plot or Vision?</h2>
          <p class="text-xs sm:text-sm text-gray-400 mb-6">Our senior architects offer custom structural feasibility and elevation modeling consultations.</p>
          <a routerLink="/contact" class="px-8 py-3.5 bg-gold text-dark font-bold text-xs tracking-widest uppercase hover:bg-gold-light transition-all">
            Schedule Site Review
          </a>
        </div>
      </section>
    </div>
  `
})
export class ProjectsComponent implements OnDestroy {
  private gsapService = inject(GsapService);

  activeTab = signal<string>('All');
  tabs = ['All', 'Luxury Villas', 'Modern Residences', 'Commercial', 'Renovations'];

  projects = [
    {
      title: 'The Azure Cantilever Villa',
      category: 'Luxury Villas',
      location: 'East Coast Road, Chennai',
      area: '6,400 Sq.Ft · 5 BHK',
      year: 'Delivered 2025',
      image: 'images/residential-1.jpg',
      description: 'Striking cantilevered glass architecture with sea breezes, open courtyard, and private lap pool.'
    },
    {
      title: 'Serenade Contemporary Residence',
      category: 'Modern Residences',
      location: 'Anna Nagar, Chennai',
      area: '4,800 Sq.Ft · 4 BHK',
      year: 'Delivered 2024',
      image: 'images/residential-2.jpg',
      description: 'Double-height living space with internal skylight garden, acoustic home theatre, and imported timber decks.'
    },
    {
      title: 'The Waterfront Beach Estate',
      category: 'Luxury Villas',
      location: 'Besant Nagar, Chennai',
      area: '7,200 Sq.Ft · 6 BHK',
      year: 'Delivered 2025',
      image: 'images/residential-3.jpg',
      description: 'Panoramic coastal facade with hurricane-rated triple-glazed windows and integrated infinity pool terrace.'
    },
    {
      title: 'Aurora Corporate Landmark',
      category: 'Commercial',
      location: 'OMR Tech Corridor, Chennai',
      area: '32,000 Sq.Ft · Commercial Tower',
      year: 'Delivered 2024',
      image: 'images/commercial-1.jpg',
      description: 'Gold-accented commercial glass tower with central VRF climate control and rooftop corporate lounge.'
    },
    {
      title: 'Calacatta Marble Penthouse',
      category: 'Renovations',
      location: 'Poes Garden, Chennai',
      area: '3,800 Sq.Ft · Luxury Penthouse',
      year: 'Delivered 2025',
      image: 'images/renovation-1.jpg',
      description: 'High-end interior restructuring featuring seamless bookmatched Italian marble and bespoke brass accents.'
    },
    {
      title: 'Imperial Glass Wing Restoration',
      category: 'Renovations',
      location: 'Nungambakkam, Chennai',
      area: '5,500 Sq.Ft · Heritage Extension',
      year: 'Delivered 2024',
      image: 'images/renovation-2.jpg',
      description: 'Sympathetic restoration of historic colonial architecture fused with a contemporary glass-and-steel wing.'
    }
  ];

  filteredList() {
    const tab = this.activeTab();
    if (tab === 'All') return this.projects;
    return this.projects.filter(p => p.category === tab);
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
    setTimeout(() => {
      this.gsapService.staggerUp('.project-portfolio-card', 0.1);
    }, 50);
  }

  constructor() {
    afterNextRender(() => {
      this.gsapService.staggerUp('.project-portfolio-card', 0.12);
    });
  }

  ngOnDestroy() {
    this.gsapService.cleanup();
  }
}

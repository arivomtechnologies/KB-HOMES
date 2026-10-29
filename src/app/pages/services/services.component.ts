import { Component, afterNextRender, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-28 pb-20 bg-dark text-white min-h-screen">
      <!-- Page Hero Header -->
      <section class="container mx-auto px-6 lg:px-12 py-12 border-b border-dark-border">
        <div class="max-w-3xl">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Specialized Capabilities</span>
          <h1 class="font-display text-4xl sm:text-6xl font-bold mt-3 mb-6">
            Master Craftsmanship, <br>
            <span class="italic text-gold font-serif">End-to-End Execution.</span>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            From initial sketch and soil mechanics to structural handover and bespoke interior curation, discover our full suite of luxury construction services.
          </p>
        </div>
      </section>

      <!-- Services List with Alternating GSAP Entrance -->
      <section class="container mx-auto px-6 lg:px-12 py-20">
        <div class="space-y-16">
          @for (svc of fullServices; track svc.title; let i = $index) {
            <div class="service-row grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 lg:p-12 bg-dark-card border border-dark-border hover:border-gold-border/60 hover:shadow-card transition-all duration-300 relative group">
              <!-- Service Visual -->
              <div class="lg:col-span-5 relative overflow-hidden h-72 border border-dark-border" [class.lg:order-last]="i % 2 === 1">
                <img [src]="svc.image" [alt]="svc.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-dark/20"></div>
                <div class="absolute top-4 left-4 bg-dark/85 px-3 py-1 text-gold text-xs font-bold border border-gold-border">
                  0{{ i + 1 }}.
                </div>
              </div>

              <!-- Service Details -->
              <div class="lg:col-span-7 space-y-6">
                <div class="text-gold text-xs tracking-widest uppercase font-semibold">{{ svc.tag }}</div>
                <h2 class="font-display text-2xl sm:text-4xl font-bold text-white">{{ svc.title }}</h2>
                <p class="text-gray-300 text-sm leading-relaxed">{{ svc.description }}</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-dark-border">
                  @for (feat of svc.features; track feat) {
                    <div class="flex items-center gap-2 text-xs text-gray-400">
                      <span class="text-gold">✓</span>
                      <span>{{ feat }}</span>
                    </div>
                  }
                </div>

                <div class="pt-4">
                  <a routerLink="/estimator" class="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark font-bold text-xs tracking-widest uppercase hover:bg-gold-light transition-all">
                    Estimate This Project
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- 5-Step Process Section -->
      <section class="bg-dark-surface border-y border-dark-border py-20">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-xl mx-auto mb-16">
            <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">How We Work</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              The 5-Phase <span class="italic text-gold font-serif">Journey</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            @for (step of steps; track step.num) {
              <div class="process-step p-6 bg-dark border border-dark-border relative hover:border-gold-border/60 hover:-translate-y-1 transition-all duration-300">
                <div class="font-display text-3xl font-bold text-gold mb-2">{{ step.num }}</div>
                <h3 class="font-display font-bold text-sm text-white mb-2">{{ step.title }}</h3>
                <p class="text-[11px] text-gray-400 leading-relaxed">{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent implements OnDestroy {
  private gsapService = inject(GsapService);

  fullServices = [
    {
      title: 'Turnkey Civil Construction',
      tag: 'MASTER RESIDENTIAL ENGINEERING',
      description: 'Complete civil execution with structural engineers on site daily. From deep pile foundations and RCC beam framing to multi-coat chemical waterproofing.',
      image: 'images/residential-1.jpg',
      features: ['Fe550 Grade Branded Steel', 'Certified Ready-Mix Concrete', 'Soil bearing capacity analysis', 'Anti-termite treatment']
    },
    {
      title: 'Architectural & 3D BIM Modeling',
      tag: 'CREATIVE BLUEPRINT EXCELLENCE',
      description: 'Transforming land into architectural statements. We produce high-precision CAD floor plans, dynamic sun-path analysis, and photorealistic 3D external and dusk elevation renderings.',
      image: 'images/residential-2.jpg',
      features: ['Photorealistic 3D elevations', 'Vastu-aligned space layouts', 'Structural load calculation', 'Natural cross-ventilation maps']
    },
    {
      title: 'Luxury Bespoke Interiors',
      tag: 'FINISHING & MATERIAL MASTERY',
      description: 'Curating spaces of quiet luxury. We install Italian Calacatta and Statuario marble, custom teak millwork, concealed shadow-line baseboards, and smart dimmable LED coves.',
      image: 'images/renovation-1.jpg',
      features: ['Italian bookmatched marble', 'Designer false ceilings', 'Custom modular kitchen units', 'Treated teak wood entries']
    },
    {
      title: 'Commercial Landmark Building',
      tag: 'CORPORATE & RETAIL CENTERS',
      description: 'Building modern corporate headquarters, retail hubs, and premium multi-unit residential communities with high-performance glass curtain facades and energy efficiency.',
      image: 'images/commercial-1.jpg',
      features: ['High-speed lift shaft engineering', 'Fire safety compliance', 'HVAC and VRF integration', 'Solar infrastructure ready']
    }
  ];

  steps = [
    { num: '01', title: 'Consultation', desc: 'Site visit, soil inspection, and client design preferences.' },
    { num: '02', title: '3D Architecture', desc: 'Detailed 2D floor plans & 3D elevation walkthroughs.' },
    { num: '03', title: 'Fixed Contract', desc: 'Clear timeline, branded specs, and zero hidden costs.' },
    { num: '04', title: 'Execution', desc: 'Daily site milestones & rigorous structural testing.' },
    { num: '05', title: 'Handover', desc: 'Pristine handover with 10-year structural warranty.' }
  ];

  constructor() {
    afterNextRender(() => {
      this.gsapService.staggerUp('.service-row', 0.2);
      this.gsapService.staggerUp('.process-step', 0.12);
    });
  }

  ngOnDestroy() {
    this.gsapService.cleanup();
  }
}

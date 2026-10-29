import { Component, ElementRef, viewChild, afterNextRender, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-28 pb-20 bg-dark text-white min-h-screen">
      <!-- Page Hero Header -->
      <section class="container mx-auto px-6 lg:px-12 py-12 border-b border-dark-border">
        <div class="max-w-3xl">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Our Heritage & Leadership</span>
          <h1 class="font-display text-4xl sm:text-6xl font-bold mt-3 mb-6">
            Architecting Legacies <br>
            <span class="italic text-gold font-serif">With Mr. Baskar.</span>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Founded and spearheaded by <strong class="text-white">Mr. Baskar</strong>, KB HOMES has spent more than two decades shaping distinguished residential landmarks, bespoke family villas, and contemporary commercial spaces across Chennai and Tamil Nadu from our Puzhuthivakkam headquarters.
          </p>
        </div>
      </section>

      <!-- Vision & Leadership: GSAP Left & Right Reveal -->
      <section class="container mx-auto px-6 lg:px-12 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div #aboutVisual class="lg:col-span-6 relative">
            <div class="border border-dark-border overflow-hidden">
              <img src="images/studio-team.jpg" alt="Architectural design team led by Mr. Baskar" class="w-full h-[480px] object-cover" />
            </div>
            <div class="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold pointer-events-none"></div>
            <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold pointer-events-none"></div>
            
            <div class="absolute -bottom-6 left-8 bg-dark-card border border-gold-border px-6 py-4 shadow-xl">
              <div class="font-display text-2xl font-bold text-gold">Mr. Baskar</div>
              <div class="text-[10px] tracking-widest uppercase text-gray-400">Founder & Chief Construction Lead</div>
            </div>
          </div>

          <div #aboutStory class="lg:col-span-6 space-y-6">
            <div class="text-gold text-xs tracking-widest uppercase font-semibold">The KB HOMES Philosophy</div>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Uncompromising Quality in Every Cubic Foot.
            </h2>
            <p class="text-gray-400 text-sm leading-relaxed">
              Under the personal direction of Mr. Baskar, every home we construct is built on three pillars: architectural harmony, advanced structural integrity, and absolute financial transparency. We reject shortcuts, inferior steel, and ambiguous timelines.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed">
              Headquartered at <strong class="text-gray-300">No 12/15 Puzhuthivakkam Main Road, Chennai</strong>, our team manages the entire lifecycle: soil mechanics testing, vastu-aligned CAD drafting, 3D elevation modeling, DTCP/CMDA approvals, and turnkey civil execution.
            </p>

            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-dark-border">
              <div>
                <div class="font-display text-2xl font-bold text-gold">Fe550</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">High-Grade TMT Steel</div>
              </div>
              <div>
                <div class="font-display text-2xl font-bold text-gold">M25 / M30</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">RMC Structural Concrete</div>
              </div>
              <div>
                <div class="font-display text-2xl font-bold text-gold">10 Years</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Structural Warranty</div>
              </div>
              <div>
                <div class="font-display text-2xl font-bold text-gold">100%</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Contract Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Grid -->
      <section class="bg-dark-surface border-y border-dark-border py-20">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-xl mx-auto mb-16">
            <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Our Core Values</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              The Standard of <span class="italic text-gold font-serif">Excellence</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="value-card p-8 bg-dark-card border border-dark-border hover:border-gold-border hover:-translate-y-1 transition-all duration-300">
              <div class="text-gold text-2xl mb-4 font-display font-bold">01.</div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Absolute Transparency</h3>
              <p class="text-xs text-gray-400 leading-relaxed">
                Detailed itemized bills of quantity, branded material guarantees, and daily photographic milestone reports delivered to your WhatsApp.
              </p>
            </div>
            <div class="value-card p-8 bg-dark-card border border-dark-border hover:border-gold-border hover:-translate-y-1 transition-all duration-300">
              <div class="text-gold text-2xl mb-4 font-display font-bold">02.</div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Architectural Distinction</h3>
              <p class="text-xs text-gray-400 leading-relaxed">
                Clean cantilever lines, floor-to-ceiling glass, and warm organic textures that age gracefully over generations.
              </p>
            </div>
            <div class="value-card p-8 bg-dark-card border border-dark-border hover:border-gold-border hover:-translate-y-1 transition-all duration-300">
              <div class="text-gold text-2xl mb-4 font-display font-bold">03.</div>
              <h3 class="font-display text-xl font-bold text-white mb-2">Zero-Tolerance Safety</h3>
              <p class="text-xs text-gray-400 leading-relaxed">
                Rigorous soil mechanics testing, seismic-resistant foundation footings, and multi-layer chemical waterproofing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA & Developer Attribution -->
      <section class="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h2 class="font-display text-3xl font-bold text-white mb-4">Let's Discuss Your Architectural Project with Mr. Baskar</h2>
        <p class="text-gray-400 text-sm max-w-md mx-auto mb-8">Meet at our Puzhuthivakkam office or call directly at +91 73974 13423.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a routerLink="/contact" class="px-8 py-3.5 bg-gold text-dark font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold transition-all">
            Schedule Site Review
          </a>
          <a href="tel:+917397413423" class="px-8 py-3.5 border border-gold-border text-white text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
            Call +91 73974 13423
          </a>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent implements OnDestroy {
  private gsapService = inject(GsapService);
  aboutVisual = viewChild<ElementRef>('aboutVisual');
  aboutStory = viewChild<ElementRef>('aboutStory');

  constructor() {
    afterNextRender(() => {
      if (this.aboutVisual()) {
        this.gsapService.slideFromLeft(this.aboutVisual()!.nativeElement, 0);
      }
      if (this.aboutStory()) {
        this.gsapService.slideFromRight(this.aboutStory()!.nativeElement, 0.15);
      }
      this.gsapService.staggerUp('.value-card', 0.15);
    });
  }

  ngOnDestroy() {
    this.gsapService.cleanup();
  }
}

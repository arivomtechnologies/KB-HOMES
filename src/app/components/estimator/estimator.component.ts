import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface TierOption {
  id: string;
  name: string;
  ratePerSqFt: number;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-cost-estimator',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="bg-dark-card border border-dark-border p-6 sm:p-10 rounded-sm shadow-card relative overflow-hidden">
      <!-- Decorative gold corner accent -->
      <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold pointer-events-none"></div>

      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Transparency by Design</span>
        <h2 class="font-display text-2xl sm:text-4xl font-bold text-white mt-2 mb-3">
          Instant Project <span class="italic text-gold font-serif">Cost Estimator</span>
        </h2>
        <p class="text-gray-400 text-xs sm:text-sm">
          Plan your custom residential or commercial project with real-time budget forecasting based on actual current construction standards.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Controls Column -->
        <div class="lg:col-span-7 space-y-6">
          <!-- 1. Area Slider & Input -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs uppercase tracking-widest text-gray-300 font-semibold" for="builtUpArea">
                Built-Up Area (Sq. Ft.)
              </label>
              <div class="flex items-center gap-2">
                <input 
                  type="number" 
                  [(ngModel)]="builtUpArea" 
                  min="500" 
                  max="15000" 
                  step="100"
                  id="builtUpArea"
                  class="w-24 bg-dark border border-gold-border px-2.5 py-1 text-gold font-display font-bold text-right text-sm focus:outline-none focus:border-gold" />
                <span class="text-xs text-gray-400">sq.ft</span>
              </div>
            </div>
            <input 
              type="range" 
              [(ngModel)]="builtUpArea" 
              min="500" 
              max="10000" 
              step="50"
              class="w-full accent-[#C9A84C] cursor-pointer" />
            <div class="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>500 sq.ft</span>
              <span>5,000 sq.ft</span>
              <span>10,000+ sq.ft</span>
            </div>
          </div>

          <!-- 2. Quality Tier Selector -->
          <div>
            <label class="text-xs uppercase tracking-widest text-gray-300 font-semibold block mb-3">
              Finishing & Material Specification Tier
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              @for (tier of tiers; track tier.id) {
                <div 
                  (click)="selectedTierId.set(tier.id)"
                  [class.border-gold]="selectedTierId() === tier.id"
                  [class.bg-dark-surface]="selectedTierId() === tier.id"
                  [class.border-dark-border]="selectedTierId() !== tier.id"
                  class="border p-4 cursor-pointer hover:border-gold-border transition-all duration-200 relative group">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-display font-bold text-sm text-white">{{ tier.name }}</span>
                    @if (selectedTierId() === tier.id) {
                      <span class="w-2 h-2 rounded-full bg-gold"></span>
                    }
                  </div>
                  <div class="text-gold font-bold text-xs mb-1">₹{{ tier.ratePerSqFt }} / sq.ft</div>
                  <p class="text-[11px] text-gray-400 leading-tight">{{ tier.description }}</p>
                </div>
              }
            </div>
          </div>

          <!-- 3. Number of Floors -->
          <div>
            <label class="text-xs uppercase tracking-widest text-gray-300 font-semibold block mb-3">
              Floor Plan Configuration
            </label>
            <div class="grid grid-cols-3 gap-3">
              @for (floor of floorOptions; track floor.multiplier) {
                <button 
                  type="button"
                  (click)="selectedFloors.set(floor.multiplier)"
                  [class.bg-gold]="selectedFloors() === floor.multiplier"
                  [class.text-dark]="selectedFloors() === floor.multiplier"
                  [class.border-gold]="selectedFloors() === floor.multiplier"
                  [class.text-gray-300]="selectedFloors() !== floor.multiplier"
                  [class.border-dark-border]="selectedFloors() !== floor.multiplier"
                  class="border py-2.5 px-3 text-xs tracking-wider font-semibold uppercase hover:border-gold-border transition-all">
                  {{ floor.label }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Real-time Cost Output Card -->
        <div class="lg:col-span-5 bg-dark border border-gold-border/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
          <div>
            <div class="text-[11px] tracking-[0.2em] text-gold uppercase font-semibold mb-1">Estimated Budget</div>
            <div class="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              ₹ {{ formattedTotalCost() }}
            </div>
            <div class="text-xs text-gray-400 mb-6">
              Approx. Total Cost ({{ builtUpArea() * selectedFloors() }} sq.ft total built area)
            </div>

            <div class="border-t border-dark-border pt-4 space-y-2.5 text-xs">
              <div class="flex justify-between text-gray-300">
                <span>Civil & Structural Work (~50%)</span>
                <span class="font-semibold text-white">₹ {{ formatIndianNumber(breakdown().civil) }}</span>
              </div>
              <div class="flex justify-between text-gray-300">
                <span>Electrical, Plumbing & HVAC (~15%)</span>
                <span class="font-semibold text-white">₹ {{ formatIndianNumber(breakdown().services) }}</span>
              </div>
              <div class="flex justify-between text-gray-300">
                <span>Flooring, Granite & Tiles (~18%)</span>
                <span class="font-semibold text-white">₹ {{ formatIndianNumber(breakdown().finishes) }}</span>
              </div>
              <div class="flex justify-between text-gray-300">
                <span>Woodwork, Doors, Windows & Paint (~17%)</span>
                <span class="font-semibold text-white">₹ {{ formatIndianNumber(breakdown().carpentry) }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-dark-border">
            <a 
              routerLink="/contact"
              [queryParams]="{ area: builtUpArea() * selectedFloors(), tier: selectedTier().name, estimate: formattedTotalCost() }"
              class="w-full text-center block py-3.5 bg-gold text-dark font-sans font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold transition-all duration-300">
              Lock in Consultation
            </a>
            <p class="text-[10px] text-gray-400 text-center mt-3">
              *Estimates exclude statutory approval fees & architectural bespoke soil-test adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CostEstimatorComponent {
  builtUpArea = signal<number>(2400);
  selectedTierId = signal<string>('luxury');
  selectedFloors = signal<number>(1);

  tiers: TierOption[] = [
    {
      id: 'standard',
      name: 'Executive',
      ratePerSqFt: 2100,
      description: 'Solid civil structure with branded fittings & quality ceramic finishes.',
      features: ['Fe550 TMT Steel', 'Vitrified tiles (2x2)', 'Anchor electricals']
    },
    {
      id: 'luxury',
      name: 'Luxury Villa',
      ratePerSqFt: 2650,
      description: 'Architectural finishes, Italian marble accents, Teakwood main entry.',
      features: ['Teak main door', 'Granite/Italian tile', 'Schneider/Legrand switches']
    },
    {
      id: 'ultra',
      name: 'Bespoke Royal',
      ratePerSqFt: 3450,
      description: 'Masterpiece elevation, double-height ceilings, smart automation & VRF.',
      features: ['Smart Home ready', 'Imported Marble', 'Double-glazed soundproof glass']
    }
  ];

  floorOptions = [
    { label: 'Ground Floor', multiplier: 1 },
    { label: 'G + 1 Floor', multiplier: 2 },
    { label: 'G + 2 Floors', multiplier: 3 },
  ];

  selectedTier = computed(() => {
    return this.tiers.find(t => t.id === this.selectedTierId()) || this.tiers[1];
  });

  totalCost = computed(() => {
    const area = this.builtUpArea();
    const floors = this.selectedFloors();
    const rate = this.selectedTier().ratePerSqFt;
    return area * floors * rate;
  });

  breakdown = computed(() => {
    const total = this.totalCost();
    return {
      civil: Math.round(total * 0.50),
      services: Math.round(total * 0.15),
      finishes: Math.round(total * 0.18),
      carpentry: Math.round(total * 0.17),
    };
  });

  formattedTotalCost = computed(() => {
    return this.formatIndianNumber(this.totalCost());
  });

  formatIndianNumber(x: number): string {
    const s = Math.round(x).toString();
    const lastThree = s.substring(s.length - 3);
    const otherNumbers = s.substring(0, s.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee-ticker',
  standalone: true,
  template: `
    <div class="py-6 bg-dark-card border-y border-dark-border overflow-hidden relative select-none">
      <div class="flex items-center gap-8 whitespace-nowrap animate-marquee">
        @for (item of items; track $index) {
          <div class="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
            <span class="text-gold text-sm">✦</span>
            <span class="hover:text-gold transition-colors">{{ item }}</span>
          </div>
        }
        <!-- Duplicate loop for seamless infinite scroll -->
        @for (item of items; track $index) {
          <div class="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
            <span class="text-gold text-sm">✦</span>
            <span class="hover:text-gold transition-colors">{{ item }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 28s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `]
})
export class MarqueeTickerComponent {
  items = [
    'TATA TISCON Fe550D High-Ductility Steel',
    'ULTRATECH WEATHER PLUS Water-Repellent Cement',
    'SAINT-GOBAIN Triple-Glazed Acoustic Glass',
    'KOHLER & ARTIZE Luxury Sanitaryware',
    'SCHNEIDER SMART HOME AUTOMATION',
    'LEGRAND ARTEOR German-Spec Switches',
    'ITALIAN CALACATTA & STATUARIO MARBLE',
    'ASIAN PAINTS ROYALE Luxury Emulsion',
    'BURMA TEAK WOOD Architectural Entrances'
  ];
}

import { Component } from '@angular/core';
import { CostEstimatorComponent } from '../../components/estimator/estimator.component';

@Component({
  selector: 'app-estimator-page',
  standalone: true,
  imports: [CostEstimatorComponent],
  template: `
    <div class="pt-28 pb-20 bg-dark text-white min-h-screen">
      <!-- Page Hero Header -->
      <section class="container mx-auto px-6 lg:px-12 py-12 border-b border-dark-border">
        <div class="max-w-3xl">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Budget Forecasting</span>
          <h1 class="font-display text-4xl sm:text-6xl font-bold mt-3 mb-6">
            Construction <span class="italic text-gold font-serif">Cost Estimator.</span>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Configure your project parameters below to get an instant, realistic budget estimation based on current material rates and luxury finishing standards in Tamil Nadu.
          </p>
        </div>
      </section>

      <!-- Main Estimator Tool -->
      <section class="container mx-auto px-6 lg:px-12 py-16">
        <app-cost-estimator />
      </section>

      <!-- Material Specifications Comparison Table -->
      <section class="container mx-auto px-6 lg:px-12 py-12">
        <div class="max-w-4xl mx-auto">
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Material Specifications by Tier
          </h2>

          <div class="overflow-x-auto bg-dark-card border border-dark-border">
            <table class="w-full text-xs text-left">
              <thead class="bg-dark-surface border-b border-dark-border text-gold uppercase tracking-wider">
                <tr>
                  <th class="p-4">Component</th>
                  <th class="p-4">Executive (₹2,100)</th>
                  <th class="p-4">Luxury Villa (₹2,650)</th>
                  <th class="p-4">Bespoke Royal (₹3,450)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-dark-border text-gray-300">
                <tr>
                  <td class="p-4 font-semibold text-white">Structural Steel</td>
                  <td class="p-4">ARS / Suryadev Fe550</td>
                  <td class="p-4 text-gold">Tata Tiscon / JSW Fe550D</td>
                  <td class="p-4 text-gold font-bold">Tata Tiscon Superlinks</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-white">Cement Brand</td>
                  <td class="p-4">Dalmia / Coromandel 53 Gr</td>
                  <td class="p-4">UltraTech Super / ACC</td>
                  <td class="p-4 text-gold">UltraTech Weather Plus</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-white">Main Entrance Door</td>
                  <td class="p-4">First Quality Padauk / Teak</td>
                  <td class="p-4 text-gold">Designer Burma Teak (8ft)</td>
                  <td class="p-4 text-gold font-bold">Motorized Smart Pivot Teak</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-white">Flooring & Finishes</td>
                  <td class="p-4">Vitrified Tiles (₹75/sq.ft)</td>
                  <td class="p-4">Granite & Large GVT (₹150/sq.ft)</td>
                  <td class="p-4 text-gold font-bold">Italian Calacatta / Statuario</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-white">Sanitary & CP Fittings</td>
                  <td class="p-4">Parryware / Hindware</td>
                  <td class="p-4">Kohler / Jaquar Artize</td>
                  <td class="p-4 text-gold font-bold">Grohe / Toto Sensor-Ready</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-white">Electrical Wiring</td>
                  <td class="p-4">Finolex / Anchor Roma</td>
                  <td class="p-4">Havells / Legrand Arteor</td>
                  <td class="p-4 text-gold font-bold">Schneider Smart Automation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="container mx-auto px-6 lg:px-12 py-16 border-t border-dark-border">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div class="space-y-6 text-xs sm:text-sm">
            <div class="p-6 bg-dark-card border border-dark-border">
              <h3 class="font-bold text-gold text-sm sm:text-base mb-2">Are there any hidden costs after signing?</h3>
              <p class="text-gray-400 leading-relaxed">No. We provide an exact Bill of Quantities (BOQ). The quoted price remains fixed unless you choose to make design alterations or upgrade materials during construction.</p>
            </div>
            <div class="p-6 bg-dark-card border border-dark-border">
              <h3 class="font-bold text-gold text-sm sm:text-base mb-2">How are milestone payments structured?</h3>
              <p class="text-gray-400 leading-relaxed">Payments are split across 8 to 10 verified physical milestones (e.g. Foundation, Plinth, First Slab, Brickwork, Plastering, Flooring, Handover). You pay only upon completion and personal inspection of each stage.</p>
            </div>
            <div class="p-6 bg-dark-card border border-dark-border">
              <h3 class="font-bold text-gold text-sm sm:text-base mb-2">How long does a 3,000 sq.ft villa take to complete?</h3>
              <p class="text-gray-400 leading-relaxed">Typically between 8 and 11 months from foundation excavation to final deep cleaning, depending on floor count and architectural complexity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class EstimatorPageComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-dark-surface border-t border-dark-border text-gray-400 font-sans relative overflow-hidden">
      <!-- Upper CTA Banner -->
      <div class="border-b border-dark-border py-16 lg:py-20 bg-gradient-to-b from-dark to-dark-surface relative">
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Start The Conversation</span>
          <h2 class="font-display text-3xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Ready to Build Your <span class="italic text-gold font-serif">Dream Home?</span>
          </h2>
          <p class="max-w-xl mx-auto text-gray-400 text-sm sm:text-base mb-8">
            Connect directly with Mr. Baskar and our lead architectural engineers to discuss custom floor plans, 3D elevation designs, and complete turnkey construction.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/contact" class="px-8 py-3.5 bg-gold text-dark font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300">
              Schedule Consultation
            </a>
            <a href="tel:+917397413423" class="px-8 py-3.5 border border-gold-border text-white text-xs tracking-widest uppercase hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <span>📞</span> Call +91 73974 13423
            </a>
          </div>
        </div>
      </div>

      <!-- Main Footer Directory -->
      <div class="container mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Col 1: Brand & Leadership -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 border border-gold flex items-center justify-center bg-dark">
              <span class="text-gold font-display font-bold text-sm">KB</span>
            </div>
            <span class="font-display text-lg font-bold tracking-widest text-white">KB HOMES</span>
          </div>
          <p class="text-xs leading-relaxed text-gray-400 mb-4">
            Founded and directed by <strong class="text-white">Mr. Baskar</strong>, KB HOMES specializes in luxury residential construction, contemporary architectural planning, and custom bespoke interiors.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-dark border border-gold-border/30 text-gold text-[10px] tracking-widest uppercase font-semibold">
            <span>◈</span> Chennai · Tamil Nadu
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h3 class="text-white text-xs tracking-[0.25em] uppercase font-bold mb-6 flex items-center gap-2">
            <span class="w-3 h-[1px] bg-gold"></span> Navigation
          </h3>
          <ul class="space-y-3 text-xs tracking-wider">
            <li><a routerLink="/" class="hover:text-gold transition-colors">Home Overview</a></li>
            <li><a routerLink="/about" class="hover:text-gold transition-colors">About Mr. Baskar & Team</a></li>
            <li><a routerLink="/services" class="hover:text-gold transition-colors">Architectural Services</a></li>
            <li><a routerLink="/projects" class="hover:text-gold transition-colors">Featured Portfolio</a></li>
            <li><a routerLink="/estimator" class="text-gold-light hover:text-gold transition-colors">Interactive Cost Estimator</a></li>
            <li><a routerLink="/contact" class="hover:text-gold transition-colors">Contact Headquarters</a></li>
          </ul>
        </div>

        <!-- Col 3: Expertise -->
        <div>
          <h3 class="text-white text-xs tracking-[0.25em] uppercase font-bold mb-6 flex items-center gap-2">
            <span class="w-3 h-[1px] bg-gold"></span> Capabilities
          </h3>
          <ul class="space-y-3 text-xs tracking-wider">
            <li><span class="text-gray-300">Custom Luxury Villas</span></li>
            <li><span class="text-gray-300">Architectural 3D Elevation</span></li>
            <li><span class="text-gray-300">Turnkey Civil Construction</span></li>
            <li><span class="text-gray-300">Premium Interior Styling</span></li>
            <li><span class="text-gray-300">Structural Renovation</span></li>
            <li><span class="text-gray-300">Sustainable Green Homes</span></li>
          </ul>
        </div>

        <!-- Col 4: Contact Coordinates -->
        <div>
          <h3 class="text-white text-xs tracking-[0.25em] uppercase font-bold mb-6 flex items-center gap-2">
            <span class="w-3 h-[1px] bg-gold"></span> Contact Details
          </h3>
          <ul class="space-y-4 text-xs">
            <li class="flex items-start gap-3">
              <span class="text-gold text-base">📍</span>
              <span class="leading-relaxed">
                No 12/15 Puzhuthivakkam Main Road, 91, Puzhuthivakkam, Chennai, Tamil Nadu 600091
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-gold text-base">👤</span>
              <span>Owner: <strong class="text-white">Baskar</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-gold text-base">📞</span>
              <a href="tel:+917397413423" class="hover:text-gold transition-colors font-semibold text-white">+91 73974 13423</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-gold text-base">✉️</span>
              <a href="mailto:arivomtechnologies@gmail.com" class="hover:text-gold transition-colors">arivomtechnologies&#64;gmail.com</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-gold text-base">🕒</span>
              <span>Mon - Sat: 9:00 AM - 7:30 PM IST</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright & Developer Credit Bar -->
      <div class="border-t border-dark-border py-6 bg-dark">
        <div class="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 <strong class="text-white">KB HOMES</strong>. All rights reserved.
          </div>
          
          <!-- Developer Credit -->
          <div class="flex items-center gap-1.5 text-xs text-gray-300">
            <span>Developed by</span>
            <a 
              href="https://arivomtechnologies.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gold font-semibold hover:text-gold-light hover:underline tracking-wide transition-all">
              Arivom Technologies
            </a>
          </div>

          <div class="flex items-center gap-6 text-[11px]">
            <a href="#" class="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-gold transition-colors">RERA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

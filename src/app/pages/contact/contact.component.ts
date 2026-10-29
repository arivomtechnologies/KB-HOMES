import { Component, signal, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="pt-28 pb-20 bg-dark text-white min-h-screen">
      <!-- Page Hero Header -->
      <section class="container mx-auto px-6 lg:px-12 py-12 border-b border-dark-border">
        <div class="max-w-3xl">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Direct Communication</span>
          <h1 class="font-display text-4xl sm:text-6xl font-bold mt-3 mb-6">
            Connect with <br>
            <span class="italic text-gold font-serif">KB HOMES & Mr. Baskar.</span>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Visit our Puzhuthivakkam office or connect directly with founder Mr. Baskar to discuss your residential or commercial project in Chennai and across Tamil Nadu.
          </p>
        </div>
      </section>

      <!-- Main Content Grid -->
      <section class="container mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Left: Contact Form -->
          <div class="lg:col-span-7 bg-dark-card border border-dark-border p-8 sm:p-12 relative shadow-card">
            <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold pointer-events-none"></div>

            <h2 class="font-display text-2xl font-bold text-white mb-2">Send an Inquiry</h2>
            <p class="text-xs text-gray-400 mb-8">Direct inquiry to our engineering desk. We respond promptly within business hours.</p>

            @if (submitted()) {
              <div class="p-6 bg-gold/10 border border-gold text-gold mb-8 animate-fadeIn">
                <div class="font-bold text-sm mb-1">✓ Thank you for reaching out!</div>
                <div class="text-xs text-gray-300">Your inquiry has been delivered directly to Mr. Baskar and our team at <strong class="text-white">arivomtechnologies&#64;gmail.com</strong>. We will call you back at <strong class="text-gold">{{ form.phone }}</strong> shortly.</div>
              </div>
            }

            <form (ngSubmit)="handleSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="fullName">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    [(ngModel)]="form.name" 
                    name="name" 
                    id="fullName"
                    required
                    placeholder="e.g. Anandha Kumar"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="phone">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    [(ngModel)]="form.phone" 
                    name="phone" 
                    id="phone"
                    required
                    placeholder="+91 73974 00000"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="email">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    [(ngModel)]="form.email" 
                    name="email" 
                    id="email"
                    required
                    placeholder="name&#64;example.com"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="projectType">
                    Project Type
                  </label>
                  <select 
                    [(ngModel)]="form.projectType" 
                    name="projectType" 
                    id="projectType"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors">
                    <option value="Luxury Villa">Luxury Residential Villa</option>
                    <option value="Independent House">Independent Residence</option>
                    <option value="Commercial Complex">Commercial Landmark</option>
                    <option value="Interior Architecture">Luxury Interior Curation</option>
                    <option value="Renovation">Heritage Renovation & Extension</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="plotLocation">
                    Plot / Site Location
                  </label>
                  <input 
                    type="text" 
                    [(ngModel)]="form.location" 
                    name="location" 
                    id="plotLocation"
                    placeholder="e.g. Puzhuthivakkam, Madipakkam, ECR, Chennai"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="approxArea">
                    Approximate Built Area
                  </label>
                  <input 
                    type="text" 
                    [(ngModel)]="form.area" 
                    name="area" 
                    id="approxArea"
                    placeholder="e.g. 2,400 sq.ft"
                    class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2" for="projectDetails">
                  Project Details / Specific Preferences
                </label>
                <textarea 
                  [(ngModel)]="form.message" 
                  name="message" 
                  rows="4"
                  id="projectDetails"
                  placeholder="Share details regarding your architectural requirements, floor plan ideas, or timeline..."
                  class="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full py-4 bg-gold text-dark font-sans font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-gold transition-all duration-300">
                Submit Consultation Request
              </button>
            </form>
          </div>

          <!-- Right: Coordinates & Direct Channels -->
          <div class="lg:col-span-5 space-y-8">
            <div class="p-8 bg-dark-card border border-dark-border shadow-card relative">
              <h3 class="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-3 h-[1px] bg-gold"></span> KB HOMES Headquarters
              </h3>
              <ul class="space-y-6 text-xs text-gray-300">
                <li class="flex items-start gap-4">
                  <span class="text-gold text-xl">📍</span>
                  <div>
                    <div class="font-bold text-white mb-1">Corporate Studio & Office</div>
                    <div class="text-gray-300 leading-relaxed font-medium">
                      No 12/15 Puzhuthivakkam Main Road,<br>
                      91, Puzhuthivakkam, Chennai,<br>
                      Tamil Nadu 600091, India
                    </div>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="text-gold text-xl">👤</span>
                  <div>
                    <div class="font-bold text-white mb-1">Proprietor / Managing Director</div>
                    <div class="text-gold font-display font-bold text-base">Mr. Baskar</div>
                    <div class="text-gray-400 text-[11px]">Master Builder & Construction Lead</div>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="text-gold text-xl">📞</span>
                  <div>
                    <div class="font-bold text-white mb-1">Direct Telephone / Call</div>
                    <a href="tel:+917397413423" class="text-white hover:text-gold text-sm font-bold tracking-wider transition-colors">
                      +91 73974 13423
                    </a>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="text-gold text-xl">✉️</span>
                  <div>
                    <div class="font-bold text-white mb-1">Official Email Desk</div>
                    <a href="mailto:arivomtechnologies@gmail.com" class="text-gray-300 hover:text-gold transition-colors font-medium">
                      arivomtechnologies&#64;gmail.com
                    </a>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="text-gold text-xl">🕒</span>
                  <div>
                    <div class="font-bold text-white mb-1">Studio Operating Hours</div>
                    <div class="text-gray-400">Monday – Saturday: 9:00 AM – 7:30 PM IST</div>
                    <div class="text-gray-400">Sunday: By Advance Appointment</div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Fast-Track WhatsApp Channel -->
            <div class="p-8 bg-dark-surface border border-gold-border/40 relative group overflow-hidden">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-lg">
                  💬
                </div>
                <div>
                  <h4 class="font-display font-bold text-white text-base">Direct WhatsApp Line</h4>
                  <p class="text-[11px] text-gray-400">Instant chat with Mr. Baskar and technical supervision.</p>
                </div>
              </div>
              <a 
                href="https://wa.me/917397413423?text=Hello%20KB%20HOMES,%20I%20would%20like%20to%20discuss%20a%20construction%20project%20with%20Mr.%20Baskar." 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-center py-3 border border-gold text-gold hover:bg-gold hover:text-dark font-bold text-xs tracking-widest uppercase transition-all duration-300">
                Chat on WhatsApp (+91 73974 13423)
              </a>
            </div>

            <!-- Digital Partner Credit -->
            <div class="p-4 bg-dark border border-dark-border text-center text-xs text-gray-400">
              Technology & Platform Developed by 
              <a href="https://arivomtechnologies.com/" target="_blank" rel="noopener noreferrer" class="text-gold font-semibold hover:underline">
                Arivom Technologies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute);

  submitted = signal(false);

  form = {
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Villa',
    location: '',
    area: '',
    message: ''
  };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['area']) {
        this.form.area = `${params['area']} sq.ft`;
      }
      if (params['tier']) {
        this.form.message = `Inquiry regarding the ${params['tier']} package (Estimated budget: ₹${params['estimate'] || ''}).`;
      }
    });
  }

  handleSubmit() {
    this.submitted.set(true);
  }
}

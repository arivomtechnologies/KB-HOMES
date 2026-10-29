import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  template: `
    <aside class="fixed bottom-6 right-6 z-40 group" aria-label="Quick WhatsApp Consultation">
      <!-- Tooltip -->
      <div class="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-dark-card border border-gold-border px-3.5 py-1.5 text-xs text-gold whitespace-nowrap shadow-card opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none tracking-wider">
        Chat with Mr. Baskar (+91 73974 13423)
      </div>

      <!-- Button -->
      <a 
        href="https://wa.me/917397413423?text=Hello%20KB%20HOMES,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project%20in%20Chennai."
        target="_blank" 
        rel="noopener noreferrer"
        class="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 hover:shadow-gold transition-all duration-300"
        aria-label="Chat on WhatsApp with KB HOMES">
        
        <!-- Subtle pulsing gold ring -->
        <span class="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping pointer-events-none"></span>

        <!-- WhatsApp Icon SVG -->
        <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.494 1.348 5.024L2 22l5.093-1.336a10.02 10.02 0 0 0 4.938 1.288h.005c5.535 0 10.03-4.496 10.03-10.032C22.066 6.495 17.568 2 12.031 2zm5.86 14.18c-.244.686-1.42 1.31-1.956 1.393-.509.078-1.173.11-1.895-.12a14.64 14.64 0 0 1-5.183-3.212 11.23 11.23 0 0 1-2.457-3.69c-.29-.636-.03-1.488.35-1.93.308-.358.68-.45.91-.45.228 0 .456.002.656.012.213.01.498-.08.777.592.29.698.986 2.408 1.072 2.585.087.177.146.384.029.617-.116.234-.175.38-.348.583-.174.204-.366.455-.522.61-.174.175-.356.365-.153.714.203.348.905 1.49 1.943 2.414 1.335 1.189 2.46 1.558 2.808 1.733.348.174.552.146.756-.087.204-.233.872-1.018 1.104-1.367.233-.349.465-.29.784-.174.32.116 2.033.96 2.382 1.134.349.174.58.262.668.407.087.146.087.844-.157 1.53z"/>
        </svg>
      </a>
    </aside>
  `
})
export class WhatsappFabComponent {}

import { Component, ElementRef, viewChild, afterNextRender, OnDestroy, inject } from '@angular/core';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    <div class="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <!-- Outer trailing ring -->
      <div #cursorRing class="fixed -top-4 -left-4 w-8 h-8 rounded-full border border-gold/60 pointer-events-none transition-transform duration-75 ease-out"></div>
      <!-- Center dot -->
      <div #cursorDot class="fixed -top-1 -left-1 w-2 h-2 rounded-full bg-gold pointer-events-none"></div>
    </div>
  `
})
export class CustomCursorComponent implements OnDestroy {
  private gsapService = inject(GsapService);

  cursorRing = viewChild<ElementRef>('cursorRing');
  cursorDot = viewChild<ElementRef>('cursorDot');

  private mouseMoveHandler: any = null;

  constructor() {
    afterNextRender(() => {
      this.initCursor();
    });
  }

  private initCursor() {
    if (typeof window === 'undefined') return;
    const gsap = this.gsapService.gsap;
    if (!gsap || !this.cursorRing() || !this.cursorDot()) return;

    const ring = this.cursorRing()!.nativeElement;
    const dot = this.cursorDot()!.nativeElement;

    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' });

    this.mouseMoveHandler = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX - 12);
      setRingY(e.clientY - 12);
    };

    window.addEventListener('mousemove', this.mouseMoveHandler, { passive: true });

    // Expand ring on interactive elements
    document.addEventListener('mouseover', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest('a') || target.closest('button') || target.closest('.service-card') || target.closest('.project-card') || target.tagName === 'INPUT')) {
        gsap.to(ring, { scale: 1.8, borderColor: '#D4B96A', backgroundColor: 'rgba(201, 168, 76, 0.1)', duration: 0.25 });
        gsap.to(dot, { scale: 0.5, duration: 0.25 });
      }
    });

    document.addEventListener('mouseout', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest('a') || target.closest('button') || target.closest('.service-card') || target.closest('.project-card') || target.tagName === 'INPUT')) {
        gsap.to(ring, { scale: 1, borderColor: 'rgba(201, 168, 76, 0.6)', backgroundColor: 'transparent', duration: 0.25 });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    });
  }

  ngOnDestroy() {
    if (this.mouseMoveHandler && typeof window !== 'undefined') {
      window.removeEventListener('mousemove', this.mouseMoveHandler);
    }
  }
}

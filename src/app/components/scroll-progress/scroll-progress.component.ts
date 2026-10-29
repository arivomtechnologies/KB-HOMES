import { Component, ElementRef, viewChild, afterNextRender, OnDestroy, inject } from '@angular/core';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
      <div #progressBar class="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light w-0 shadow-gold"></div>
    </div>
  `
})
export class ScrollProgressComponent implements OnDestroy {
  private gsapService = inject(GsapService);
  progressBar = viewChild<ElementRef>('progressBar');

  private scrollTriggerInstance: any = null;

  constructor() {
    afterNextRender(() => {
      this.initProgress();
    });
  }

  private initProgress() {
    if (typeof window === 'undefined') return;
    const gsap = this.gsapService.gsap;
    const ScrollTrigger = this.gsapService.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !this.progressBar()) return;

    this.scrollTriggerInstance = gsap.to(this.progressBar()!.nativeElement, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }

  ngOnDestroy() {
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }
}

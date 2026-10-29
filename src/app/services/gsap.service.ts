import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  constructor() {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  get gsap() {
    return gsap;
  }

  get ScrollTrigger() {
    return ScrollTrigger;
  }

  // Slide element in from the left
  slideFromLeft(target: string | Element, delay: number = 0) {
    if (typeof window === 'undefined') return;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    return gsap.fromTo(el,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el as any,
          start: 'top 85%',
          once: true
        }
      }
    );
  }

  // Slide element in from the right
  slideFromRight(target: string | Element, delay: number = 0) {
    if (typeof window === 'undefined') return;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    return gsap.fromTo(el,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el as any,
          start: 'top 85%',
          once: true
        }
      }
    );
  }

  // Stagger reveal for elements using fromTo to prevent any animation lock
  staggerUp(targets: string | Element[], stagger: number = 0.1, delay: number = 0) {
    if (typeof window === 'undefined') return;
    const items = typeof targets === 'string' ? Array.from(document.querySelectorAll(targets)) : targets;
    if (!items || !items.length) return;

    return gsap.fromTo(items,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger,
        delay,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: items[0] as any,
          start: 'top 90%',
          once: true
        }
      }
    );
  }

  // Smooth container-based grid stagger: guarantees ALL cards animate to opacity 1 with no frozen elements
  staggerGrid(containerTrigger: string | Element, targets: string, stagger: number = 0.1) {
    if (typeof window === 'undefined') return;
    const triggerEl = typeof containerTrigger === 'string' ? document.querySelector(containerTrigger) : containerTrigger;
    if (!triggerEl) return;

    const items = document.querySelectorAll(targets);
    if (!items.length) return;

    return gsap.fromTo(items,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: triggerEl as any,
          start: 'top 88%',
          once: true
        }
      }
    );
  }

  // Parallax background element on scroll
  parallax(target: string | Element, yPercent: number = 15) {
    if (typeof window === 'undefined') return;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    return gsap.to(el, {
      scrollTrigger: {
        trigger: el as any,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      yPercent,
      ease: 'none'
    });
  }

  // Animate numerical counters
  animateCounter(element: HTMLElement, endValue: number, suffix: string = '', duration: number = 1.8) {
    if (typeof window === 'undefined' || !element) return;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: element,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: endValue,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = (Number.isInteger(endValue) ? Math.floor(obj.val) : obj.val.toFixed(1)) + suffix;
          }
        });
      }
    });
  }

  cleanup() {
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
}

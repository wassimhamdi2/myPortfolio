import { Injectable, NgZone } from '@angular/core';

export interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  ease?: string;
  start?: string;
}

declare const gsap: any;
declare const ScrollTrigger: any;

@Injectable({ providedIn: 'root' })
export class GsapService {
  private registered = false;

  constructor(private zone: NgZone) {}

  init(): void {
    if (this.registered || typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    this.registered = true;
  }

  /** Cinematic hero entrance — stagger lines up */
  heroEntrance(els: { [key: string]: string | Element | Element[] }): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.to('.gsap-hero-badge', { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
        .to('.gsap-hero-line',  { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, '-=0.5')
        .to('.gsap-hero-sub',   { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .to('.gsap-hero-para',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .to('.gsap-hero-btns',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');
    });
  }

  /** Scroll-triggered fade+slide for any element */
  scrollReveal(selector: string, options: ScrollRevealOptions = {}): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, y: options.y ?? 40 },
          {
            opacity: 1, y: 0,
            duration: options.duration ?? 0.9,
            ease: options.ease ?? 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: options.start ?? 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
  }

  /** Stagger children of a container */
  staggerReveal(container: string, childSelector: string = ':scope > *', delay = 0): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      gsap.utils.toArray(container).forEach((parent: any) => {
        const children = parent.querySelectorAll(childSelector);
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
            },
            delay,
          }
        );
      });
    });
  }

  /** Horizontal slide-in */
  slideIn(selector: string, from: 'left' | 'right' = 'left'): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, x: from === 'left' ? -60 : 60 },
          {
            opacity: 1, x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    });
  }

  /** Scale-in pop effect */
  scaleIn(selector: string): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1, scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    });
  }

  /** Parallax on an element (moves slower than scroll) */
  parallax(selector: string, speed = 0.3): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.to(el, {
          yPercent: -30 * speed,
          ease: 'none',
          scrollTrigger: { trigger: el, scrub: true },
        });
      });
    });
  }

  /** Magnetic button — call on mouseenter/mousemove/mouseleave */
  applyMagnetic(el: HTMLElement, strength = 0.4): void {
    this.zone.runOutsideAngular(() => {
      const rect = el.getBoundingClientRect();
      const onMove = (e: MouseEvent) => {
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.4, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  /** Number count-up animation */
  countUp(selector: string, target: number, duration = 1.5): void {
    this.init();
    this.zone.runOutsideAngular(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          document.querySelectorAll(selector).forEach((el: any) => {
            el.textContent = Math.round(obj.val).toString();
          });
        },
        scrollTrigger: { trigger: selector, start: 'top 85%', once: true },
      });
    });
  }

  refresh(): void {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }
}

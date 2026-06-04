import { Component, OnInit, HostListener, Renderer2, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GsapService } from './services/gsap.service';
import { TranslationService } from './services/translation.service';

declare const gsap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <!-- Cursor glow -->
    <div id="cursor-glow"></div>
    <!-- Scroll progress bar -->
    <div class="scroll-progress-line" #progressBar></div>
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class AppComponent implements OnInit {
  private gsapSvc = inject(GsapService);
  private renderer = inject(Renderer2);
  private i18n = inject(TranslationService);

  constructor() {
    effect(() => {
      this.i18n.lang();
      document.title = this.i18n.get('seo_title');
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', this.i18n.get('seo_desc'));
    });
  }

  ngOnInit(): void {
    this.gsapSvc.init();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const el = document.getElementById('cursor-glow');
    if (el && typeof gsap !== 'undefined') {
      gsap.to(el, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
    }
    // Spotlight cards: track mouse per card
    document.querySelectorAll('.spotlight-card').forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top)  + 'px');
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? (scrolled / total) * 100 : 0;
    const bar = document.querySelector('.scroll-progress-line') as HTMLElement;
    if (bar) bar.style.background = `linear-gradient(to bottom, #a3a6ff ${pct}%, rgba(64,72,93,0.2) ${pct}%)`;
  }
}

import { Component, HostListener, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { GsapService }  from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

interface NavLink { labelKey: string; href: string; }

declare const gsap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  navLinks: NavLink[] = [
    { labelKey: 'nav_home',       href: 'home' },
    { labelKey: 'nav_projects',   href: 'projects' },
    { labelKey: 'nav_education',  href: 'education' },
    { labelKey: 'nav_about',      href: 'about' },
    { labelKey: 'nav_activities', href: 'associative' },
    { labelKey: 'nav_contact',    href: 'contact' },
  ];

  mobileOpen    = signal(false);
  activeSection = signal('home');
  scrolled      = signal(false);

  constructor(
    public themeService: ThemeService,
    public i18n: TranslationService,
    private gsapSvc: GsapService
  ) {}

  ngOnInit(): void {
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('header', { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 });
    }
  }

  toggleMobile(): void { this.mobileOpen.update(v => !v); }
  closeMobile():  void { this.mobileOpen.set(false); }

  scrollTo(id: string): void {
    this.closeMobile();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
    const ids = ['home','projects','education','about','associative','contact'];
    let current = 'home';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    }
    this.activeSection.set(current);
  }
}

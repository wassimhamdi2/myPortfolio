import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapService } from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements AfterViewInit {
  private gsap = inject(GsapService);
  public i18n  = inject(TranslationService);
  year = new Date().getFullYear();

  get copyright(): string {
    return this.i18n.get('footer_copyright').replace('{year}', String(this.year));
  }

  get socials() {
    return [
      { label: this.i18n.get('footer_social_github'), href: 'https://github.com/' },
      { label: this.i18n.get('footer_social_linkedin'), href: 'https://linkedin.com/' },
    ];
  }

  ngAfterViewInit(): void {
    this.gsap.scrollReveal('.footer-cta-text', { y: 40 });
    this.gsap.scaleIn('.footer-cta-btn');
  }
}

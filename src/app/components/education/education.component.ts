import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { GsapService } from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.component.html',
})
export class EducationComponent implements AfterViewInit {
  private gsap = inject(GsapService);
  public i18n  = inject(TranslationService);

  get degrees() {
    return [
      {
        period: 'SEP 2023 – JUN 2025',
        title: this.i18n.get('edu_deg1_title'),
        subtitle: this.i18n.get('edu_deg1_sub'),
        institution: this.i18n.get('edu_deg1_inst'),
      },
      {
        period: 'SEP 2020 – JUN 2023',
        title: this.i18n.get('edu_deg2_title'),
        subtitle: this.i18n.get('edu_deg2_sub'),
        institution: this.i18n.get('edu_deg2_inst'),
      },
    ];
  }

  onSpotlight(e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--mx', e.offsetX + 'px');
    el.style.setProperty('--my', e.offsetY + 'px');
  }

  ngAfterViewInit(): void {
    this.gsap.scrollReveal('.edu-header', { y: 50 });
    this.gsap.slideIn('.edu-degree',  'left');
    this.gsap.slideIn('.edu-right',   'right');
  }
}

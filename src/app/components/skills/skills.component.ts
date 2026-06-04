import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapService } from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit {
  private gsap = inject(GsapService);
  public i18n = inject(TranslationService);

  get skills() {
    return [
      { label: this.i18n.get('about_skill_label_1'), content: this.i18n.get('about_skill_content_1') },
      { label: this.i18n.get('about_skill_label_2'), content: this.i18n.get('about_skill_content_2') },
      { label: this.i18n.get('about_skill_label_3'), content: this.i18n.get('about_skill_content_3') },
      { label: this.i18n.get('about_skill_label_4'), content: this.i18n.get('about_skill_content_4') },
      { label: this.i18n.get('about_skill_label_5'), content: this.i18n.get('about_skill_content_5') },
      { label: this.i18n.get('about_skill_label_6'), content: this.i18n.get('about_skill_content_6') },
      { label: this.i18n.get('about_skill_label_7'), content: this.i18n.get('about_skill_content_7') },
      { label: this.i18n.get('about_skill_label_8'), content: this.i18n.get('about_skill_content_8') },
    ];
  }

  ngAfterViewInit(): void {
    this.gsap.scrollReveal('.skills-header', { y: 30 });
    this.gsap.staggerReveal('.skills-grid', '.skill-card');
  }

  onSpotlight(e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--mx', e.offsetX + 'px');
    el.style.setProperty('--my', e.offsetY + 'px');
  }
}

import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { GsapService } from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

interface SkillGroup {
  label: string;
  content: string;
  icon: string;
}

interface Experience {
  title: string;
  company: string;
  companyColorClass: string;
  dotColorClass: string;
  dotShadowClass: string;
  period: string;
  description: string;
  checks: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent implements AfterViewInit {
  private gsap = inject(GsapService);
  public i18n = inject(TranslationService);

  get skillGroups(): SkillGroup[] {
    return [
      { label: this.i18n.get('about_skill_label_1'), icon: 'terminal', content: this.i18n.get('about_skill_content_1') },
      { label: this.i18n.get('about_skill_label_2'), icon: 'web', content: this.i18n.get('about_skill_content_2') },
      { label: this.i18n.get('about_skill_label_3'), icon: 'dns', content: this.i18n.get('about_skill_content_3') },
      { label: this.i18n.get('about_skill_label_4'), icon: 'smartphone', content: this.i18n.get('about_skill_content_4') },
      { label: this.i18n.get('about_skill_label_5'), icon: 'database', content: this.i18n.get('about_skill_content_5') },
      { label: this.i18n.get('about_skill_label_6'), icon: 'settings_suggest', content: this.i18n.get('about_skill_content_6') },
      { label: this.i18n.get('about_skill_label_7'), icon: 'cloud', content: this.i18n.get('about_skill_content_7') },
      { label: this.i18n.get('about_skill_label_8'), icon: 'task_alt', content: this.i18n.get('about_skill_content_8') },
    ];
  }

  get experiences(): Experience[] {
    return [
      {
        title: this.i18n.get('exp_1_title'),
        company: this.i18n.get('exp_1_company'),
        companyColorClass: 'text-indigo-600 dark:text-primary',
        dotColorClass: 'bg-indigo-600 dark:bg-primary',
        dotShadowClass: 'shadow-[0_0_10px_rgba(99,102,241,0.5)]',
        period: this.i18n.get('exp_1_period'),
        description: this.i18n.get('exp_1_desc'),
        checks: [
          this.i18n.get('exp_1_check_1'),
          this.i18n.get('exp_1_check_2'),
          this.i18n.get('exp_1_check_3'),
          this.i18n.get('exp_1_check_4'),
        ],
      },
      {
        title: this.i18n.get('exp_2_title'),
        company: this.i18n.get('exp_2_company'),
        companyColorClass: 'text-purple-600 dark:text-secondary',
        dotColorClass: 'bg-slate-300 dark:bg-outline-variant',
        dotShadowClass: '',
        period: this.i18n.get('exp_2_period'),
        description: this.i18n.get('exp_2_desc'),
        checks: [
          this.i18n.get('exp_2_check_1'),
          this.i18n.get('exp_2_check_2'),
          this.i18n.get('exp_2_check_3'),
          this.i18n.get('exp_2_check_4'),
        ],
      },
      {
        title: this.i18n.get('exp_3_title'),
        company: this.i18n.get('exp_3_company'),
        companyColorClass: 'text-emerald-600 dark:text-tertiary',
        dotColorClass: 'bg-slate-300 dark:bg-outline-variant',
        dotShadowClass: '',
        period: this.i18n.get('exp_3_period'),
        description: this.i18n.get('exp_3_desc'),
        checks: [
          this.i18n.get('exp_3_check_1'),
          this.i18n.get('exp_3_check_2'),
          this.i18n.get('exp_3_check_3'),
        ],
      },
    ];
  }

  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit(): void {
    this.gsap.scrollReveal('.about-skills-header', { y: 30 });
    this.gsap.staggerReveal('.about-skills-grid', '.about-skill-card');
  }
}

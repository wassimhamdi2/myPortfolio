import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { TranslationService } from '../../services/translation.service';

interface Achievement {
  icon: string;
  label: string;
  sub: string;
}

interface Skill {
  label: string;
}

interface EventHighlight {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-associative',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './associative.component.html',
})
export class AssociativeComponent {
  public i18n = inject(TranslationService);

  get achievements(): Achievement[] {
    return [
      { icon: 'emoji_events', label: this.i18n.get('assoc_achievement_1_label'), sub: this.i18n.get('assoc_achievement_1_sub') },
      { icon: 'groups',       label: this.i18n.get('assoc_achievement_2_label'), sub: this.i18n.get('assoc_achievement_2_sub') },
      { icon: 'precision_manufacturing', label: this.i18n.get('assoc_achievement_3_label'), sub: this.i18n.get('assoc_achievement_3_sub') },
    ];
  }

  get skills(): Skill[] {
    return [
      { label: this.i18n.get('assoc_skill_1') },
      { label: this.i18n.get('assoc_skill_2') },
      { label: this.i18n.get('assoc_skill_3') },
      { label: this.i18n.get('assoc_skill_4') },
      { label: this.i18n.get('assoc_skill_5') },
      { label: this.i18n.get('assoc_skill_6') },
    ];
  }

  get highlights(): EventHighlight[] {
    return [
      {
        src: 'assets/images/hackathon-team.jpg',
        alt: this.i18n.get('assoc_highlight_1_title'),
        title: this.i18n.get('assoc_highlight_1_title'),
        desc: this.i18n.get('assoc_highlight_1_desc'),
      },
      {
        src: 'assets/images/hackathon-robot.jpg',
        alt: this.i18n.get('assoc_highlight_2_title'),
        title: this.i18n.get('assoc_highlight_2_title'),
        desc: this.i18n.get('assoc_highlight_2_desc'),
      },
      {
        src: 'assets/images/hackathon-prize.jpg',
        alt: this.i18n.get('assoc_highlight_3_title'),
        title: this.i18n.get('assoc_highlight_3_title'),
        desc: this.i18n.get('assoc_highlight_3_desc'),
      },
    ];
  }

  // Fallback: show placeholder if image fails to load
  public onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      parent.classList.add('img-fallback');
    }
  }
}

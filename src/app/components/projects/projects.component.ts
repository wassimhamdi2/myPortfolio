import { Component, AfterViewInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapService } from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements AfterViewInit {
  private gsap = inject(GsapService);
  public i18n  = inject(TranslationService);
  activeFilter = signal('all');

  get filters() {
    return [
      { label: this.i18n.get('projects_filter_all'), value: 'all' },
      { label: this.i18n.get('projects_filter_fullstack'), value: 'fullstack' },
      { label: this.i18n.get('projects_filter_mobile'), value: 'mobile' },
      { label: this.i18n.get('projects_filter_ai'), value: 'ai' },
      { label: this.i18n.get('projects_filter_iot'), value: 'iot' },
    ];
  }

  get projects() {
    return [
      {
        title: this.i18n.get('proj_1_title'),
        category: this.i18n.get('proj_1_category'),
        filter: 'fullstack',
        description: this.i18n.get('proj_1_desc'),
        tags: ['Angular', 'Spring Boot', 'MySQL', 'MongoDB', 'Docker', 'Jenkins', 'AKS'],
        gradient: 'from-slate-800 to-slate-900',
        featured: true,
        previewImg: 'https://raw.githubusercontent.com/wassimhamdi2/industry-4.0-maintenance-dashboard/refs/heads/main/captures/kpi.PNG',
        githubUrl: 'https://github.com/wassimhamdi2/industry-4.0-maintenance-dashboard',
      },
      {
        title: this.i18n.get('proj_2_title'),
        category: this.i18n.get('proj_2_category'),
        filter: 'mobile',
        description: this.i18n.get('proj_2_desc'),
        tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Agile'],
        gradient: 'from-indigo-900 to-slate-900',
        featured: false,
        previewImg: 'https://raw.githubusercontent.com/wassimhamdi2/learn-master/master/assets/img/screenshortDemo/sginin.jpg',
        githubUrl: 'https://github.com/wassimhamdi2/learn-master',
      },
      {
        title: this.i18n.get('proj_3_title'),
        category: this.i18n.get('proj_3_category'),
        filter: 'fullstack',
        description: this.i18n.get('proj_3_desc'),
        tags: ['Angular', 'Laravel', 'Pusher', 'WebSockets', 'MySQL'],
        gradient: 'from-purple-900 to-slate-900',
        featured: false,
        previewImg: 'https://raw.githubusercontent.com/wassimhamdi2/chatify/refs/heads/main/frontend/public/screenshot/login.PNG',
        githubUrl: 'https://github.com/wassimhamdi2/chatify',
      },
      {
        title: this.i18n.get('proj_4_title'),
        category: this.i18n.get('proj_4_category'),
        filter: 'ai',
        description: this.i18n.get('proj_4_desc'),
        tags: ['Angular', 'Flask', 'Python', 'Groq API', 'LLaMA 3.1'],
        gradient: 'from-violet-900 to-slate-900',
        featured: false,
        previewImg: 'https://raw.githubusercontent.com/wassimhamdi2/chatbotAI/refs/heads/main/imageDemo/chat.PNG',
        githubUrl: 'https://github.com/wassimhamdi2/chatbotAI',
      },
      {
        title: this.i18n.get('proj_5_title'),
        category: this.i18n.get('proj_5_category'),
        filter: 'iot',
        description: this.i18n.get('proj_5_desc'),
        tags: ['Flutter', 'IoT', 'Firebase', 'Arduino', 'Sensors'],
        gradient: 'from-emerald-900 to-slate-900',
        featured: false,
        previewImg: 'https://raw.githubusercontent.com/wassimhamdi2/Iraggation-App/refs/heads/main/screenDemo/realTest.PNG',
        githubUrl: 'https://github.com/wassimhamdi2/Iraggation-App',
      },
    ];
  }

  get filteredProjects() {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.filter === f);
  }

  setFilter(v: string): void { this.activeFilter.set(v); }

  openRepo(url: string, event: Event): void {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  ngAfterViewInit(): void {
    this.gsap.scrollReveal('.projects-header', { y: 40 });
    this.gsap.staggerReveal('.projects-grid', 'article');
    this.gsap.scrollReveal('.projects-cta', { y: 30, duration: 1 });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onSpotlight(e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--mx', e.offsetX + 'px');
    el.style.setProperty('--my', e.offsetY + 'px');
  }

  onImgError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) parent.classList.add('img-fallback');
  }
}

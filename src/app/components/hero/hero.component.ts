import {
  Component, ElementRef, OnDestroy, AfterViewInit,
  ViewChild, inject, effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { GsapService }  from '../../services/gsap.service';
import { TranslationService } from '../../services/translation.service';

interface Particle { x: number; y: number; dx: number; dy: number; size: number; }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  public themeService = inject(ThemeService);
  public i18n         = inject(TranslationService);
  private gsap        = inject(GsapService);

  private animationFrameId = 0;
  private particles: Particle[] = [];
  private mouse = { x: null as number | null, y: null as number | null, radius: 200 };
  private resizeHandler!: () => void;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  private mouseOutHandler!: () => void;

  constructor() {
    effect(() => { this.themeService.isDark(); });
  }

  ngAfterViewInit(): void {
    this.initCanvas();
    setTimeout(() => this.gsap.heroEntrance({}), 200);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('mousemove', this.mouseMoveHandler);
    window.removeEventListener('mouseout', this.mouseOutHandler);
  }

  private getColors() {
    const dark = this.themeService.isDark();
    return dark
      ? { particle: 'rgba(163,166,255,0.85)', line: 'rgba(193,128,255,{o})',  lineHover: 'rgba(255,255,255,{o})', bg: 'rgba(6,14,32,1)' }
      : { particle: 'rgba(79,70,229,0.55)',    line: 'rgba(99,102,241,{o})',  lineHover: 'rgba(79,70,229,{o})',   bg: 'rgba(248,250,252,1)' };
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const build = () => ({ x: 0, y: 0, dx: (Math.random() * 0.4) - 0.2, dy: (Math.random() * 0.4) - 0.2, size: Math.random() * 2 + 1 });
    const init  = () => {
      this.particles = [];
      const n = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < n; i++) {
        const p = build();
        p.x = Math.random() * (canvas.width  - p.size * 4) + p.size * 2;
        p.y = Math.random() * (canvas.height - p.size * 4) + p.size * 2;
        this.particles.push(p);
      }
    };

    this.resizeHandler = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); };
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();

    this.mouseMoveHandler = (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; };
    this.mouseOutHandler  = ()  => { this.mouse.x = null; this.mouse.y = null; };
    window.addEventListener('mousemove', this.mouseMoveHandler);
    window.addEventListener('mouseout',  this.mouseOutHandler);

    const animate = () => {
      this.animationFrameId = requestAnimationFrame(animate);
      const c = this.getColors();
      ctx.fillStyle = c.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of this.particles) {
        if (p.x > canvas.width  || p.x < 0) p.dx = -p.dx;
        if (p.y > canvas.height || p.y < 0) p.dy = -p.dy;
        const mx = this.mouse.x, my = this.mouse.y;
        if (mx !== null && my !== null) {
          const dxm = mx - p.x, dym = my - p.y;
          const dist = Math.sqrt(dxm * dxm + dym * dym);
          if (dist < this.mouse.radius + p.size) {
            const f = (this.mouse.radius - dist) / this.mouse.radius;
            p.x -= (dxm / dist) * f * 5;
            p.y -= (dym / dist) * f * 5;
          }
        }
        p.x += p.dx; p.y += p.dy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = c.particle;
        ctx.fill();
      }

      const thr = (canvas.width / 7) * (canvas.height / 7);
      for (let a = 0; a < this.particles.length; a++) {
        for (let b = a; b < this.particles.length; b++) {
          const pa = this.particles[a], pb = this.particles[b];
          const d = (pa.x - pb.x) ** 2 + (pa.y - pb.y) ** 2;
          if (d < thr) {
            const opacity = 1 - d / 20000;
            const mx = this.mouse.x, my = this.mouse.y;
            const near = mx !== null && my !== null &&
              Math.sqrt((pa.x - mx) ** 2 + (pa.y - my) ** 2) < this.mouse.radius;
            ctx.strokeStyle = (near ? c.lineHover : c.line).replace('{o}', String(Math.max(0, opacity)));
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
          }
        }
      }
    };
    animate();
  }

  public scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

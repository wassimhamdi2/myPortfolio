import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDark = signal<boolean>(this.getInitialTheme());

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') return false;
    if (saved === 'dark') return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  constructor() {
    // Apply immediately on boot
    this.applyTheme(this.isDark());
  }

  public toggle(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    this.applyTheme(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  private applyTheme(dark: boolean): void {
    document.documentElement.classList.toggle('dark', dark);
  }
}


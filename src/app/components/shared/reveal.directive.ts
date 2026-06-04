import { Directive, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';
import { RevealService } from '../../services/reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {

  private el = inject(ElementRef);
  private revealService = inject(RevealService);

  ngOnInit(): void {
    this.el.nativeElement.classList.add('reveal');
    this.revealService.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.revealService.unobserve(this.el.nativeElement);
  }
}
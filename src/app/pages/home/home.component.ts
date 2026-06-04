import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent }        from '../../components/hero/hero.component';
import { ProjectsComponent }    from '../../components/projects/projects.component';
import { EducationComponent }   from '../../components/education/education.component';
import { AboutComponent }       from '../../components/about/about.component';
import { AssociativeComponent } from '../../components/associative/associative.component';
import { ContactComponent }     from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ProjectsComponent, EducationComponent, AboutComponent, AssociativeComponent, ContactComponent],
  template: `
    <app-hero />
    <app-projects />
    <app-education />
    <app-about />
    <app-associative />
    <app-contact />
  `,
})
export class HomePageComponent {}

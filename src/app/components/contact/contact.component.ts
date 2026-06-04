import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevealDirective } from '../shared/reveal.directive';
import { TranslationService } from '../../services/translation.service';
import { EnvService } from '../../services/env.service';

declare const emailjs: {
  init: (publicKey: string) => void;
  send: (
    serviceId: string,
    templateId: string,
    params: Record<string, string>
  ) => Promise<{ status: number; text: string }>;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  private env  = inject(EnvService);
  private fb   = inject(FormBuilder);
  public  i18n = inject(TranslationService);

  public form: FormGroup = this.fb.group({
    from_name:  ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    subject:    ['', Validators.required],
    message:    ['', [Validators.required, Validators.minLength(10)]],
  });

  public submitting = signal<boolean>(false);
  public submitted  = signal<boolean>(false);
  public errorMsg   = signal<string>('');

  get contactItems() {
    return [
      {
        icon: 'mail',
        label: this.i18n.get('contact_label_email'),
        value: 'whamdi617@gmail.com',
        href: 'mailto:whamdi617@gmail.com',
        iconBg: 'bg-slate-200 dark:bg-surface-container-high',
        iconColor: 'text-indigo-600 dark:text-primary',
      },
      {
        icon: 'call',
        label: this.i18n.get('contact_label_phone'),
        value: '+216 99 128 589',
        href: 'tel:+21699128589',
        iconBg: 'bg-slate-200 dark:bg-surface-container-high',
        iconColor: 'text-purple-600 dark:text-secondary',
      },
      {
        icon: 'location_on',
        label: this.i18n.get('contact_label_location'),
        value: this.i18n.get('contact_value_location'),
        href: null,
        iconBg: 'bg-slate-200 dark:bg-surface-container-high',
        iconColor: 'text-sky-600 dark:text-tertiary',
      },
      {
        icon: 'link',
        label: this.i18n.get('contact_label_linkedin'),
        value: 'linkedin.com/in/hamdiwassim',
        href: 'https://www.linkedin.com/in/hamdiwassim/',
        iconBg: 'bg-slate-200 dark:bg-surface-container-high',
        iconColor: 'text-indigo-600 dark:text-primary',
      },
    ];
  }

  ngOnInit(): void {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(this.env.emailjsPublicKey);
    }
  }

  public async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.errorMsg.set('');

    const { from_name, from_email, subject, message } = this.form.value as {
      from_name: string;
      from_email: string;
      subject: string;
      message: string;
    };

    try {
      await emailjs.send(
        this.env.emailjsServiceId,
        this.env.emailjsTemplateId,
        { from_name, from_email, subject, message, to_name: 'Wassim', reply_to: from_email }
      );

      this.submitted.set(true);
      this.form.reset();
      setTimeout(() => this.submitted.set(false), 6000);

    } catch (err: unknown) {
      const msg = err instanceof Error
        ? err.message
        : this.i18n.get('contact_error_fallback');
      this.errorMsg.set(msg);
    } finally {
      this.submitting.set(false);
    }
  }

  public isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

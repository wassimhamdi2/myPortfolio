import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EnvService {
  get emailjsPublicKey(): string {
    return environment.emailjs.publicKey;
  }

  get emailjsServiceId(): string {
    return environment.emailjs.serviceId;
  }

  get emailjsTemplateId(): string {
    return environment.emailjs.templateId;
  }
}

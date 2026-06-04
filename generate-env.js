const fs = require('fs');
const path = require('path');
const dir = 'src/environments';
const env = `export const environment = {
  emailjs: {
    publicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}',
    serviceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  },
};`;
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'environment.ts'), env);

const fs = require('fs');
const env = `export const environment = {
  emailjs: {
    publicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}',
    serviceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  },
};`;
fs.writeFileSync('src/environments/environment.ts', env);

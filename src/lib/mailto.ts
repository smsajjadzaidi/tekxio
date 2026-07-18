export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

export function buildMailtoUrl(data: ContactFormData): string {
  const to = 'aunraza021@gmail.com';
  const subject = `tekxio inquiry: ${data.interest} — ${data.name}`;
  const bodyLines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Interest: ${data.interest}`,
    '',
    data.message,
  ].filter((line): line is string => line !== null);
  const body = bodyLines.join('\n');
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

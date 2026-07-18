import { useState, type FormEvent } from 'react';
import { buildMailtoUrl } from '../lib/mailto';

const interests = [
  'Agentic AI Systems',
  'AI Security',
  'Web App Development',
  'Other',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError('Name and message are required.');
      setSubmitted(false);
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setError('Enter a valid email address.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    window.location.href = buildMailtoUrl({
      name,
      email,
      company,
      interest,
      message,
    });
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mt-3 text-3xl font-bold text-text md:text-4xl">
          Let&apos;s talk about what you&apos;re building.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm text-muted">
              Company (optional)
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm text-muted">
              Interest
            </label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            >
              {interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          {error && (
            <p className="text-sm text-danger" aria-live="polite">
              {error}
            </p>
          )}
          {submitted && (
            <p className="text-sm text-accent" aria-live="polite">
              Opening your email client to send this message…
            </p>
          )}

          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

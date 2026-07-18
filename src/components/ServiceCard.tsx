import type { Service } from '../data/services';

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-xl font-semibold text-text">{service.title}</h3>
      <ul className="mt-4 space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm text-muted">
            <span className="text-accent">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-sm text-muted">
        From <span className="text-accent">{service.price}</span>
      </p>
    </div>
  );
}

export default ServiceCard;

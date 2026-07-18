import { services } from '../data/services';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-border bg-surface/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-text md:text-4xl">
          Three things we do. Nothing vague about any of them.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

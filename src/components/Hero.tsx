function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32"
    >
      <div className="mb-6 inline-block rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-accent">
        <span className="text-muted">$</span> tekxio deploy --agentic --secure
      </div>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text md:text-6xl">
        Agentic AI systems. Production-grade web apps.{' '}
        <span className="text-accent">Security built in, not bolted on.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        We build and ship AI agent systems, secure them against real-world
        scrutiny, and put production-grade web apps behind them — from
        Estonia, for teams anywhere.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#services"
          className="rounded-md bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
        >
          See Services
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default Hero;

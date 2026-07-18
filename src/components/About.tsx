function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <img
            src="/aun-linkedin.jpeg"
            alt="Aun Raza, Founder & CEO of tekxio"
            width={800}
            height={800}
            className="w-full rounded-lg border border-border object-cover grayscale"
          />
        </div>
        <div>
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
            About
          </h2>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-2xl font-semibold text-text md:text-3xl">
            &quot;Most AI engineers can build agents. Very few can secure
            them. I do both.&quot;
          </blockquote>
          <p className="mt-6 text-muted">
            Aun Raza, Founder &amp; CEO of tekxio, architects the CX
            automation layer at TON Foundation, serving 1M+ users across 40+
            Telegram channels — multi-agent orchestration, conversational AI,
            real-time data pipelines, and LLMOps strategy, alongside
            cross-functional engineering leadership. Security isn&apos;t an
            afterthought in his systems. It&apos;s part of the architecture.
          </p>

          <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
            8+ years shipping across industries
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="text-sm text-muted">
              <span className="text-accent">AI/LLMOps —</span> Cut recruitment
              delivery time by 50% with multi-agent hiring tools (US HRTech)
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">FinTech —</span> Reduced payment
              integration time by 60% across 20+ providers at Paymob
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">HealthTech —</span> Built
              HIPAA-compliant AI pipelines for CCM/RPM automation and patient
              risk triage
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">PropTech —</span> Built
              voice-driven AI agents for property management automation
              (Twilio + agentic workflows)
            </li>
          </ul>

          <p className="mt-6 text-sm text-muted">
            <span className="text-accent">AI Security:</span> Stanford-certified
            (XACS134), author of Secure AI Brief with 1,000+ subscribers in
            its first week.
          </p>

          <p className="mt-6 text-muted">
            He takes products from zero to production: architecture, agent
            design, deployment, evals, observability. The whole thing.
          </p>

          <p className="mt-6 text-sm text-muted">
            📍 Open to relocation (GCC, Singapore, EU)
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:aunraza021@gmail.com"
              className="text-accent hover:underline"
            >
              aunraza021@gmail.com
            </a>
            <a
              href="https://www.aunraza.space/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              aunraza.space
            </a>
            <a
              href="https://www.linkedin.com/in/aunraz/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-lg font-medium text-text">
            Building agentic systems that need to scale and survive security
            scrutiny? Let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

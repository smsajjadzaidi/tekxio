function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <div>
          <span className="font-mono text-text">tekxio_</span>
          <span className="ml-2">
            Agentic AI systems, secured and shipped.
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-text">
            Services
          </a>
          <a href="#about" className="hover:text-text">
            About
          </a>
          <a href="#contact" className="hover:text-text">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <a href="mailto:aunraza021@gmail.com" className="hover:text-text">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aunraz/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text"
          >
            LinkedIn
          </a>
        </div>
        <div>© 2026 tekxio</div>
      </div>
    </footer>
  );
}

export default Footer;

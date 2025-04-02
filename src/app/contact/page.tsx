export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto pt-48 pb-12 px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-thin mb-4">Contact Me</h1> {/* Updated heading */}
        <h2 className="text-2xl font-thin" style={{ color: 'var(--secondary-contrast)' }}>
          Get in touch {/* Updated subheading */}
        </h2>
      </header>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center mb-12" style={{ color: 'var(--secondary-contrast)' }}> {/* Adjusted margin */}
        Interested in collaborating or have a question? I&apos;d love to hear from you. {/* Updated intro text */}
      </p>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center mb-24" style={{ color: 'var(--secondary-contrast)' }}>
        The VoxMail tool in the bottom right corner is a great way to leave a message, {/* Updated text */}
        or if you&apos;d like to schedule a meeting, you can book a time using Calendly below.
      </p>
      <section className="mb-16">
        <h2 className="text-4xl mb-8 text-center">Schedule a Meeting</h2>

        <div className="text-center">
          <a
            href="https://calendly.com/cade-vox-mail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-light-teal/10 text-primary-contrast font-bold bg-light-teal/10 border rounded-lg px-8 py-4 transition-colors duration-200 hover:bg-light-teal/20 hover:border-light-teal/20 motion-preset-rebound-up motion-delay-400"
          >
            Book with Calendly
          </a>
        </div>
      </section>
    </main>
  );
}

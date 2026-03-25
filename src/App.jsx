import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Primary Care",
    description:
      "Annual wellness, preventive screenings, medication management, and follow-up care for common chronic conditions.",
  },
  {
    number: "02",
    title: "Immigration Medical Exams",
    description:
      "I-693 physicals presented with a clearer process so patients know what to expect before they arrive.",
  },
  {
    number: "03",
    title: "Weight Management",
    description:
      "Structured plans focused on realistic progress, measurable health goals, and steady clinical support.",
  },
  {
    number: "04",
    title: "Women's Health",
    description:
      "Preventive visits, screenings, and ongoing care in a warm, accessible clinic environment.",
  },
  {
    number: "05",
    title: "DOT Exams",
    description:
      "Straightforward occupational and transportation physicals with easier appointment guidance.",
  },
  {
    number: "06",
    title: "In-House Lab Services",
    description:
      "Convenient testing and faster care coordination without sending patients through a fragmented workflow.",
  },
];

const providers = [
  ["PA", "Paul Tromba, PA", "Primary care and patient-centered follow-up care."],
  ["PA", "Sharndeep Chokar, PA", "Comprehensive care with attention to continuity and access."],
  ["NP", "Xan Layugan, NP", "Preventive and ongoing care for families and individual patients."],
  ["NP", "Jamie Chinnick, NP", "Supportive communication and practical treatment planning."],
  ["MD", "Payal Shah, MD", "Experienced physician support for primary care and clinic leadership."],
];

const locations = [
  {
    title: "Bellevue Clinic",
    address: ["1380 112th Ave NE, Suite 100", "Bellevue, WA 98004"],
    contact: "(253) 397-8683",
    details: "Monday to Friday: 8:00 AM - 6:00 PM",
  },
  {
    title: "Kent Clinic",
    address: ["1314 Central Ave S, Suite 102", "Kent, WA 98032"],
    contact: "(253) 397-8683",
    details: "Monday to Friday: 8:00 AM - 6:00 PM",
  },
  {
    title: "Virtual Visits",
    address: ["Remote appointments available", "for eligible visit types."],
    contact: "info@1stopmedicalservices.com",
    details: "Monday to Friday: 8:00 AM - 6:00 PM",
  },
];

const faqs = [
  {
    question: "What types of appointments does the clinic offer?",
    answer:
      "Primary care, immigration physicals, weight management, women's health, DOT exams, lab services, and select virtual visits.",
  },
  {
    question: "Where are the clinics located?",
    answer: "OneStop Medical Services lists locations in Bellevue and Kent, Washington.",
  },
  {
    question: "How do patients book an appointment?",
    answer:
      "Patients can use the online booking link, call the clinic directly, or use the patient portal for follow-up needs.",
  },
  {
    question: "What languages are supported?",
    answer:
      "The current clinic site states support for English, Hindi, Punjabi, Gujarati, French, and Spanish.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="topbar">
        <p>Two Washington locations. Same-week appointments. Virtual visits available.</p>
        <a href="tel:2533978683">(253) 397-8683</a>
      </header>

      <header className="header">
        <a className="brand" href="#top" aria-label="OneStop Medical Services home">
          <span className="brand-mark">1</span>
          <span>
            <strong>OneStop Medical Services</strong>
            <small>Primary care for everyday health and long-term wellness</small>
          </span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav id="site-nav" className={`nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#providers">Providers</a>
          <a href="#locations">Locations</a>
          <a href="#faq">FAQ</a>
          <a
            className="button button-small button-ghost"
            href="https://ehr.ethizo.com/"
            target="_blank"
            rel="noreferrer"
          >
            Patient Portal
          </a>
          <a
            className="button button-small"
            href="https://www.zocdoc.com/"
            target="_blank"
            rel="noreferrer"
          >
            Book Online
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Family medicine, immigration exams, and preventive care</p>
            <h1>Clinic care that feels organized, personal, and easy to navigate.</h1>
            <p className="hero-text">
              OneStop Medical Services supports families and individuals with
              primary care, women's health, weight management, DOT exams,
              in-house lab testing, and I-693 immigration physicals.
            </p>
            <div className="hero-actions">
              <a className="button" href="https://www.zocdoc.com/" target="_blank" rel="noreferrer">
                Book an Appointment
              </a>
              <a className="button button-secondary" href="#locations">
                View Locations &amp; Hours
              </a>
            </div>
            <ul className="hero-points">
              <li>In-person visits in Bellevue and Kent</li>
              <li>Virtual care Monday through Friday</li>
              <li>English, Hindi, Punjabi, Gujarati, French, and Spanish support</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-primary">
              <span className="panel-label">Now offering</span>
              <h2>Primary care with practical access</h2>
              <p>
                Routine wellness visits, preventive screenings, chronic condition support,
                and care plans that are understandable from the first visit.
              </p>
            </div>
            <div className="panel-grid">
              <article className="panel-card">
                <strong>2 clinic locations</strong>
                <p>Bellevue and Kent, Washington</p>
              </article>
              <article className="panel-card">
                <strong>Weekday hours</strong>
                <p>Monday through Friday, 8:00 AM to 6:00 PM</p>
              </article>
              <article className="panel-card">
                <strong>Specialized services</strong>
                <p>I-693 exams, DOT physicals, lab work, and weight management</p>
              </article>
              <article className="panel-card">
                <strong>Patient-first flow</strong>
                <p>Clear navigation, faster booking, and stronger care information</p>
              </article>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Highlights">
          <div>
            <strong>Primary Care</strong>
            <span>Routine visits, wellness support, and ongoing care coordination</span>
          </div>
          <div>
            <strong>Immigration Physicals</strong>
            <span>I-693 medical exam support in a clear, structured process</span>
          </div>
          <div>
            <strong>In-House Lab</strong>
            <span>Convenient testing and follow-up in one place</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Built around the care people actually come in for.</h2>
            <p>
              The site is now organized into clearer service categories so patients can
              quickly understand what the clinic offers and what to book.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-section">
          <div className="feature-copy">
            <p className="eyebrow">Why this feels better</p>
            <h2>A calmer, more trustworthy experience for a clinic website.</h2>
            <p>
              Primary care websites work best when they reduce uncertainty. This layout emphasizes
              contact details, access, services, provider credibility, and booking actions without
              overwhelming first-time visitors.
            </p>
          </div>
          <div className="feature-list">
            <article>
              <h3>Clarity first</h3>
              <p>Patients can immediately see where the clinic is, what it offers, and how to book.</p>
            </article>
            <article>
              <h3>More credible tone</h3>
              <p>The messaging now fits family medicine and avoids generic or mismatched healthcare copy.</p>
            </article>
            <article>
              <h3>Responsive by default</h3>
              <p>The interface is designed for both mobile appointment seekers and desktop research visits.</p>
            </article>
          </div>
        </section>

        <section id="providers" className="section">
          <div className="section-heading">
            <p className="eyebrow">Providers</p>
            <h2>Care backed by a multidisciplinary team.</h2>
            <p>
              The provider area keeps the clinic team visible while presenting them in a cleaner,
              more credible clinical format.
            </p>
          </div>

          <div className="provider-grid">
            {providers.map(([badge, name, description]) => (
              <article className="provider-card" key={name}>
                <div className="provider-badge">{badge}</div>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-heading">
            <p className="eyebrow">Patient Experience</p>
            <h2>Care that patients describe as clear, friendly, and dependable.</h2>
          </div>
          <div className="testimonial-grid">
            <blockquote>
              “Friendly staff, clear guidance, and efficient care made the visit feel straightforward.”
            </blockquote>
            <blockquote>
              “The process felt easy from scheduling through treatment, which matters a lot in a clinic setting.”
            </blockquote>
            <blockquote>
              “Patients highlight communication, professionalism, and feeling supported over time.”
            </blockquote>
          </div>
        </section>

        <section id="locations" className="section location-section">
          <div className="section-heading">
            <p className="eyebrow">Locations &amp; Hours</p>
            <h2>Easy to find, easy to call, and easy to schedule.</h2>
          </div>

          <div className="location-grid">
            {locations.map((location) => (
              <article className="location-card" key={location.title}>
                <h3>{location.title}</h3>
                <p>
                  {location.address[0]}
                  <br />
                  {location.address[1]}
                </p>
                {location.contact.includes("@") ? (
                  <a href={`mailto:${location.contact}`}>{location.contact}</a>
                ) : (
                  <a href="tel:2533978683">{location.contact}</a>
                )}
                <p>{location.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Make booking the easiest part of care.</h2>
            <p>
              Portal access and online scheduling stay visible right before the footer so patients
              can take action without searching again.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button" href="https://www.zocdoc.com/" target="_blank" rel="noreferrer">
              Schedule Online
            </a>
            <a className="button button-secondary" href="https://ehr.ethizo.com/" target="_blank" rel="noreferrer">
              Open Patient Portal
            </a>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Helpful answers before a patient even calls.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>OneStop Medical Services</strong>
          <p>
            Phone: <a href="tel:2533978683">(253) 397-8683</a> | Fax: (253) 342-4353
          </p>
        </div>
        <div>
          <p>Bellevue and Kent, Washington</p>
          <p>{year} OneStop Medical Services</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

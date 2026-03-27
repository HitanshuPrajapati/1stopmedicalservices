const services = [
  {
    title: "Primary Care",
    description:
      "Routine wellness visits, preventive screenings, medication management, and ongoing support for common health concerns.",
  },
  {
    title: "Immigration Medical Exams",
    description:
      "I-693 exams and related visit support in a clear, patient-friendly clinic setting.",
  },
  {
    title: "Weight Management",
    description:
      "Practical care plans focused on sustainable progress, health goals, and regular follow-up.",
  },
  {
    title: "Immunizations & Lab Services",
    description:
      "Convenient in-clinic services that support diagnosis, prevention, and routine care.",
  },
];

const providers = [
  { name: "Payal Shah, MD", role: "Physician" },
  { name: "Paul Tromba, PA", role: "Physician Assistant" },
  { name: "Sharndeep Chokar, PA", role: "Physician Assistant" },
  { name: "Xan Layugan, NP", role: "Nurse Practitioner" },
  { name: "Jamie Chinnick, NP", role: "Nurse Practitioner" },
];

const visitOptions = [
  "Bellevue in-person visits",
  "Kent in-person visits",
  "Weekday virtual appointments",
  "Portal access for returning patients",
];

const testimonials = [
  "The staff was knowledgeable, friendly, and efficient. They made sure I had the information and guidance I needed.",
  "Very happy with my experience. The process felt easy and simple, and the team was helpful throughout.",
  "Communication and professionalism stood out. I felt supported and well cared for during my visits.",
];

const hours = [
  "Monday: 8:00AM-6:00PM",
  "Tuesday: 8:00AM-6:00PM",
  "Wednesday: 8:00AM-6:00PM",
  "Thursday: 8:00AM-6:00PM",
  "Friday: 8:00AM-6:00PM",
];

function App() {
  return (
    <div className="site-shell">
      <header className="announcement">
        <span>Family medicine, immigration exams, labs, and immunizations</span>
        <a href="tel:2533978683">(253) 397-8683</a>
      </header>

      <header className="header">
        <a className="brand" href="#top">
          <div className="brand-badge">1</div>
          <div>
            <strong>OneStop Medical Services</strong>
            <span>Primary care for individuals and families</span>
          </div>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#providers">Providers</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
          <a
            className="pill pill-ghost"
            href="https://ehr.ethizo.com/"
            target="_blank"
            rel="noreferrer"
          >
            Patient Portal
          </a>
          <a
            className="pill"
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
            <p className="eyebrow">Modern clinic care, without the friction</p>
            <h1>Healthcare that feels calm, capable, and easy to navigate.</h1>
            <p className="hero-text">
              OneStop Medical Services offers primary care, immigration medical exams,
              weight management, immunizations, and lab services with weekday access in
              Bellevue, Kent, and eligible virtual visits.
            </p>

            <div className="hero-actions">
              <a
                className="pill"
                href="https://www.zocdoc.com/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Visit
              </a>
              <a className="pill pill-ghost" href="#contact">
                Contact the Clinic
              </a>
            </div>

            <div className="hero-note">
              <strong>Languages spoken</strong>
              <p>English, Hindi, Punjabi, Gujarati, French, and Spanish</p>
            </div>
          </div>

          <div className="hero-stage">
            <div className="stage-card stage-card-main">
              <span>Open weekdays</span>
              <strong>8:00 AM to 6:00 PM</strong>
              <p>Convenient hours for Bellevue, Kent, and virtual visit availability.</p>
            </div>

            <div className="stage-card stage-card-list">
              <span>Visit options</span>
              <ul>
                {visitOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="stage-graphic">
              <div className="graphic-ring graphic-ring-a" />
              <div className="graphic-ring graphic-ring-b" />
              <div className="graphic-panel">
                <p>Bellevue</p>
                <p>Kent</p>
                <p>Virtual Care</p>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics">
          <article>
            <strong>2 clinic locations</strong>
            <p>Bellevue and Kent, Washington</p>
          </article>
          <article>
            <strong>Core family medicine care</strong>
            <p>Routine visits, wellness support, and follow-up care</p>
          </article>
          <article>
            <strong>Specialized visits</strong>
            <p>Immigration exams, lab services, and weight management</p>
          </article>
        </section>

        <section className="section services-section" id="services">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Built around the reasons patients actually book.</h2>
          </div>

          <div className="services-layout">
            <div className="services-intro">
              <p>
                The home page should answer the basics quickly: what the clinic offers,
                where it is, and how to get seen. This version keeps those answers visible
                and trims away anything that feels noisy.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article key={service.title} className="service-card">
                  <div className={`service-mark service-mark-${index + 1}`} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section providers-section" id="providers">
          <div className="section-head">
            <p className="eyebrow">Providers</p>
            <h2>A care team that feels visible and credible.</h2>
          </div>

          <div className="providers-layout">
            <aside className="providers-sidebar">
              <strong>What patients need to know first</strong>
              <p>
                Experienced clinicians, clear appointment paths, and support for everyday
                care as well as specialized clinic visits.
              </p>
            </aside>

            <div className="providers-grid">
              {providers.map((provider, index) => (
                <article key={provider.name} className="provider-card">
                  <div className={`provider-chip provider-chip-${index + 1}`}>
                    {provider.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <h3>{provider.name}</h3>
                  <p>{provider.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stories-section">
          <div className="section-head">
            <p className="eyebrow">Patient Experience</p>
            <h2>Feedback that supports trust without overwhelming the page.</h2>
          </div>

          <div className="stories-grid">
            {testimonials.map((quote, index) => (
              <article key={quote} className="story-card">
                <div className={`story-chip story-chip-${index + 1}`}>{["AB", "LM", "DR"][index]}</div>
                <p>{quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section locations-section" id="locations">
          <div className="section-head">
            <p className="eyebrow">Locations & Hours</p>
            <h2>Fast answers for where to go and when the clinic is open.</h2>
          </div>

          <div className="locations-grid">
            <article className="location-card location-card-map">
              <strong>Bellevue Clinic</strong>
              <p>1380 112th Ave NE, Suite 100<br />Bellevue, WA 98004</p>
              <a
                href="https://maps.google.com/?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004"
                target="_blank"
                rel="noreferrer"
              >
                Open directions
              </a>
            </article>

            <article className="location-card">
              <strong>Kent Clinic</strong>
              <p>1314 Central Ave S, Suite 102<br />Kent, WA 98032</p>
              <a href="tel:2533978683">(253) 397-8683</a>
            </article>

            <article className="location-card">
              <strong>Clinic Hours</strong>
              {hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Reach the clinic directly or send a message.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-cards">
              <article>
                <strong>Phone</strong>
                <p>(253) 397-8683</p>
              </article>
              <article>
                <strong>Fax</strong>
                <p>(253) 342-4353</p>
              </article>
              <article>
                <strong>Patient Portal</strong>
                <a href="https://ehr.ethizo.com/" target="_blank" rel="noreferrer">
                  Open portal
                </a>
              </article>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Type your message here..." />
              <div className="form-row">
                <span>Thanks for submitting!</span>
                <button type="button">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>OneStop Medical Services</strong>
          <p>Family medicine clinic serving Bellevue and Kent, Washington.</p>
        </div>
        <div>
          <p>Phone: (253) 397-8683</p>
          <p>Fax: (253) 342-4353</p>
        </div>
        <a href="https://ehr.ethizo.com/" target="_blank" rel="noreferrer">
          Visit the patient portal
        </a>
      </footer>
    </div>
  );
}

export default App;

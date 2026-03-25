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

const highlights = [
  "In-person visits in Bellevue and Kent",
  "Virtual visit availability on weekdays",
  "Support in English, Hindi, Punjabi, Gujarati, French, and Spanish",
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
    <div className="page-shell">
      <header className="topbar">
        <p>Primary care, immigration exams, labs, and immunizations</p>
        <a href="tel:2533978683">(253) 397-8683</a>
      </header>

      <header className="site-header">
        <a className="brand" href="#top">
          <div className="brand-mark">1</div>
          <div>
            <strong>OneStop Medical Services</strong>
            <span>Family medicine clinic for everyday care and specialized visits</span>
          </div>
        </a>

        <nav className="main-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#providers">Providers</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-button nav-button-secondary"
            href="https://ehr.ethizo.com/"
            target="_blank"
            rel="noreferrer"
          >
            Patient Portal
          </a>
          <a
            className="nav-button"
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
            <p className="eyebrow">Primary care for individuals and families</p>
            <h1>Clinic care that feels clear, modern, and easy to trust.</h1>
            <p className="hero-text">
              OneStop Medical Services provides primary care, immigration medical exams,
              weight management, immunizations, and lab services with in-person care in
              Bellevue and Kent plus weekday virtual visits.
            </p>

            <div className="hero-actions">
              <a
                className="button"
                href="https://www.zocdoc.com/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule an Appointment
              </a>
              <a className="button button-secondary" href="#locations">
                View Locations
              </a>
            </div>

            <ul className="hero-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <div className="hero-card-panel">
              <span className="panel-label">Hours</span>
              <h2>Open Monday through Friday</h2>
              <p>8:00 AM to 6:00 PM for Bellevue, Kent, and eligible virtual visits.</p>
            </div>
            <div className="hero-stats">
              <article>
                <strong>2 locations</strong>
                <p>Bellevue and Kent</p>
              </article>
              <article>
                <strong>Patient support</strong>
                <p>Portal access and online booking</p>
              </article>
              <article>
                <strong>Core services</strong>
                <p>Primary care, exams, labs, and wellness support</p>
              </article>
            </div>
          </aside>
        </section>

        <section className="trust-strip">
          <article>
            <strong>Primary Care</strong>
            <p>Routine visits, preventive care, and longer-term follow-up.</p>
          </article>
          <article>
            <strong>Immigration Exams</strong>
            <p>I-693 visits presented with a clear next step for patients.</p>
          </article>
          <article>
            <strong>Convenient Access</strong>
            <p>Two locations, virtual visits, and multiple ways to get in touch.</p>
          </article>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Focused on the care patients most often need.</h2>
            <p>
              The page keeps the clinic’s most relevant services front and center, with a
              simpler structure and fewer distractions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.title} className="service-card">
                <div className={`service-icon service-icon-${index + 1}`} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-section">
          <div className="feature-copy">
            <p className="eyebrow">Why this layout works better</p>
            <h2>A more typical clinic website experience for first-time visitors.</h2>
            <p>
              Patients usually want the same few answers quickly: what the clinic offers,
              where it is, how to book, and whether the team feels credible. This design
              organizes the page around those decisions.
            </p>
          </div>
          <div className="feature-points">
            <article>
              <strong>Stronger visual hierarchy</strong>
              <p>Important information appears in the right order without overcrowding the page.</p>
            </article>
            <article>
              <strong>Clearer patient actions</strong>
              <p>Booking, contact, portal access, and locations are easy to find on both desktop and mobile.</p>
            </article>
            <article>
              <strong>More clinic-appropriate tone</strong>
              <p>The interface feels calmer, more professional, and more aligned with primary care expectations.</p>
            </article>
          </div>
        </section>

        <section className="section" id="providers">
          <div className="section-heading">
            <p className="eyebrow">Providers</p>
            <h2>Meet the care team.</h2>
            <p>
              A concise provider section keeps the staff visible without forcing the home page
              to carry too much extra detail.
            </p>
          </div>

          <div className="provider-grid">
            {providers.map((provider, index) => (
              <article key={provider.name} className="provider-card">
                <div className={`provider-avatar provider-avatar-${index + 1}`}>
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
        </section>

        <section className="section testimonial-section">
          <div className="section-heading">
            <p className="eyebrow">Patient Stories</p>
            <h2>Positive care experiences still matter.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((quote, index) => (
              <article key={quote} className="testimonial-card">
                <div className={`testimonial-avatar testimonial-avatar-${index + 1}`}>
                  {["AB", "LM", "DR"][index]}
                </div>
                <p>{quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section location-section" id="locations">
          <div className="section-heading">
            <p className="eyebrow">Locations & Hours</p>
            <h2>Easy to find and easy to contact.</h2>
          </div>

          <div className="location-grid">
            <article className="location-card map-card">
              <h3>Bellevue Clinic</h3>
              <p>1380 112th Ave NE, Suite 100<br />Bellevue, WA 98004</p>
              <a
                href="https://maps.google.com/?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004"
                target="_blank"
                rel="noreferrer"
              >
                Open Directions
              </a>
            </article>

            <article className="location-card">
              <h3>Kent Clinic</h3>
              <p>1314 Central Ave S, Suite 102<br />Kent, WA 98032</p>
              <a href="tel:2533978683">(253) 397-8683</a>
            </article>

            <article className="location-card">
              <h3>Clinic Hours</h3>
              {hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Reach the clinic or send a message.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <article>
                <strong>Phone</strong>
                <p>(253) 397-8683</p>
              </article>
              <article>
                <strong>Fax</strong>
                <p>(253) 342-4353</p>
              </article>
              <article>
                <strong>Languages Spoken</strong>
                <p>English, Hindi, Punjabi, Gujarati, French, and Spanish</p>
              </article>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Type your message here..." />
              <div className="form-footer">
                <span>Thanks for submitting!</span>
                <button type="button">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>OneStop Medical Services</strong>
          <p>Family medicine clinic with locations in Bellevue and Kent, Washington.</p>
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

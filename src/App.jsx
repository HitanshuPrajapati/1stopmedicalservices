const serviceCards = [
  {
    title: "Primary Care Services",
    description:
      "Routine visits, preventive care, treatment planning, and long-term support for individuals and families.",
    eyebrow: "Everyday care",
  },
  {
    title: "Weight Loss Program",
    description:
      "Structured guidance for weight management with clear goals, follow-up, and a practical care plan.",
    eyebrow: "Wellness support",
  },
  {
    title: "Immigration Medical Exam I-693",
    description:
      "Immigration physicals and supporting services in a clinic environment designed to feel organized and approachable.",
    eyebrow: "Specialized service",
  },
];

const providers = [
  { name: "Paul Tromba, PA", initials: "PT" },
  { name: "Sharndeep Chokar, PA", initials: "SC" },
  { name: "Xan Layugan, NP", initials: "XL" },
  { name: "Jamie Chinnick, NP", initials: "JC" },
  { name: "Payal Shah, MD", initials: "PS" },
];

const testimonials = [
  "I got my vaccination here. The staff was knowledgeable, friendly and efficient. They made sure that I was given proper information and guidance.",
  "Very happy with my experience at Onestop medical. They made it very easy and simple and I appreciate them doing this service for the community.",
  "I've been seeing Dr. Shah for quite sometime now, and I'm truly happy throughout with my medical needs. Communication and professionalism stand out.",
];

const hours = [
  "Monday: 8:00AM-6:00PM",
  "Tuesday: 8:00AM-6:00PM",
  "Wednesday: 8:00AM-6:00PM",
  "Thursday: 8:00AM-6:00PM",
  "Friday: 8:00AM-6:00PM",
];

const quickFacts = [
  "Primary care, immigration, labs, and immunizations",
  "In-person visits in Bellevue and Kent",
  "Virtual visit availability during weekday hours",
  "English, Hindi, Punjabi, Gujarati, French, and Spanish",
];

function App() {
  return (
    <div className="page">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="hero">
        <div className="hero-bar">
          <div className="brand">
            <div className="brand-mark">1</div>
            <div>
              <strong>OneStop Medical Services</strong>
              <span>Family medicine clinic, immigration, labs, immunizations</span>
            </div>
          </div>
          <nav className="top-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#providers">Providers</a>
            <a href="#stories">Patient Stories</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Primary care with a more modern patient experience</p>
            <div className="notice-card">
              <p>
                We will be <span>CLOSED</span> on December 24th &amp; 25th for the Christmas Holiday.
              </p>
              <p>Hope you have a Merry Christmas.</p>
              <p>
                Also, we will be <span>CLOSED</span> for New Years, January 1st, 2026.
              </p>
              <p>We look forward to caring for you and your family in the new year.</p>
            </div>

            <h1>
              Onestop Medical Clinic
              <br />
              <em>Specializing in Primary Care, Weight Management, and Immigration Services</em>
            </h1>

            <p className="hero-text">
              Getting an online health treatment plan is no longer a challenge. Consult our
              highly qualified health care professionals for a personalized treatment plan.
              With or without insurance, you can get the care you choose.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="https://www.zocdoc.com/" target="_blank" rel="noreferrer">
                Book Online
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Us
              </a>
            </div>

            <div className="address-row">
              <div className="address-card">
                <span>Bellevue Clinic</span>
                <p>1380 112th Ave NE Suite #100, Bellevue, WA 98004</p>
              </div>
              <div className="address-card">
                <span>Kent Clinic</span>
                <p>1314 Central Ave S, #102, Kent, WA 98032</p>
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-art">
              <div className="art-orb art-orb-a" />
              <div className="art-orb art-orb-b" />
              <div className="art-orb art-orb-c" />
              <div className="art-card">
                <strong>Clinic care for families, wellness, and immigration support</strong>
              </div>
            </div>
            <div className="facts-card">
              <h2>Quick Overview</h2>
              <ul>
                {quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </header>

      <section className="section intro">
        <div className="section-title">
          <p className="eyebrow">Why patients choose the clinic</p>
          <h2>Clear care paths, practical access, and a more reassuring first impression.</h2>
        </div>
        <div className="intro-grid">
          <article>
            <strong>Personalized treatment plans</strong>
            <p>
              Patients can connect with highly qualified professionals for treatment plans
              that feel specific, understandable, and achievable.
            </p>
          </article>
          <article>
            <strong>In-person and online support</strong>
            <p>
              The clinic offers in-person care in Bellevue and Kent, plus virtual options
              during weekday hours.
            </p>
          </article>
          <article>
            <strong>Broad language support</strong>
            <p>
              English, Hindi, Punjabi, Gujarati, French, and Spanish support helps more
              patients feel comfortable from the start.
            </p>
          </article>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-title">
          <p className="eyebrow">What We Offer</p>
          <h2>Same core services, presented in a cleaner and more modern way.</h2>
        </div>
        <div className="service-grid">
          {serviceCards.map((service, index) => (
            <article key={service.title} className="service-card">
              <div className={`service-visual service-visual-${index + 1}`} />
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section providers" id="providers">
        <div className="section-title">
          <p className="eyebrow">Providers</p>
          <h2>Explore highly qualified healthcare experts.</h2>
          <p className="section-copy">
            Our team of health professionals have been offering in-person and online mental
            health consultations for over 16 years. They received their education at
            prestigious medical and nursing schools in the United States. Our healthcare
            staff will collaborate with you and your family to provide the best possible
            care that suits you.
          </p>
        </div>

        <div className="provider-layout">
          <div className="provider-highlight">
            <p>Languages Spoken</p>
            <strong>English, Hindi, Punjabi, Gujarati, French and Spanish</strong>
            <a href="#contact">Talk to the clinic</a>
          </div>

          <div className="provider-grid">
            {providers.map((provider, index) => (
              <article key={provider.name} className="provider-card">
                <div className={`provider-avatar provider-avatar-${index + 1}`}>
                  {provider.initials}
                </div>
                <h3>{provider.name}</h3>
                <p>Primary care and patient-centered clinical support.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stories" id="stories">
        <div className="section-title">
          <p className="eyebrow">Patient Stories</p>
          <h2>Feedback that reinforces trust.</h2>
        </div>
        <div className="stories-grid">
          {testimonials.map((quote, index) => (
            <article key={quote} className="story-card">
              <div className={`story-avatar story-avatar-${index + 1}`}>{["AB", "LM", "DR"][index]}</div>
              <p>{quote}</p>
              <span>”</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-title">
          <p className="eyebrow">Contact Us</p>
          <h2>Locations, hours, and a clear next step for patients.</h2>
        </div>

        <div className="contact-grid">
          <div className="map-panel">
            <div className="map-surface">
              <div className="map-card">
                <strong>1380 112th Ave NE Ste 100, Bellevue, WA 98004, USA</strong>
                <a
                  href="https://maps.google.com/?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Directions
                </a>
              </div>
            </div>

            <div className="location-list">
              <p>1380 112th Ave NE, #100 Bellevue, WA 98004</p>
              <p>1314 Central Ave S, #102 Kent, WA 98032</p>
              <p>Phone: (253) 397-8683</p>
              <p>Fax: (253) 342-4353</p>
              <div className="socials">
                <a href="/">f</a>
                <a href="/">t</a>
                <a href="/">in</a>
              </div>
            </div>
          </div>

          <div className="contact-stack">
            <article className="hours-card">
              <h3>Hours of Operation</h3>
              <div>
                <strong>In-Person Visits: Bellevue</strong>
                {hours.map((line) => (
                  <p key={`b-${line}`}>{line}</p>
                ))}
              </div>
              <div>
                <strong>In-Person Visits: Kent</strong>
                {hours.map((line) => (
                  <p key={`k-${line}`}>{line}</p>
                ))}
              </div>
              <div>
                <strong>For Virtual Visits</strong>
                {hours.map((line) => (
                  <p key={`v-${line}`}>{line}</p>
                ))}
              </div>
              <em>We look forward to taking care of you and your family.</em>
            </article>

            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Type your message here..." rows="5" />
              <div className="form-footer">
                <span>Thanks for submitting!</span>
                <button type="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h3>OneStop Medical Services</h3>
          <p>Phone: (253) 397-8683</p>
          <p>Fax: (253) 342-4353</p>
        </div>
        <div>
          <p>1314 Central Ave S, #102 Kent, WA 98032</p>
          <p>1380 112th Ave NE, #100 Bellevue, WA 98004</p>
          <a href="https://ehr.ethizo.com/" target="_blank" rel="noreferrer">
            Onestop Portal
          </a>
        </div>
        <div className="footer-socials">
          <a href="/">t</a>
          <a href="/">in</a>
          <a href="/">f</a>
          <a href="/">ig</a>
        </div>
        <small>©2019 by OneStop Medical Services, LLC.</small>
      </footer>
    </div>
  );
}

export default App;

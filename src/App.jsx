const serviceCards = [
  {
    title: "Weight Loss Program",
    subtitle: "",
    tone: "tone-a",
  },
  {
    title: "Immigration Medical Exam",
    subtitle: "I-693",
    tone: "tone-b",
  },
  {
    title: "Primary Care Services",
    subtitle: "",
    tone: "tone-c",
  },
];

const providers = [
  { name: "Paul Tromba, PA", initials: "PT", tone: "tone-a", size: "large", style: { top: 0, left: 90 } },
  { name: "Sharndeep Chokar, PA", initials: "SC", tone: "tone-b", size: "small", style: { top: 48, left: 250 } },
  { name: "Xan Layugan, NP", initials: "XL", tone: "tone-c", size: "medium", style: { top: 24, right: 70 } },
  { name: "Jamie Chinnick, NP", initials: "JC", tone: "tone-d", size: "medium", style: { top: 170, left: 120 } },
  { name: "Payal Shah, MD", initials: "PS", tone: "tone-e", size: "medium", style: { top: 160, right: 24 } },
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

function App() {
  return (
    <div className="page">
      <header className="masthead">
        <div className="logo-mark">OneStop</div>
        <div className="masthead-copy">
          <p className="masthead-kicker">
            Family Medicine Clinic, Immigration, Labs, Immunizations
          </p>
          <div className="holiday-note">
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
            Onestop Medical Clinic:
            <br />
            <em>Specializing in</em>
            <br />
            Primary Care, Weight Management
            <br />
            and
            <br />
            Immigration Services
          </h1>
          <div className="address-pills">
            <div>1380 112th Ave NE Suite#100, Bellevue, WA 98004</div>
            <div>1314 Central Ave S, #102, Kent, WA 98032</div>
          </div>
        </div>
      </header>

      <nav className="top-nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#policy">Office Policy</a>
        <a href="#services">Services</a>
        <a href="#resources">Resources</a>
        <a href="#providers">Providers</a>
        <a href="#stories">Patient Stories</a>
        <a href="#faq">FAQ</a>
        <a href="#appt">Appt Types</a>
      </nav>

      <section className="intro-bar">
        <div className="intro-copy">
          <p>
            Getting an online health treatment plan is no longer a challenge. Consult our
            highly qualified health care professionals for a personalized treatment plan.
            With or without insurance, you can get the care you choose.
          </p>
          <div className="intro-actions">
            <a href="https://www.zocdoc.com/" target="_blank" rel="noreferrer">
              Book Online
            </a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="family-badge">
          <div className="family-illustration">Care for every stage of life</div>
        </div>
      </section>

      <section className="experts" id="providers">
        <div className="experts-copy">
          <h2>Explore Highly Qualified HealthCare Experts</h2>
          <p>
            Our team of health professionals have been offering in-person and online mental
            health consultations for over 16 years. They received their education at
            prestigious medical and nursing schools in the United States. Our healthcare
            staff will collaborate with you and your family to provide the best possible
            care that suits you.
          </p>
          <a href="#providers-list">Our Providers</a>
          <strong>
            Languages Spoken: English, Hindi, Punjabi, Gujarati, French and Spanish
          </strong>
        </div>

        <div className="provider-cluster" id="providers-list" aria-label="Provider preview">
          <div className="cluster-stem" />
          {providers.map((provider) => (
            <article
              key={provider.name}
              className={`provider-bubble ${provider.size} ${provider.tone}`}
              style={provider.style}
            >
              <span>{provider.initials}</span>
              <small>{provider.name}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="offerings" id="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          {serviceCards.map((service) => (
            <article key={service.title} className="service-card">
              <div className={`service-image ${service.tone}`} />
              <h3>{service.title}</h3>
              {service.subtitle ? <p>{service.subtitle}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="stories" id="stories">
        <div className="stories-shell">
          {testimonials.map((quote, index) => (
            <article key={quote} className="story-card">
              <div className={`story-avatar tone-${String.fromCharCode(97 + index)}`}>
                {["AB", "LM", "DR"][index]}
              </div>
              <p>{quote}</p>
              <span>&rdquo;</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-map">
            <div className="map-card">
              <strong>1380 112th Ave NE Ste 100, Bellevue, WA 98004, USA</strong>
              <a
                href="https://maps.google.com/?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>
          </div>

          <div className="hours-card">
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
            <small>Languages spoken: English, Gujarati, Punjabi, Hindi, French and Spanish</small>
          </div>
        </div>

        <div className="contact-lower">
          <div className="contact-details">
            <p>1380 112th Ave NE, #100 Bellevue, WA 98004</p>
            <p>&amp;</p>
            <p>1314 Central Ave S, #102 Kent, WA 98032</p>
            <p>Phone: (253) 397-8683</p>
            <p>Fax: (253) 342-4353</p>
            <div className="socials">
              <a href="/">f</a>
              <a href="/">t</a>
              <a href="/">in</a>
            </div>
          </div>

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
      </section>

      <footer className="site-footer">
        <h3>OneStop Medical Services</h3>
        <p>Phone: (253) 397-8683</p>
        <p>Fax: (253) 342-4353</p>
        <p>1314 Central Ave S, #102 Kent, WA 98032</p>
        <p>&amp;</p>
        <p>1380 112th Ave NE, #100 Bellevue, WA 98004</p>
        <a href="https://ehr.ethizo.com/" target="_blank" rel="noreferrer">
          Onestop Portal
        </a>
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

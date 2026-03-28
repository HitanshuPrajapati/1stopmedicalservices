import { useEffect, useState } from "react";

const services = [
  {
    title: "Primary Care",
    description:
      "Routine wellness visits, preventive screenings, medication management, and ongoing support for common health concerns.",
  },
  {
    title: "Immigration Medical Exams",
    description:
      "I-693 exams, immunizations, and paperwork ready in 4-5 business days.",
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
  { name: "Jamie Chinnick, NP", role: "Nurse Practitioner" },
  { name: "Paul Tromba, PA", role: "Physician Assistant" },
  { name: "Xan Layugan, NP", role: "Nurse Practitioner" },
  { name: "Sharndeep Chokar, PA", role: "Physician Assistant" },
];

const testimonials = [
  "The staff was knowledgeable, friendly, and efficient. They made sure I had the information and guidance I needed.",
  "Very happy with my experience. The process felt easy and simple, and the team was helpful throughout.",
  "Communication and professionalism stood out. I felt supported and well cared for during my visits.",
];

const carouselSlides = [
  {
    image: createPlaceholderImage("#d5ecf0", "#1f5d74", "Reception"),
  },
  {
    image: createPlaceholderImage("#f7e1c8", "#9c4e2d", "Family Care"),
  },
  {
    image: createPlaceholderImage("#dae4f4", "#1f3f8b", "Consultation"),
  },
  {
    image: createPlaceholderImage("#ddecd7", "#386641", "Wellness"),
  },
  {
    image: createPlaceholderImage("#f0d7de", "#8a2846", "Clinic Visit"),
  },
];

const hours = [
  "Monday: 8:00AM-6:00PM",
  "Tuesday: 8:00AM-6:00PM",
  "Wednesday: 8:00AM-6:00PM",
  "Thursday: 8:00AM-6:00PM",
  "Friday: 8:00AM-6:00PM",
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top">
          <LogoMark />
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#office-policy">Office Policy</a>
          <a href="#services">Services</a>
          <a href="#resources">Resources</a>
          <a href="#providers">Providers</a>
          <a href="#stories">Patient Stories</a>
          <a href="#faq">FAQ</a>
          <a href="#appt-types">Appointment Types</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Caring for you and your family, every step of the way.</h1>
            <p className="hero-text">
              Getting an online health treatment plan is no longer a challenge. Consult
              our highly qualified health care professionals for a personalized
              treatment plan. With or without insurance, you can get the care you
              choose!
            </p>

            <div className="hero-actions">
              <a
                className="pill"
                href="https://www.zocdoc.com/"
                target="_blank"
                rel="noreferrer"
              >
                New Patient Booking
              </a>
              <a className="pill pill-ghost" href="#contact">
                Contact Us
              </a>
            </div>

            <div className="hero-note">
              <strong>Languages spoken</strong>
              <p>English, Hindi, Punjabi, Gujarati, French, and Spanish</p>
            </div>
          </div>

          <div className="hero-stage">
            <div className="carousel-card">
              <div className="carousel-media">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {carouselSlides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={`Clinic placeholder slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>What our clinic offers.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="section-action">
            <a className="pill" href="#services">
              See more
            </a>
          </div>
        </section>

        <section className="section providers-section" id="providers">
          <div className="section-head">
            <p className="eyebrow">Providers</p>
            <h2>Meet our healthcare providers</h2>
          </div>

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
        </section>

        <section className="section stories-section" id="stories">
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

function LogoMark() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 380 180"
      role="img"
      aria-label="OneStop Medical Services logo"
    >
      <defs>
        <linearGradient id="logoRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67a7dd" />
          <stop offset="100%" stopColor="#2b6cb0" />
        </linearGradient>
      </defs>
      <circle cx="95" cy="90" r="72" fill="#ffffff" stroke="url(#logoRing)" strokeWidth="6" />
      <circle cx="58" cy="52" r="6" fill="#1f9ad7" />
      <rect x="52" y="59" width="12" height="26" rx="4" fill="#1f9ad7" />
      <rect x="46" y="63" width="6" height="20" rx="3" fill="#1f9ad7" />
      <rect x="64" y="63" width="6" height="20" rx="3" fill="#1f9ad7" />
      <rect x="53" y="84" width="4" height="20" rx="2" fill="#1f9ad7" />
      <rect x="59" y="84" width="4" height="20" rx="2" fill="#1f9ad7" />
      <circle cx="82" cy="52" r="6" fill="#1f9ad7" />
      <rect x="76" y="59" width="12" height="26" rx="4" fill="#1f9ad7" />
      <rect x="70" y="63" width="6" height="20" rx="3" fill="#1f9ad7" />
      <rect x="88" y="63" width="6" height="20" rx="3" fill="#1f9ad7" />
      <rect x="77" y="84" width="4" height="20" rx="2" fill="#1f9ad7" />
      <rect x="83" y="84" width="4" height="20" rx="2" fill="#1f9ad7" />
      <circle cx="100" cy="71" r="4" fill="#1f9ad7" />
      <rect x="96" y="76" width="8" height="18" rx="3" fill="#1f9ad7" />
      <rect x="97" y="92" width="3" height="14" rx="1.5" fill="#1f9ad7" />
      <rect x="100" y="92" width="3" height="14" rx="1.5" fill="#1f9ad7" />
      <circle cx="160" cy="70" r="14" fill="#1f3f8b" />
      <path d="M132 138c2-28 18-45 40-45s38 17 40 45H132Z" fill="#1f3f8b" />
      <rect x="122" y="102" width="48" height="14" rx="7" fill="#1f3f8b" />
      <path d="M168 98h12v26c0 10-8 18-18 18h-6v-10h5c4 0 7-3 7-7V98Z" fill="#ffffff" />
      <path d="M167 96c0-4 3-7 7-7s7 3 7 7v14h-14V96Z" fill="#ffffff" />
      <circle cx="174" cy="129" r="5" fill="#ffffff" />
      <text x="220" y="74" fill="#c81d1d" fontSize="24" fontWeight="700" fontFamily="Georgia, serif">
        ONESTOP
      </text>
      <text x="220" y="106" fill="#28a7df" fontSize="24" fontWeight="700" fontFamily="Georgia, serif">
        MEDICAL
      </text>
    </svg>
  );
}

function createPlaceholderImage(background, accent, label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 640" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="900" height="640" fill="url(#bg)" />
      <circle cx="135" cy="120" r="70" fill="${accent}" fill-opacity="0.14" />
      <circle cx="760" cy="130" r="96" fill="${accent}" fill-opacity="0.16" />
      <circle cx="780" cy="520" r="84" fill="${accent}" fill-opacity="0.12" />
      <rect x="88" y="138" width="724" height="366" rx="36" fill="#ffffff" fill-opacity="0.74" />
      <rect x="140" y="208" width="240" height="18" rx="9" fill="${accent}" fill-opacity="0.85" />
      <rect x="140" y="248" width="320" height="18" rx="9" fill="${accent}" fill-opacity="0.28" />
      <rect x="140" y="282" width="278" height="18" rx="9" fill="${accent}" fill-opacity="0.2" />
      <rect x="140" y="360" width="154" height="54" rx="27" fill="${accent}" fill-opacity="0.9" />
      <rect x="520" y="198" width="210" height="210" rx="30" fill="${accent}" fill-opacity="0.18" />
      <rect x="562" y="244" width="126" height="126" rx="24" fill="${accent}" fill-opacity="0.82" />
      <text x="140" y="468" fill="${accent}" font-size="42" font-family="Georgia, serif" font-weight="700">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

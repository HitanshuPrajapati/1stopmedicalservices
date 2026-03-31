import { useEffect, useState } from "react";
import payalShahImage from "./assets/providers/payal-shah.avif";
import jamieChinnickImage from "./assets/providers/jamie-chinnick.avif";
import paulTrombaImage from "./assets/providers/paul-tromba.avif";
import xanLayuganImage from "./assets/providers/xan-layugan.avif";
import sharndeepChokarImage from "./assets/providers/sharndeep-chokar.avif";

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
  { name: "Payal Shah, MD", role: "Physician", image: payalShahImage },
  { name: "Jamie Chinnick, NP", role: "Nurse Practitioner", image: jamieChinnickImage },
  { name: "Paul Tromba, PA", role: "Physician Assistant", image: paulTrombaImage },
  { name: "Xan Layugan, NP", role: "Nurse Practitioner", image: xanLayuganImage },
  { name: "Sharndeep Chokar, PA", role: "Physician Assistant", image: sharndeepChokarImage },
];

const testimonials = [
  "Great experience! Knowledgeable doctor, personal touch made the treatment comfortable. Highly recommend. Definitely 5 star treatment.",
  "I went for my physical, and Dr. Shah was very thorough. The office is cozy and welcoming. She takes care my entire family! So glad we found her.",
  "Knowledgeable doctor. She is very caring and takes the time to explain treatment plan. I would recommend her to everyone.",
  "Great Bedside manner and Listens!!!!",
  "Dr Payal is a very nice doctor. I met her around a year ago and she is so nice, friendly, and she works great with patients and I honestly love her clinic. Overall, I would say that this is one of the best doctors out in the Seattle area. Thank you for your services",
  "We've been seeing Dr. Shah since 2016. She has always taken exceptionally good care of me & my family, listened to our concerns, and provided us with excellent and gentle feedback. She takes the time to educate us about our choices so we can make informed decisions, she brings awareness to cost implications, and she just makes us feel secure, welcome, and comfortable. She is absolutely fantastic and I could not recommend her more highly. It always feels like she really cares about our family. We feel really lucky to have found her!",
  "So happy that she speaks Hindi. It makes it much easier for my mom to explain her issues.",
  "Dr. Shah was my PCP when she worked with the Wellness Center on the Microsoft campus. When I was no longer covered through that insurance plan, I could not find another doctor that provided the same quality of care. I was thrilled to find her new office was covered by my current insurance provider. I cannot say enough wonderful things about Dr. Shah. She has helped coordinate my care by really listening to me, ordering proper testing, and diagnosing my core issues. Finding a good doctor is not easy task. Dr. Shah has helped me address my autoimmune problems in a manner that has greatly improved my life.",
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
  const [isNavPinned, setIsNavPinned] = useState(false);
  const [activeStory, setActiveStory] = useState(3);
  const [storyTransitionEnabled, setStoryTransitionEnabled] = useState(true);
  const storyDotCount = Math.ceil(testimonials.length / 3);
  const storyLoopOffset = 3;
  const storySlides = [
    ...testimonials.slice(-storyLoopOffset),
    ...testimonials,
    ...testimonials.slice(0, storyLoopOffset),
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavPinned(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStoryTransitionEnabled(true);
      setActiveStory((current) => {
        const next = current + 1;
        return next > testimonials.length + storyLoopOffset ? storyLoopOffset + 1 : next;
      });
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleStoryTransitionEnd = () => {
    if (activeStory === testimonials.length + storyLoopOffset) {
      setStoryTransitionEnabled(false);
      setActiveStory(storyLoopOffset);
    }
  };

  useEffect(() => {
    if (storyTransitionEnabled) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      setStoryTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [storyTransitionEnabled]);

  useEffect(() => {
    if (activeStory <= testimonials.length + storyLoopOffset) {
      return;
    }

    setStoryTransitionEnabled(false);
    setActiveStory(storyLoopOffset);
  }, [activeStory]);

  const activeStoryDot = Math.floor(
    ((activeStory - storyLoopOffset + testimonials.length) % testimonials.length) / 3,
  );

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top">
          <LogoMark />
        </a>

        <nav className={`nav${isNavPinned ? " nav-pinned" : ""}`} aria-label="Primary">
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
            {providers.map((provider) => (
              <article key={provider.name} className="provider-card">
                <div className="provider-chip">
                  <img src={provider.image} alt={provider.name} />
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
            <h2>Hear from our patients</h2>
          </div>

          <div className="stories-carousel">
            <div className="stories-viewport">
              <div
                className={`stories-track${storyTransitionEnabled ? "" : " no-transition"}`}
                style={{ "--story-index": activeStory }}
                onTransitionEnd={handleStoryTransitionEnd}
              >
                {storySlides.map((quote, index) => (
                  <article
                    key={`${index}-${quote.slice(0, 24)}`}
                    className={`story-card story-card-tone-${(index % 8) + 1}${quote.length < 110 ? " story-card-short" : ""}${quote.length > 220 ? " story-card-long" : ""}`}
                  >
                    <p>{quote}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="story-dots" aria-label="Patient experience carousel position">
            {Array.from({ length: storyDotCount }, (_, index) => (
              <span key={index} className={index === activeStoryDot ? "is-active" : ""} />
            ))}
          </div>
        </section>

        <section className="section locations-section" id="locations">
          <div className="section-head">
            <p className="eyebrow">Locations & Hours</p>
            <h2>Where to find us</h2>
          </div>

          <div className="locations-grid">
            <div className="locations-stack">
              <article className="location-card">
                <div className="location-card-body">
                  <div className="location-card-copy">
                    <strong>Bellevue Clinic</strong>
                    <p>1380 112th Ave NE, Suite 100<br />Bellevue, WA 98004</p>
                    <a
                      className="pill location-pill"
                      href="https://maps.google.com/?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                  <div className="location-map-embed" aria-label="Bellevue clinic map">
                    <iframe
                      title="Bellevue Clinic Map"
                      src="https://www.google.com/maps?q=1380%20112th%20Ave%20NE%20Suite%20100%20Bellevue%20WA%2098004&z=15&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </article>

              <article className="location-card">
                <div className="location-card-body">
                  <div className="location-card-copy">
                    <strong>Kent Clinic</strong>
                    <p>1314 Central Ave S, Suite 102<br />Kent, WA 98032</p>
                    <a
                      className="pill location-pill"
                      href="https://maps.google.com/?q=1314%20Central%20Ave%20S%20Suite%20102%20Kent%20WA%2098032"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                  <div className="location-map-embed" aria-label="Kent clinic map">
                    <iframe
                      title="Kent Clinic Map"
                      src="https://www.google.com/maps?q=1314%20Central%20Ave%20S%20Suite%20102%20Kent%20WA%2098032&z=15&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </article>
            </div>

            <article className="location-card location-card-hours">
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
            <h2>Reach us directly or send a message</h2>
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
              <strong>Email</strong>
              <a href="mailto:info@1stopmedicalservices.com">
                info@1stopmedicalservices.com
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

    </div>
  );
}

export default App;

function LogoMark() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 380 250"
      role="img"
      aria-label="OneStop Medical Services logo"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="logoOvalFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fbfdff" />
        </linearGradient>
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#183b56" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse cx="190" cy="125" rx="155" ry="72" fill="url(#logoOvalFill)" filter="url(#logoShadow)" />
      <ellipse cx="190" cy="125" rx="154" ry="71" fill="none" stroke="rgba(24,59,86,0.06)" strokeWidth="1.5" />

      <circle cx="132" cy="125" r="64" fill="#ffffff" stroke="#5b9bd5" strokeWidth="5" />

      <circle cx="95" cy="89" r="5.5" fill="#1f9ad7" />
      <path d="M88 97h14v28H88z" fill="#1f9ad7" />
      <path d="M84 101h4v21h-4zM102 101h4v21h-4z" fill="#1f9ad7" />
      <path d="M91 124h3v18h-3zM96 124h3v18h-3z" fill="#1f9ad7" />

      <circle cx="116" cy="87" r="5.5" fill="#1f9ad7" />
      <path d="M108 95h16v31h-16z" fill="#1f9ad7" />
      <path d="M104 99h4v23h-4zM124 99h4v23h-4z" fill="#1f9ad7" />
      <path d="M112 126h3v18h-3zM117 126h3v18h-3z" fill="#1f9ad7" />

      <circle cx="139" cy="101" r="4.5" fill="#1f9ad7" />
      <path d="M134 107h10v22h-10z" fill="#1f9ad7" />
      <path d="M136 128h3v16h-3zM140 128h3v16h-3z" fill="#1f9ad7" />

      <circle cx="188" cy="98" r="15" fill="#1f3f8b" />
      <path d="M160 162c2-33 22-52 48-52s45 19 48 52h-96Z" fill="#1f3f8b" />
      <rect x="150" y="120" width="58" height="14" rx="7" fill="#1f3f8b" />
      <path d="M205 116h12v32c0 12-10 22-22 22h-6v-10h5c6 0 11-5 11-11v-33Z" fill="#ffffff" />
      <path d="M204 113c0-5 4-9 8.5-9s8.5 4 8.5 9v17h-17V113Z" fill="#ffffff" />
      <path d="M211 114h4v40h-4z" fill="#ffffff" />
      <circle cx="213" cy="162" r="6" fill="#ffffff" />

      <text x="235" y="112" fill="#c81d1d" fontSize="29" fontWeight="700" fontFamily="Georgia, serif">
        ONESTOP
      </text>
      <text x="235" y="144" fill="#28a7df" fontSize="29" fontWeight="700" fontFamily="Georgia, serif">
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

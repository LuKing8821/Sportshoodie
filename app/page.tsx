"use client";

import { FormEvent, useMemo, useState } from "react";

const options = {
  Fabric: ["Quick-dry performance", "Cotton jersey", "Recycled polyester", "Cotton blend"],
  Decoration: ["All-over sublimation", "Screen print", "Embroidery", "Heat transfer"],
  Fit: ["Unisex athletic", "Men's athletic", "Women's fitted", "Youth sizing"],
  Finish: ["Custom neck label", "Woven patch", "Player names & numbers", "Retail packaging"],
} as const;

const faqs = [
  [
    "What is the minimum order quantity for custom T-shirts?",
    "Yinshan helps brands, teams, and events plan the right production quantity. MOQ depends on fabric, decoration method, sizing, and packaging requirements, so our product team confirms it with your brief.",
  ],
  [
    "Can you make the artwork for our custom T-shirts?",
    "Yes. Our design team can develop apparel artwork from a logo, rough idea, reference image, or existing brand system. We prepare production-ready files and confirm placement before sampling.",
  ],
  [
    "Which printing method is best for sports T-shirts?",
    "For full-color team jerseys, all-over sublimation is a durable choice. Screen print suits bold, repeat graphics; heat transfer handles names and numbers; embroidery works well for premium logo details. We recommend the right method after reviewing the fabric and use case.",
  ],
  [
    "Can Yinshan ship custom event shirts internationally?",
    "Yes. We coordinate packing and delivery for teams, events, and brands worldwide, with air, ocean, rail, express, DDP, and FOB options available according to the shipment plan.",
  ],
] as const;

const stats = [
  ["1986", "Established in Ningbo, China"],
  ["4", "Design studios"],
  ["5", "Manufacturing factories"],
  ["25", "Production lines"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Yinshan Sportswear",
      url: "https://www.customisedsportswear.com",
      logo: "https://www.customisedsportswear.com/brand/yinshan-logo.png",
      foundingDate: "1986",
      description:
        "Yinshan Sportswear designs and manufactures custom sportswear, sports teamwear, promotional event clothing, workwear, uniforms, fitness apparel, and custom T-shirts.",
      email: "evan@chinayinshan.com",
      telephone: "+86-137-7700-4477",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Room 1105-1107, Block G, 959 Creative Park, Chengxin Road 959",
        addressLocality: "Ningbo",
        addressCountry: "CN",
      },
    },
    {
      "@type": "Product",
      name: "Custom T-Shirts",
      brand: { "@type": "Brand", name: "Yinshan Sportswear" },
      description:
        "Custom T-shirt design and manufacturing for sports teams, races, events, staff uniforms, retail brands, and promotional campaigns.",
      manufacturer: { "@type": "Organization", name: "Yinshan Sportswear" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  const [selected, setSelected] = useState<Record<keyof typeof options, number>>({
    Fabric: 0,
    Decoration: 0,
    Fit: 0,
    Finish: 0,
  });
  const [sent, setSent] = useState(false);
  const brief = useMemo(
    () =>
      Object.entries(options)
        .map(([label, values]) => `${label}: ${values[selected[label as keyof typeof options]]}`)
        .join(" | "),
    [selected],
  );

  function requestQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Custom T-Shirt enquiry from ${form.get("company")}`);
    const body = encodeURIComponent(
      `Company / brand: ${form.get("company")}\nEmail: ${form.get("email")}\nQuantity: ${form.get("quantity")}\n\nCustom direction:\n${brief}\n\nProject notes:\n${form.get("notes")}`,
    );
    setSent(true);
    window.location.href = `mailto:evan@chinayinshan.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Yinshan Sportswear home">
            <img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear, since 1986" />
          </a>
          <div className="nav-links">
            <a href="#custom">Custom T-shirts</a>
            <a href="#capability">Capabilities</a>
            <a href="#process">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="outline-button" href="#quote">Get a quote <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">CUSTOM SPORTSWEAR MANUFACTURER SINCE 1986</p>
            <h1>Custom T-Shirts for teams, events, and brands.</h1>
            <p className="hero-lead">
              From artwork and fabric sourcing to printing, embroidery, inspection, and delivery, Yinshan makes custom T-shirts ready for the way your people move.
            </p>
            <div className="hero-actions">
              <a className="button button-coral" href="#quote">Start your T-shirt brief <span aria-hidden="true">↓</span></a>
              <a className="quiet-link" href="#capability">Explore our capabilities <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-notes" aria-label="Custom T-shirt capabilities">
              <span>DESIGN SUPPORT</span><i /> <span>FABRIC SOURCING</span><i /> <span>PRINT & EMBROIDERY</span>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/custom-t-shirts-hero.png" alt="Three custom performance T-shirts in white, green, and red" />
            <div className="image-label label-top"><span>01</span><strong>FULL CUSTOM</strong><small>DESIGN TO DELIVERY</small></div>
            <div className="image-label label-bottom"><span>YINSHAN</span><strong>SPORTSWEAR</strong><small>NINGBO, CHINA</small></div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true"><span>CUSTOM T-SHIRTS</span><b>◆</b><span>TEAMWEAR</span><b>◆</b><span>EVENT APPAREL</span><b>◆</b><span>PRINT, STITCH, DELIVER</span></div>
      </section>

      <section className="intro shell">
        <p className="eyebrow">ONE PARTNER, EVERY PRODUCTION STEP</p>
        <div>
          <h2>Make the shirt people remember.</h2>
          <p>Custom T-shirts carry a team identity, a race story, or a brand’s first impression. Our product teams turn your starting point into a production-ready garment with clarity at every decision.</p>
        </div>
        <div className="intro-side">
          <p>Bring a logo, a moodboard, a hand sketch, or just an occasion. We can recommend fabric, fit, and decoration options that suit your budget, audience, and deadline.</p>
          <a className="arrow-link" href="#custom">Build a custom specification <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="programs" aria-label="Custom T-shirt programs">
        <div className="shell section-heading">
          <div><p className="eyebrow">CUSTOM T-SHIRT PROGRAMS</p><h2>Built around where the shirt goes next.</h2></div>
          <p>Different moments call for different fabric weights, fits, and decoration systems. Start with the use case and let the product follow.</p>
        </div>
        <div className="shell program-grid">
          <article className="program-card card-green"><span>01</span><h3>Sports teamwear</h3><p>Performance jerseys, training tees, player names, numbers, sponsor systems, and repeat orders.</p><a href="/solutions/custom-sports-team-t-shirts">Explore team T-shirts <b>→</b></a></article>
          <article className="program-card card-paper"><span>02</span><h3>Race & event shirts</h3><p>Participant T-shirts, staff uniforms, sponsor artwork, size-sorted packs, and event-date delivery planning.</p><a href="/solutions/custom-event-t-shirts">Explore event T-shirts <b>→</b></a></article>
          <article className="program-card card-pink"><span>03</span><h3>Private label T-shirts</h3><p>Custom labels, retail-ready packaging, consistent colours, quality checks, and scalable brand production.</p><a href="/solutions/private-label-t-shirts">Explore private label <b>→</b></a></article>
          <article className="program-card card-ink"><span>04</span><h3>Promo & workwear</h3><p>Campaign shirts, staff uniforms, activation merch, and corporate clothing programs that show up polished.</p><a href="/solutions/promotional-t-shirts">Explore promotional T-shirts <b>→</b></a></article>
        </div>
      </section>

      <section className="customizer shell" id="custom">
        <div className="customizer-copy">
          <p className="eyebrow">PLAN YOUR CUSTOM T-SHIRT</p>
          <h2>Choose the signals. We’ll develop the garment.</h2>
          <p>Use this as a simple brief starter. It helps our team understand the kind of T-shirt you need before we recommend detailed specifications.</p>
          <div className="customizer-pill">Your current brief <strong>{brief}</strong></div>
        </div>
        <div className="customizer-options">
          {Object.entries(options).map(([label, values], index) => {
            const key = label as keyof typeof options;
            return <div className="choice-row" key={label}>
              <div><span>0{index + 1}</span><h3>{label}</h3></div>
              <div className="choice-buttons">
                {values.map((value, optionIndex) => <button key={value} type="button" onClick={() => setSelected((current) => ({ ...current, [key]: optionIndex }))} className={selected[key] === optionIndex ? "is-selected" : ""}>{value}</button>)}
              </div>
            </div>;
          })}
        </div>
      </section>

      <section className="capability" id="capability">
        <div className="shell capability-layout">
          <div className="capability-title"><p className="eyebrow">THE YINSHAN DIFFERENCE</p><h2>Design intent, factory control, one accountable team.</h2></div>
          <div className="capability-list">
            <article><span>01</span><div><h3>Artwork that works in production</h3><p>Our designers adapt your brand assets for garment panels, colour matching, print files, sponsor layouts, and placement approvals.</p></div></article>
            <article><span>02</span><div><h3>Fabric chosen for the end use</h3><p>We help compare performance knit, cotton jersey, recycled polyester, mesh, and blends by weight, feel, stretch, wash needs, and target price.</p></div></article>
            <article><span>03</span><div><h3>Print and embroidery under one roof</h3><p>Sublimation, screen print, digital printing, heat transfer, embroidery, patches, labels, and finishing are coordinated as one garment system.</p></div></article>
            <article><span>04</span><div><h3>Ready for event day and repeat order</h3><p>Sampling, quality inspection, size sorting, packaging, carton marks, and international freight planning keep the final handoff organized.</p></div></article>
          </div>
        </div>
      </section>

      <section className="stats shell" aria-label="Yinshan Sportswear at a glance">
        <div><p className="eyebrow">YINSHAN AT A GLANCE</p><h2>Custom sportswear is all we do.</h2></div>
        <div className="stat-grid">{stats.map(([number, label]) => <article key={number}><strong>{number}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <p className="eyebrow">HOW CUSTOM T-SHIRT MANUFACTURING WORKS</p>
          <div className="process-heading"><h2>A clear route from brief to bulk production.</h2><p>Our product and production teams keep the key decisions visible: design, material, sample approval, quality, and delivery.</p></div>
          <div className="process-grid">
            <article><span>01</span><h3>Share the brief</h3><p>Tell us who will wear it, when it is needed, and what you want it to communicate.</p></article>
            <article><span>02</span><h3>Develop & sample</h3><p>We confirm fabric, fit, artwork, and decoration, then make a sample for approval.</p></article>
            <article><span>03</span><h3>Produce & inspect</h3><p>Production is coordinated with in-line quality checks and final garment inspection.</p></article>
            <article><span>04</span><h3>Pack & deliver</h3><p>We prepare the right packing, carton sorting, and shipment plan for the destination.</p></article>
          </div>
        </div>
      </section>

      <section className="proof shell">
        <p className="eyebrow">EVENT & SPORTSWEAR EXPERIENCE</p>
        <div><h2>For the programmes people train for, travel for, and remember.</h2><p>Yinshan’s custom sportswear experience spans teamwear, race apparel, promotional events, activewear, uniforms, and projects for major motorsport and endurance events.</p></div>
        <p className="proof-note">F1 · Formula E · MotoGP · NASCAR · Boston Marathon</p>
      </section>

      <section className="faq shell" id="faq">
        <div><p className="eyebrow">CUSTOM T-SHIRT FAQ</p><h2>Answers buyers can act on.</h2><p>Clear details help customers, search engines, and AI assistants understand how your custom T-shirt project can move forward.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote" id="quote">
        <div className="shell quote-grid">
          <div><p className="eyebrow">START YOUR CUSTOM T-SHIRT PROJECT</p><h2>Ready when your idea is.</h2><p>Send your starting point. A Yinshan product specialist will review your custom T-shirt brief and reply within one business day.</p><div className="quote-contact"><a href="mailto:evan@chinayinshan.com">evan@chinayinshan.com</a><a href="tel:+8613777004477">+86 137 7700 4477</a></div></div>
          <form onSubmit={requestQuote}>
            <label>Company or brand<input required name="company" placeholder="Your brand or event" /></label>
            <label>Work email<input required type="email" name="email" placeholder="name@company.com" /></label>
            <label>Estimated quantity<select name="quantity" defaultValue="500 - 1,000"><option>Under 500</option><option>500 - 1,000</option><option>1,000 - 5,000</option><option>5,000+</option></select></label>
            <label>Project notes<textarea name="notes" rows={4} placeholder="Event date, use case, required details, or links to your artwork" /></label>
            <button className="button button-coral" type="submit">{sent ? "Email brief prepared" : "Email my project brief"} <span aria-hidden="true">↗</span></button>
            <small>Submitting prepares an email to our team with your selected T-shirt specifications.</small>
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <a className="footer-brand" href="#top"><img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear" /></a>
        <div><strong>Custom sportswear manufacturer</strong><p>Design, fabric, artwork, print, embroidery, manufacture, and delivery.</p></div>
        <div><a href="https://www.customisedsportswear.com" target="_blank" rel="noreferrer">customisedsportswear.com</a><p>© {new Date().getFullYear()} Ningbo Yinshan Garments Factory</p></div>
      </footer>
    </main>
  );
}

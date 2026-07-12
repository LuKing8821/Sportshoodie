import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";

const process = [
  ["01", "Design & sample room", "Pattern review, fit discussion, trim planning, and sample development before bulk production.", "/factory/design-studio.jpg"],
  ["02", "Cutting center", "Bulk fabric is organized, layered, and cut with controlled markers before moving into sewing.", "/factory/cutting-center.jpg"],
  ["03", "Sewing center", "Production lines handle hoodie panels, pockets, hoods, trims, and decoration-ready construction.", "/factory/sewing-center.jpg"],
  ["04", "Line production", "Operators work through repeatable stations for stable quality across team and brand orders.", "/factory/sewing-line.jpg"],
  ["05", "Finishing & pressing", "Garments are shaped, pressed, checked, and prepared for packing or retail presentation.", "/factory/finishing-press.jpg"],
  ["06", "Warehouse & delivery", "Materials, cartons, size sorting, and shipment planning are coordinated for international delivery.", "/factory/material-warehouse.jpg"],
] as const;

const stats = [
  ["10+", "years in garment supply chain"],
  ["500", "units flexible MOQ planning"],
  ["30", "countries delivered"],
  ["1", "factory-direct design and production team"],
] as const;

export const metadata: Metadata = {
  title: "Factory Tour | Ningbo Yinshan Garments Factory for Custom Hoodies",
  description:
    "See Ningbo Yinshan Garments Factory, from design and sampling to cutting, sewing, finishing, inspection, packing, and custom hoodie delivery.",
  alternates: { canonical: `${baseUrl}/factory` },
  openGraph: {
    title: "Factory Tour | Ningbo Yinshan Garments Factory",
    description: "Factory-direct custom hoodie design, production, inspection, packing, and delivery.",
    url: `${baseUrl}/factory`,
    images: [{ url: "/factory/yinshan-factory-exterior.jpg", width: 1955, height: 677 }],
  },
};

export default function FactoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Ningbo Yinshan Garments Factory tour",
    description:
      "Factory-direct design and production services for custom athletic hoodies, including sampling, cutting, sewing, finishing, inspection, packing, and delivery.",
    publisher: {
      "@type": "Organization",
      name: "Ningbo Yinshan Garments Factory",
      address: { "@type": "PostalAddress", addressLocality: "Ningbo", addressCountry: "CN" },
      email: "Evan.qiu@chinayinshan.com",
    },
  };

  return (
    <main className="landing factory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="landing-nav wrap">
        <Link className="brand" href="/"><span>V</span>VANTAWEAR</Link>
        <div className="landing-actions compact">
          <Link className="text-link dark-link" href="/">Main site <span>→</span></Link>
          <Link className="nav-cta dark" href="/#quote">Get a quote <b>↗</b></Link>
        </div>
      </nav>

      <section className="factory-hero">
        <img src="/factory/yinshan-factory-exterior.jpg" alt="Ningbo Yinshan Garments Factory exterior in Ningbo, China" />
        <div className="wrap factory-hero-copy">
          <p className="eyebrow">FACTORY-DIRECT DESIGN & PRODUCTION</p>
          <h1>Ningbo Yinshan Garments Factory</h1>
          <p>
            A factory-backed custom hoodie partner in Ningbo, China, connecting design support,
            sampling, cutting, sewing, finishing, inspection, packing, and export delivery.
          </p>
        </div>
      </section>

      <section className="wrap factory-stats">
        {stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
      </section>

      <section className="wrap factory-intro">
        <div>
          <p className="eyebrow">WHY BUYERS TRUST THE PROCESS</p>
          <h2>One accountable path from concept to shipment.</h2>
        </div>
        <p>
          Vantawear is built for brands, events, corporate teams, clubs, and private label programs
          that need more than a logo print. The factory team helps turn product ideas into physical
          garments with fabric advice, pattern planning, production control, quality checks, and
          packaging options aligned to the buyer's schedule.
        </p>
      </section>

      <section className="factory-capabilities">
        <div className="wrap factory-capability-head">
          <p className="eyebrow">DESIGN · CUSTOM · PRODUCTION</p>
          <h2>Real factory space behind every custom program.</h2>
          <p>
            Buyers can see where ideas become samples, where fabric becomes cut parts,
            and where hoodie orders move through sewing, finishing, inspection, and packing.
          </p>
        </div>
        <div className="wrap factory-capability-grid">
          <article>
            <img src="/factory/design-studio.jpg" alt="Design studio and sample development room at Yinshan Garments" />
            <span>01 DESIGN</span>
            <h3>Design and sample development</h3>
            <p>Concept review, pattern planning, fit adjustment, trims, labels, and sample details are handled before bulk production.</p>
          </article>
          <article>
            <img src="/factory/cutting-center.jpg" alt="Cutting center at Yinshan Garments Factory" />
            <span>02 CUSTOM</span>
            <h3>Custom details made production-ready</h3>
            <p>Logo placement, printing, embroidery, color blocking, fabric choices, packaging, and size planning are translated into repeatable specs.</p>
          </article>
          <article>
            <img src="/factory/sewing-line.jpg" alt="Sewing production line at Yinshan Garments Factory" />
            <span>03 PRODUCTION</span>
            <h3>Controlled sewing and finishing</h3>
            <p>Cutting, sewing, pressing, inspection, packing, and delivery stay connected so teamwear and brand orders remain consistent.</p>
          </article>
        </div>
      </section>

      <section className="factory-process">
        <div className="wrap">
          <p className="eyebrow">PRODUCTION FLOW</p>
          <h2>Design, produce, inspect, and deliver.</h2>
          <div className="factory-process-grid">
            {process.map(([n, title, text, image]) => (
              <article key={title}>
                <img src={image} alt={`${title} at Ningbo Yinshan Garments Factory`} />
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap factory-gallery">
        <img src="/factory/detail-stitching.jpg" alt="Close-up garment stitching detail" />
        <img src="/factory/production-line-hanging.jpg" alt="Automated hanging garment production line" />
        <div>
          <p className="eyebrow">CUSTOM HOODIE PROGRAMS</p>
          <h2>Built for repeatable quality.</h2>
          <p>
            Use this factory capability for sports hoodies, event merchandise, corporate gifts,
            private label sportswear, teamwear, and branded apparel programs that need stable
            production plus hands-on product support.
          </p>
          <Link className="button primary" href="/#quote">Request a factory-direct plan</Link>
        </div>
      </section>

      <footer className="wrap"><Link className="brand" href="/"><span>V</span>VANTAWEAR</Link><p>Factory-direct custom athletic apparel from Ningbo, China.</p><p>© 2026 YINSHAN GARMENT</p></footer>
    </main>
  );
}

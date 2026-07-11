import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";

const pages = {
  "custom-team-hoodies": {
    title: "Custom Team Hoodies for Sports Clubs and Event Crews",
    description:
      "Design custom team hoodies with flexible MOQ, performance fabrics, logo decoration, size planning, packaging, and international delivery.",
    h1: "Custom team hoodies for clubs, crews, and growing communities",
    intro:
      "Vantawear builds custom athletic hoodies for teams that need reliable fit, repeatable quality, and brand-ready decoration across bulk orders.",
    bullets: [
      "Flexible order planning starting from 500 units",
      "Pullover, full-zip, relaxed, cropped, youth, and inclusive sizing options",
      "Screen print, digital print, 3D embroidery, woven labels, hangtags, and packaging",
      "Air, ocean, rail, express, DDP, and FOB delivery options",
    ],
    sections: [
      ["Best for", "Sports clubs, school teams, marathon crews, tournament staff, gyms, and fan merchandise programs."],
      ["Production approach", "Start with fabric and silhouette, confirm decoration placement, approve a sample, then move into traceable production and inspection."],
      ["Why it ranks", "This page answers buyer questions around custom team hoodies, bulk quantities, decoration, sizing, and delivery in one concise source."],
    ],
    faqs: [
      ["What is the MOQ for custom team hoodies?", "Vantawear supports flexible MOQ planning from 500 units, with scope depending on fabric, decoration, and packaging."],
      ["Can every hoodie include names and numbers?", "Yes. Names, numbers, team marks, sponsor logos, and sleeve details can be placed using print, embroidery, or woven applications."],
      ["Do you support youth and adult sizing?", "Yes. Orders can combine youth, adult, inclusive, and custom size charts."],
    ],
  },
  "custom-event-hoodies": {
    title: "Custom Event Hoodies for Races, Conferences, and Brand Activations",
    description:
      "Bulk custom event hoodies with brand decoration, staff sizing, retail packaging, and scheduled delivery for races, conferences, launches, and festivals.",
    h1: "Custom event hoodies delivered on a schedule",
    intro:
      "Create event hoodies for participants, staff, VIP guests, sponsors, and retail drops with controlled sampling, packaging, and delivery timing.",
    bullets: [
      "Designed for race packs, conference merch, festival staff, and sponsor gifts",
      "Packaging choices include eco bags, gift boxes, hangtags, size-sorted cartons, and retail packs",
      "Supports sponsor logo systems, numbered drops, and limited-edition artwork",
      "Delivery planning for single-site events or multi-location distribution",
    ],
    sections: [
      ["Best for", "Marathons, tournaments, conferences, music events, brand activations, launch campaigns, and community gatherings."],
      ["Production approach", "Confirm event date, quantity, artwork, package format, and destination first so the sample and production schedule match the go-live plan."],
      ["Why it ranks", "This page focuses on event hoodie search intent: deadline, bulk order, packaging, sponsor marks, and delivery reliability."],
    ],
    faqs: [
      ["How early should an event hoodie order start?", "Start as early as possible. Vantawear plans sample approval, production, quality checks, packaging, and freight around the event date."],
      ["Can hoodies be packed by size or recipient group?", "Yes. Orders can be sorted by size, team, department, VIP group, or retail carton requirement."],
      ["Can you support multiple delivery destinations?", "Yes. Delivery can be planned for one site or multiple locations depending on the event setup."],
    ],
  },
  "private-label-sportswear": {
    title: "Private Label Sportswear and Custom Athletic Hoodie Manufacturing",
    description:
      "Private label sportswear manufacturing for brands that need custom hoodies, labels, fabric choices, packaging, and international fulfillment.",
    h1: "Private label sportswear built around your brand system",
    intro:
      "Vantawear helps brands turn athletic hoodie concepts into repeatable private label programs with fabric, fit, trim, labeling, and packaging control.",
    bullets: [
      "Custom neck labels, woven labels, hangtags, packaging, and carton marks",
      "Fabric options include cotton-touch fleece, performance knit, recycled polyester, and blends",
      "Decoration options include screen print, digital print, embroidery, patches, and trims",
      "Suitable for capsule drops, brand merchandise, teamwear lines, and retail programs",
    ],
    sections: [
      ["Best for", "Sportswear brands, gyms, studios, creator merch, corporate lifestyle programs, and retail collaborations."],
      ["Production approach", "Build the product spec, confirm brand applications, sample the garment, inspect production, then pack for wholesale or retail needs."],
      ["Why it ranks", "This page gives AI and search crawlers a clear answer for private label sportswear, custom hoodie manufacturing, labeling, and packaging."],
    ],
    faqs: [
      ["Can Vantawear make private label hoodies?", "Yes. Vantawear can support private label trims, labels, hangtags, packaging, and branded decoration."],
      ["Can I choose sustainable fabrics?", "Yes. Recycled polyester and other responsible material options can be reviewed during product planning."],
      ["Is this suitable for retail resale?", "Yes. Packaging, labels, size runs, and carton sorting can be designed for retail programs."],
    ],
  },
  "bulk-corporate-hoodies": {
    title: "Bulk Corporate Hoodies for Employee Gifts and Company Teamwear",
    description:
      "Order bulk corporate hoodies for employee gifts, onboarding kits, events, retreats, and company teamwear with custom branding and packaging.",
    h1: "Bulk corporate hoodies for teams, gifts, and branded programs",
    intro:
      "Vantawear creates custom corporate hoodies for companies that need polished teamwear, onboarding gifts, conference apparel, or community merchandise.",
    bullets: [
      "Corporate-ready decoration for logos, departments, campaigns, and event marks",
      "Comfortable athletic fits for office, travel, training, and remote teams",
      "Gift packaging, custom hangtags, and size-sorted cartons available",
      "International shipping options for distributed teams and global events",
    ],
    sections: [
      ["Best for", "Employee onboarding, company retreats, brand campaigns, sales kickoffs, internal communities, and customer gifts."],
      ["Production approach", "Collect sizing, brand artwork, packaging needs, and destination list, then approve a sample before production."],
      ["Why it ranks", "This page targets corporate hoodie searches with clear details on bulk orders, employee gifts, branding, and global delivery."],
    ],
    faqs: [
      ["Can corporate hoodies include company branding?", "Yes. Logos, campaign marks, department names, and event artwork can be printed, embroidered, or applied as labels."],
      ["Can you help with employee size planning?", "Yes. Vantawear can work with international, inclusive, youth, or custom size charts."],
      ["Can hoodies be packaged as gifts?", "Yes. Gift boxes, hangtags, eco bags, and retail-style packaging are available."],
    ],
  },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = pages[params.slug as Slug] ?? pages["custom-team-hoodies"];
  return {
    title: `${page.title} | Vantawear`,
    description: page.description,
    alternates: { canonical: `${baseUrl}/solutions/${params.slug}` },
    openGraph: {
      title: `${page.title} | Vantawear`,
      description: page.description,
      url: `${baseUrl}/solutions/${params.slug}`,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug as Slug] ?? pages["custom-team-hoodies"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="landing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="landing-nav wrap">
        <Link className="brand" href="/"><span>V</span>VANTAWEAR</Link>
        <Link className="nav-cta dark" href="/#quote">Get a quote <b>↗</b></Link>
      </nav>
      <section className="landing-hero wrap">
        <p className="eyebrow">SEO + GEO LANDING PAGE</p>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <div className="landing-actions">
          <Link className="button primary" href="/#quote">Request a custom plan</Link>
          <Link className="text-link dark-link" href="/">View main site <span>→</span></Link>
        </div>
      </section>
      <section className="landing-band">
        <div className="wrap landing-grid">
          {page.bullets.map((item) => <article key={item}>{item}</article>)}
        </div>
      </section>
      <section className="wrap landing-sections">
        {page.sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="wrap faq">
        <p className="eyebrow">DIRECT ANSWERS</p>
        <h2>Questions buyers ask</h2>
        {page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <footer className="wrap"><Link className="brand" href="/"><span>V</span>VANTAWEAR</Link><p>Custom athletic apparel for teams that move.</p><p>© 2026 Vantawear</p></footer>
    </main>
  );
}

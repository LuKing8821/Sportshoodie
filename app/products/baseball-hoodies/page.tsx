import type { Metadata } from "next";
import Link from "next/link";
import { baseballHoodieCategories, baseballHoodieProducts } from "./product-data";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";

export const metadata: Metadata = {
  title: "Custom Baseball Hoodies | Team Hoodie Product Catalog | Vantawear",
  description:
    "Browse custom baseball hoodies, full-zip team hoodies, pullover club hoodies, varsity baseball jackets, fabric options, colors, use cases, and product advantages.",
  alternates: { canonical: `${baseUrl}/products/baseball-hoodies` },
  openGraph: {
    title: "Custom Baseball Hoodies | Vantawear",
    description: "Baseball hoodie product catalog with fabric, color, style, use case, and customization details.",
    url: `${baseUrl}/products/baseball-hoodies`,
    images: [{ url: "/products/baseball-hoodies/red-black-baseball-team-zip-hoodie.jpg", width: 612, height: 394 }],
  },
};

export default function BaseballHoodiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Custom Baseball Hoodies",
    description:
      "Custom baseball hoodie and sports teamwear product catalog from Vantawear.",
    hasPart: baseballHoodieProducts.map((product) => ({
      "@type": "Product",
      name: product.name,
      category: product.category,
      image: `${baseUrl}${product.image}`,
      url: `${baseUrl}/products/baseball-hoodies/${product.slug}`,
      material: product.fabric.join(", "),
      description: product.summary,
      brand: { "@type": "Brand", name: "Vantawear" },
    })),
  };

  return (
    <main className="landing product-catalog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="landing-nav wrap">
        <Link className="brand" href="/"><span>V</span>VANTAWEAR</Link>
        <div className="landing-actions compact">
          <Link className="text-link dark-link" href="/">Main site <span>→</span></Link>
          <Link className="nav-cta dark" href="/#quote">Get a quote <b>↗</b></Link>
        </div>
      </nav>

      <section className="product-hero wrap">
        <div>
          <p className="eyebrow">CUSTOM BASEBALL HOODIES</p>
          <h1>Sports hoodie product catalog for baseball teams, clubs, events, and brands.</h1>
          <p>
            A practical product library for B2B buyers: full-zip baseball hoodies, pullover team hoodies,
            varsity jackets, training hoodies, and lifestyle fleece programs with fabric, color,
            customization, and usage guidance.
          </p>
          <div className="product-hero-actions">
            <Link className="button primary" href="/#quote">Request product development</Link>
            <Link className="text-link dark-link" href="/factory">See factory capability <span>→</span></Link>
          </div>
        </div>
        <img src="/products/baseball-hoodies/red-black-baseball-team-zip-hoodie.jpg" alt="Custom red black baseball team full zip hoodie" />
      </section>

      <section className="product-category-strip">
        <div className="wrap">
          {baseballHoodieCategories.map((category) => <span key={category}>{category}</span>)}
        </div>
      </section>

      <section className="wrap catalog-intro">
        <div>
          <p className="eyebrow">PRODUCT INFORMATION</p>
          <h2>Each style is ready for team logos, names, numbers, sponsor branding, and private label details.</h2>
        </div>
        <p>
          Use these products as starting points. Vantawear can adjust fabric weight, fit, zipper,
          pocket construction, rib colors, print method, embroidery, labels, hangtags, packaging,
          and carton sorting for your baseball, softball, sports event, school, or retail program.
        </p>
      </section>

      <section className="wrap product-grid">
        {baseballHoodieProducts.map((product) => (
          <article key={product.slug}>
            <Link href={`/products/baseball-hoodies/${product.slug}`} className="product-card-image">
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-card-copy">
              <p>{product.category}</p>
              <h2><Link href={`/products/baseball-hoodies/${product.slug}`}>{product.name}</Link></h2>
              <span>{product.collection}</span>
              <ul>
                <li>{product.fabric[0]}</li>
                <li>{product.colors[0]}</li>
                <li>{product.useCases[0]}</li>
              </ul>
              <Link className="text-link dark-link" href={`/products/baseball-hoodies/${product.slug}`}>View product details <span>→</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="product-cta">
        <div className="wrap">
          <p className="eyebrow">FACTORY-DIRECT CUSTOMIZATION</p>
          <h2>Need a complete baseball hoodie program?</h2>
          <p>
            Share your preferred style, fabric, colors, logo placement, order quantity, deadline,
            and packaging needs. Our team can prepare a factory-direct development plan.
          </p>
          <Link className="button primary" href="/#quote">Start a custom baseball hoodie plan</Link>
        </div>
      </section>

      <footer className="wrap"><Link className="brand" href="/"><span>V</span>VANTAWEAR</Link><p>Custom baseball hoodies and sports teamwear from Ningbo, China.</p><p>© 2026 YINSHAN GARMENT</p></footer>
    </main>
  );
}

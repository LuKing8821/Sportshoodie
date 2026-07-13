import type { Metadata } from "next";
import Link from "next/link";
import { baseballHoodieProducts, getBaseballHoodieProduct } from "../product-data";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";

export function generateStaticParams() {
  return baseballHoodieProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getBaseballHoodieProduct(params.slug) ?? baseballHoodieProducts[0];
  return {
    title: `${product.name} | Custom Baseball Hoodie Manufacturer | Vantawear`,
    description: `${product.summary} Includes fabric, colors, style description, use cases, customization options, and product advantages.`,
    keywords: product.seoKeywords,
    alternates: { canonical: `${baseUrl}/products/baseball-hoodies/${product.slug}` },
    openGraph: {
      title: `${product.name} | Vantawear`,
      description: product.summary,
      url: `${baseUrl}/products/baseball-hoodies/${product.slug}`,
      images: [{ url: product.image, width: 612, height: 408 }],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getBaseballHoodieProduct(params.slug) ?? baseballHoodieProducts[0];
  const related = baseballHoodieProducts.filter((item) => item.slug !== product.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: "Vantawear" },
    manufacturer: { "@type": "Organization", name: "Ningbo Yinshan Garments Factory" },
    category: product.category,
    image: product.gallery.map((image) => `${baseUrl}${image}`),
    material: product.fabric.join(", "),
    description: product.summary,
    url: `${baseUrl}/products/baseball-hoodies/${product.slug}`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Available colors", value: product.colors.join(", ") },
      { "@type": "PropertyValue", name: "Use cases", value: product.useCases.join(", ") },
      { "@type": "PropertyValue", name: "Customization", value: product.customization.join(", ") },
    ],
  };

  return (
    <main className="landing product-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="landing-nav wrap">
        <Link className="brand" href="/"><span>V</span>VANTAWEAR</Link>
        <div className="landing-actions compact">
          <Link className="text-link dark-link" href="/products/baseball-hoodies">Baseball hoodies <span>→</span></Link>
          <Link className="nav-cta dark" href="/#quote">Get a quote <b>↗</b></Link>
        </div>
      </nav>

      <section className="wrap product-detail-hero">
        <div className="product-detail-media">
          <img src={product.image} alt={product.name} />
          <div className="product-gallery-row">
            {product.gallery.map((image) => <img key={image} src={image} alt={`${product.name} detail view`} />)}
          </div>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <div className="product-tags">
            {product.seoKeywords.slice(0, 4).map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
          <Link className="button primary" href="/#quote">Request this style</Link>
        </div>
      </section>

      <section className="wrap product-specs">
        <article>
          <p className="eyebrow">FABRIC INFORMATION</p>
          <h2>Recommended materials</h2>
          <ul>{product.fabric.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">COLOR OPTIONS</p>
          <h2>Color planning</h2>
          <ul>{product.colors.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">STYLE DESCRIPTION</p>
          <h2>Construction</h2>
          <p>{product.style}</p>
        </article>
      </section>

      <section className="product-info-band">
        <div className="wrap product-info-grid">
          <InfoBlock title="Use scenarios" items={product.useCases} />
          <InfoBlock title="Product advantages" items={product.advantages} />
          <InfoBlock title="Customization options" items={product.customization} />
        </div>
      </section>

      <section className="wrap product-related">
        <div>
          <p className="eyebrow">MORE BASEBALL HOODIE STYLES</p>
          <h2>Build a complete teamwear range.</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link key={item.slug} href={`/products/baseball-hoodies/${item.slug}`}>
              <img src={item.image} alt={item.name} />
              <span>{item.category}</span>
              <b>{item.name}</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="product-cta">
        <div className="wrap">
          <p className="eyebrow">FACTORY-DIRECT SUPPORT</p>
          <h2>Customize this product for your team, event, or brand.</h2>
          <p>
            Vantawear can help with fabric selection, fit, color matching, logo placement,
            embroidery, printing, labels, packaging, size sorting, and international delivery.
          </p>
          <Link className="button primary" href="/#quote">Get a custom plan</Link>
        </div>
      </section>

      <footer className="wrap"><Link className="brand" href="/"><span>V</span>VANTAWEAR</Link><p>{product.name}</p><p>© 2026 YINSHAN GARMENT</p></footer>
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article>
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

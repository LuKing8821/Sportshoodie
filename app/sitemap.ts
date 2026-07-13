import type { MetadataRoute } from "next";
import { baseballHoodieProducts } from "./products/baseball-hoodies/product-data";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";
const solutionSlugs = [
  "custom-team-hoodies",
  "custom-event-hoodies",
  "private-label-sportswear",
  "bulk-corporate-hoodies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/?lang=es`,
          fr: `${baseUrl}/?lang=fr`,
          de: `${baseUrl}/?lang=de`,
          ja: `${baseUrl}/?lang=ja`,
          ko: `${baseUrl}/?lang=ko`,
          ar: `${baseUrl}/?lang=ar`,
          zh: `${baseUrl}/?lang=zh`,
        },
      },
    },
    {
      url: `${baseUrl}/factory`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/baseball-hoodies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    ...baseballHoodieProducts.map((product) => ({
      url: `${baseUrl}/products/baseball-hoodies/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}

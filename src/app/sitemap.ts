import type { MetadataRoute } from "next";

const baseUrl = "https://reno-prime.com";

const routes = ["", "/services", "/projects", "/reviews", "/quote", "/contact", "/en", "/en/services", "/en/projects", "/en/reviews", "/en/quote", "/en/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("projects") ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.t3play.com";
  const routes = ["", "/about", "/visionaries", "/documents", "/tbag", "/tbaggiezmint", "/polygunnerz", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

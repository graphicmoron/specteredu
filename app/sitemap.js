const baseUrl = "https://www.specteredu.com";

const routes = ["", "/about", "/university", "/service", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-07-09T21:16:04+01:00",
    priority: 1,
  }));
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const origin = `${url.protocol}//${url.host}`;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${origin}/</loc><changefreq>monthly</changefreq></url>
  <url><loc>${origin}/privacy</loc><changefreq>yearly</changefreq></url>
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});

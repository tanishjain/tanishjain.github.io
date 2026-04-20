// Generates a 1200x630 OG image into /public/og-image.png
// Uses sharp (already a transitive dependency of Astro).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'public', 'og-image.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0d1014"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="72" y="72" width="4" height="64" fill="url(#accent)" rx="2"/>
  <text x="100" y="118"
        font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
        font-size="22" fill="#93c5fd" letter-spacing="4">TANISHJAIN.GITHUB.IO</text>
  <text x="72" y="290"
        font-family="'Source Sans 3', system-ui, -apple-system, sans-serif"
        font-size="112" font-weight="700" fill="#e8eaed" letter-spacing="-3">Tanish Jain</text>
  <text x="72" y="370"
        font-family="'Source Sans 3', system-ui, -apple-system, sans-serif"
        font-size="40" font-weight="500" fill="#a5abb3" letter-spacing="-0.5">Senior AI/ML Engineer · Retrieval, evaluation, applied ML</text>
  <g transform="translate(72 500)">
    <rect width="150" height="56" rx="10" fill="none" stroke="rgba(255,255,255,0.14)"/>
    <text x="24" y="36"
          font-family="'Source Sans 3', system-ui, sans-serif"
          font-size="22" fill="#e8eaed">Wiley</text>
    <rect x="170" width="200" height="56" rx="10" fill="none" stroke="rgba(255,255,255,0.14)"/>
    <text x="194" y="36"
          font-family="'Source Sans 3', system-ui, sans-serif"
          font-size="22" fill="#e8eaed">Stanford MS</text>
    <rect x="390" width="200" height="56" rx="10" fill="none" stroke="rgba(255,255,255,0.14)"/>
    <text x="414" y="36"
          font-family="'Source Sans 3', system-ui, sans-serif"
          font-size="22" fill="#e8eaed">CoRL '21</text>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log('Wrote', out, png.byteLength, 'bytes');

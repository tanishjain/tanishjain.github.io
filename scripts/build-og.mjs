// Generates the social preview image using Astro's existing sharp dependency.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const output = new URL('../public/og-image.png', import.meta.url);
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf4e9"/>
  <rect width="1200" height="8" fill="#8a3d2a"/>
  <text x="104" y="196" font-family="Georgia, serif" font-style="italic"
        font-size="39" fill="#8a3d2a">Hi, I'm</text>
  <text x="96" y="331" font-family="Georgia, serif" font-weight="bold"
        font-size="119" letter-spacing="-6" fill="#2c211a">Tanish Jain</text>
  <text x="104" y="404" font-family="Georgia, serif"
        font-size="39" fill="#645346">AI/ML Engineer at Wiley</text>
  <path d="M104 493H1096" stroke="#ddd0bd" stroke-width="2"/>
  <text x="104" y="545" font-family="Georgia, serif"
        font-size="29" fill="#8a3d2a">tanishjain.github.io</text>
</svg>`;

writeFileSync(output, await sharp(Buffer.from(svg)).png().toBuffer());

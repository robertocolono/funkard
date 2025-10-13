import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';

const outDir = path.resolve(process.cwd(), 'public/images/sample');
await fs.promises.mkdir(outDir, { recursive: true });

const files = [
  { name: 'charizard.jpg', label: 'Charizard Placeholder' },
  { name: 'booster-box.jpg', label: 'Booster Box Placeholder' },
  { name: 'etb.jpg', label: 'ETB Placeholder' },
];

for (const f of files) {
  const filePath = path.join(outDir, f.name);
  const image = await new Jimp(800, 600, '#0b0b0b');

  // draw gradient-like overlay
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const factor = y / this.bitmap.height;
    const base = 11; // 0x0b
    const val = Math.min(255, Math.floor(base + factor * 50));
    this.bitmap.data[idx + 0] = val; // R
    this.bitmap.data[idx + 1] = val; // G
    this.bitmap.data[idx + 2] = val; // B
  });

  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  image.print(font, 20, 20, {
    text: f.label + '\nFunkard Sample Image',
    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
    alignmentY: Jimp.VERTICAL_ALIGN_TOP,
  }, 760, 560);

  await image.quality(85).writeAsync(filePath);
  console.log('Generated', filePath);
}

console.log('✅ Sample images generated to', outDir);

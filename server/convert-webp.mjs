import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const certFiles = [
  'oracle-ai-certificate.jpg',
  'outskill-genai-certificate.jpg',
  'ar-vr-certificate.jpg',
  'cybersecurity-certificate.jpg',
  'soft-skills-certificate.jpg',
  'aws-cloud-foundations-certificate.jpg'
];

async function convertAndDeleteOriginals() {
  console.log('🚀 Converting certificate images to WebP...');

  for (const file of certFiles) {
    const inputPath = path.join(publicDir, file);
    const webpName = file.replace(/\.(jpg|png)$/, '.webp');
    const outputPath = path.join(publicDir, webpName);

    if (fs.existsSync(inputPath)) {
      const origSize = fs.statSync(inputPath).size;
      await sharp(inputPath)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      console.log(`✅ ${file} (${(origSize/1024).toFixed(1)}KB) ➔ ${webpName} (${(newSize/1024).toFixed(1)}KB)`);

      // Delete original image file after successful conversion
      fs.unlinkSync(inputPath);
      console.log(`🗑️ Deleted original ${file}`);
    }
  }

  console.log('🎉 Done! All certificate images converted to WebP and originals removed.');
}

convertAndDeleteOriginals().catch(console.error);

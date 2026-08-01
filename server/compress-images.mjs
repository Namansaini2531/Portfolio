import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesToCompress = [
  'oracle-ai-certificate.jpg',
  'outskill-genai-certificate.jpg',
  'ar-vr-certificate.jpg',
  'cybersecurity-certificate.jpg',
  'soft-skills-certificate.jpg',
  'aws-cloud-foundations-certificate.jpg'
];

async function convertToWebp() {
  console.log('🚀 Starting WebP conversion & compression...');
  for (const imgName of imagesToCompress) {
    const inputPath = path.join(publicDir, imgName);
    const webpName = imgName.replace(/\.jpg$/, '.webp');
    const outputPath = path.join(publicDir, webpName);

    if (fs.existsSync(inputPath)) {
      const originalStats = fs.statSync(inputPath);
      await sharp(inputPath)
        .resize({ width: 1400, withoutEnlargement: true }) // optimize resolution
        .webp({ quality: 80 }) // 80% quality WebP compression
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      console.log(`✅ ${imgName} (${(originalStats.size / 1024).toFixed(1)} KB) ➔ ${webpName} (${(newStats.size / 1024).toFixed(1)} KB)`);
    }
  }
  console.log('🎉 WebP compression complete!');
}

convertToWebp().catch(console.error);

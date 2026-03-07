const QRCode = require('qrcode');
const path = require('path');

const portfolioUrl = 'https://portfolio-soda.vercel.app';
const outputPath = path.join(__dirname, 'qr-code-portfolio.png');

QRCode.toFile(outputPath, portfolioUrl, {
  width: 500,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
})
.then(() => {
  console.log('QR code généré avec succès !');
  console.log('Fichier sauvegardé :', outputPath);
})
.catch(err => {
  console.error('Erreur:', err);
});

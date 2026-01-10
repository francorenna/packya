import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas SEO que necesitan archivos físicos
const seoRoutes = [
  'cajas-de-pizza',
  'bolsas-kraft',
  'cajas-de-vino',
  'simulador'
];

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

console.log('📦 Creando archivos HTML para rutas SEO...');

seoRoutes.forEach(route => {
  const routeDir = path.join(distPath, route);
  const routeIndexPath = path.join(routeDir, 'index.html');

  // Crear directorio si no existe
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Copiar index.html a cada ruta
  fs.copyFileSync(indexPath, routeIndexPath);
  console.log(`✅ Creado: /${route}/index.html`);
});

console.log('🎉 Archivos SEO creados exitosamente!');

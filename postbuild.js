import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas SEO con sus meta tags específicos
const seoRoutes = [
  {
    path: 'cajas-de-pizza',
    title: 'Cajas de Pizza Personalizadas en Mendoza | PACKYA',
    description: 'Imprimí cajas de pizza personalizadas desde 20 unidades. PACKYA ofrece impresión digital full color, entrega inmediata en Mendoza y envíos a todo el país.',
    canonical: 'https://packya.com.ar/cajas-de-pizza'
  },
  {
    path: 'bolsas-kraft',
    title: 'Bolsas Kraft Personalizadas en Mendoza | PACKYA',
    description: 'Bolsas kraft impresas a todo color desde 20 unidades. Ideales para comercios, boutiques, ferias y regalos. Impresión digital sin mínimos en Mendoza.',
    canonical: 'https://packya.com.ar/bolsas-kraft'
  },
  {
    path: 'cajas-de-vino',
    title: 'Cajas de Vino Personalizadas en Mendoza | PACKYA',
    description: 'Cajas de vino impresas full color para bodegas, vinotecas y regalos empresariales. Producción desde 20 unidades con impresión digital en Mendoza.',
    canonical: 'https://packya.com.ar/cajas-de-vino'
  },
  {
    path: 'cajas-de-embalaje',
    title: 'Cajas de Embalaje Personalizadas en Mendoza | PACKYA',
    description: 'Cajas de embalaje impresas full color para e-commerce, envíos y productos. Producción desde 20 unidades con impresión digital en Mendoza.',
    canonical: 'https://packya.com.ar/cajas-de-embalaje'
  },
  {
    path: 'simulador',
    title: 'Simulador de cajas personalizadas – Probá tu logo | PACKYA',
    description: 'Subí tu logo y mirá cómo queda en una caja personalizada PACKYA. Producción propia desde 50 unidades. Envíos a todo el país.',
    canonical: 'https://packya.com.ar/simulador'
  }
];

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

console.log('📦 Creando archivos HTML para rutas SEO...');

// Leer el index.html base
let indexContent = fs.readFileSync(indexPath, 'utf8');

seoRoutes.forEach(route => {
  const routeDir = path.join(distPath, route.path);
  const routeIndexPath = path.join(routeDir, 'index.html');

  // Crear directorio si no existe
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Modificar el HTML para esta ruta específica
  let routeContent = indexContent;
  
  // Reemplazar title
  routeContent = routeContent.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Reemplazar o agregar canonical (buscar el existente primero)
  if (routeContent.includes('<link rel="canonical"')) {
    routeContent = routeContent.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );
  } else {
    // Si no existe, agregarlo después de los meta tags
    routeContent = routeContent.replace(
      /(<meta name="robots".*?>)/,
      `$1\n    <link rel="canonical" href="${route.canonical}" />`
    );
  }
  
  // Reemplazar description si existe en los meta tags básicos
  routeContent = routeContent.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${route.description}">`
  );
  
  // Actualizar Open Graph URL y title
  routeContent = routeContent.replace(
    /<meta property="og:url" content=".*?">/,
    `<meta property="og:url" content="${route.canonical}">`
  );
  routeContent = routeContent.replace(
    /<meta property="og:title" content=".*?">/,
    `<meta property="og:title" content="${route.title}">`
  );
  routeContent = routeContent.replace(
    /<meta property="og:description" content=".*?">/,
    `<meta property="og:description" content="${route.description}">`
  );
  
  // Agregar contenido HTML visible para bots (en el body, antes del root div)
  const prerenderedContent = `
    <noscript>
      <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
        <h1>${route.title}</h1>
        <p>${route.description}</p>
        <p>Por favor habilita JavaScript para ver el sitio completo.</p>
        <p><a href="https://packya.com.ar/">Volver al inicio</a></p>
        <p><a href="https://wa.me/5492614177745">Contactar por WhatsApp</a></p>
      </div>
    </noscript>
  `;
  
  // Insertar el contenido después de <body> pero antes del div#root
  routeContent = routeContent.replace(
    /(<body>\s*<div id="root"><\/div>)/,
    `<body>${prerenderedContent}\n    <div id="root"></div>`
  );

  // Escribir el archivo modificado
  fs.writeFileSync(routeIndexPath, routeContent);
  console.log(`✅ Creado: /${route.path}/index.html`);
});

console.log('🎉 Archivos SEO creados exitosamente!');

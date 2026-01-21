# 🎯 INSTRUCCIONES POST-DEPLOY: SEO y Google Search Console

## ✅ CAMBIOS REALIZADOS

### 1. **Problema de Indexación - SOLUCIONADO** ✅
- ✅ Agregado "cajas-de-embalaje" al postbuild.js (faltaba esta ruta)
- ✅ Actualizado sitemap.xml con fecha actual (2026-01-21)
- ✅ Agregado meta robots "index, follow" en todas las páginas
- ✅ Agregado tags canonical en todas las páginas

### 2. **Logo en Google - OPTIMIZADO** ✅
- ✅ Mejorado Schema.org JSON-LD con estructura ImageObject para el logo
- ✅ Creado manifest.json para PWA
- ✅ Agregado Schema WebSite adicional para búsqueda
- ✅ Configurado favicon-512.png como logo oficial (512x512px)

### 3. **Meta Tags Completos** ✅
- ✅ Open Graph tags en todas las páginas
- ✅ Canonical URLs en todas las páginas
- ✅ Meta robots en todas las páginas
- ✅ Descripciones optimizadas

---

## 🚀 PASOS INMEDIATOS QUE DEBES HACER

### PASO 1: Rebuild y Deploy (URGENTE)
```bash
npm run build
npm run deploy
```

### PASO 2: Google Search Console (HACER HOY MISMO)

1. **Reenviar el Sitemap:**
   - Ve a: https://search.google.com/search-console
   - Sitemaps → Eliminar sitemap anterior
   - Agregar nuevo sitemap: `https://packya.com.ar/sitemap.xml`

2. **Solicitar indexación manual de TODAS las páginas:**
   - Inspeccionar URL → Pegar cada URL:
     - `https://packya.com.ar/`
     - `https://packya.com.ar/cajas-de-pizza`
     - `https://packya.com.ar/bolsas-kraft`
     - `https://packya.com.ar/cajas-de-vino`
     - `https://packya.com.ar/cajas-de-embalaje` ← **ESTA ES LA QUE FALTABA**
     - `https://packya.com.ar/simulador`
   - Click en "SOLICITAR INDEXACIÓN" en cada una

3. **Verificar el logo:**
   - En Search Console → Mejoras → Logotipo
   - Debería reconocer automáticamente el Schema.org

### PASO 3: Verificar robots.txt
Asegúrate que el archivo actual esté así:
```
User-agent: *
Allow: /
Disallow: /404.html

Sitemap: https://packya.com.ar/sitemap.xml
```

### PASO 4: Herramienta de prueba de datos estructurados
1. Ve a: https://search.google.com/test/rich-results
2. Prueba: `https://packya.com.ar/`
3. Verifica que aparezca:
   - Organization
   - WebSite
   - Logo ImageObject

---

## ⏰ TIEMPOS ESPERADOS

- **Indexación de páginas:** 2-7 días después de solicitar indexación
- **Logo en resultados:** 5-14 días después del deploy
- **Actualización completa:** 2-3 semanas

---

## 🔍 VERIFICACIONES IMPORTANTES

### Verificar que los archivos HTML se generan correctamente:
Después del build, verificar que existan estos archivos en la carpeta `dist/`:
```
dist/
  index.html
  cajas-de-pizza/index.html
  bolsas-kraft/index.html
  cajas-de-vino/index.html
  cajas-de-embalaje/index.html  ← NUEVO
  simulador/index.html
```

### Verificar en producción:
1. Visita cada URL y verifica que cargue
2. Click derecho → Ver código fuente
3. Busca: `<meta name="robots" content="index, follow">`
4. Busca: `<link rel="canonical"`
5. Busca el Schema.org JSON-LD

---

## 🎨 SOBRE EL LOGO

El logo que Google mostrará es: `https://packya.com.ar/favicon-512.png`

**Recomendaciones:**
- Debe ser un PNG de 512x512px
- Fondo transparente o blanco
- Debe ser el mismo logo que usas en tu marca
- Google puede tardar hasta 2 semanas en mostrarlo

Si quieres cambiarlo por otro archivo:
1. Reemplaza el archivo `public/favicon-512.png`
2. Actualiza el Schema en `index.html` línea 56

---

## 📊 MONITOREO

### Comandos útiles:
```bash
# Ver si Google está indexando
site:packya.com.ar

# Ver páginas específicas
site:packya.com.ar/cajas-de-embalaje
```

### Herramientas recomendadas:
- Google Search Console (principal)
- Google PageSpeed Insights
- Bing Webmaster Tools (opcional)

---

## ❓ POSIBLES PROBLEMAS

### Si después de 2 semanas las páginas no se indexan:

1. **Verificar en Search Console:**
   - Cobertura → Ver páginas excluidas
   - Verificar errores específicos

2. **Verificar enlaces internos:**
   - Asegúrate que todas las páginas estén enlazadas desde la home
   - Verifica que el Navbar tenga links a todas las páginas

3. **Verificar contenido:**
   - Cada página debe tener al menos 300 palabras de texto único
   - No debe haber contenido duplicado

4. **Verificar redirects:**
   - GitHub Pages puede tener problemas con SPAs
   - El script 404.html debería manejar esto

---

## 🎯 SIGUIENTES PASOS (Opcional pero Recomendado)

1. **Agregar enlaces internos en el contenido**
2. **Crear un blog para contenido SEO**
3. **Optimizar imágenes (WebP, lazy loading)**
4. **Agregar Schema.org Product en cada página de producto**
5. **Implementar breadcrumbs**

---

## 📝 NOTAS FINALES

- Los cambios YA están hechos en el código
- Solo falta hacer BUILD → DEPLOY → Search Console
- La indexación es gradual, no instantánea
- El logo puede tardar más que las páginas en aparecer
- Monitorea Search Console diariamente la primera semana

**¡Cualquier duda, pregúntame!** 🚀

# 🚀 GUÍA DE SETUP - Calculadora Tarifas

## 1️⃣ Google Form para Comentarios

### Crear el formulario:
1. Abre https://forms.google.com/
2. Crea un nuevo formulario
3. **Pregunta 1:** "Nombre" (Respuesta corta, no obligatoria)
4. **Pregunta 2:** "Email" (Respuesta corta, no obligatoria)
5. **Pregunta 3:** "Mensaje" (Párrafo, obligatorio)
6. **Pregunta 4:** "¿Es un error/bug?" (Opción múltiple: SÍ / NO)

### Obtener el ID del formulario:
1. En el formulario, haz clic en "⋮" (más opciones) → **Respuestas**
2. Mira la URL de la hoja de cálculo vinculada
3. O abre el formulario y copia el ID de la URL:
   - URL: `https://forms.google.com/u/0/d/FORM_ID/edit`

### Obtener los IDs de entrada (entry):
1. En el formulario, abre "Herramientas" → **Script del editor**
2. O haz clic en "⋮" → **Ver código previo**
3. Alternativamente, inspecciona el código fuente del formulario en tu navegador y busca `entry.XXXXXXXXX`

### Actualizar el código HTML:
Reemplaza en `index.html` línea ~490:
```javascript
const googleFormURL='https://docs.google.com/forms/d/e/REEMPLAZA_CON_TU_FORM_ID/formResponse';
data.append('entry.XXXXXXXXX',nombre);      // Reemplaza XXXXXXXXX
data.append('entry.YYYYYYYYY',email);       // Reemplaza YYYYYYYYY
data.append('entry.ZZZZZZZZZ',mensaje);     // Reemplaza ZZZZZZZZZ
data.append('entry.WWWWWWWWW',esError);     // Reemplaza WWWWWWWWW
```

---

## 2️⃣ Google Analytics

### Crear propiedad GA4:
1. Abre https://analytics.google.com/
2. Haz clic en **Crear propiedad**
3. Nombre: "Calculadora Tarifas"
4. Zona horaria: España (UTC+1)
5. Moneda: EUR
6. Continúa y selecciona "Web"
7. **Nombre del flujo:** "Calculadora Web"
8. **URL del sitio:** Tu dominio (ej: `calc.tudominio.com`)

### Obtener el Measurement ID:
1. Ve a **Administración** → **Propiedades y aplicaciones** → **Flujos de datos**
2. Haz clic en tu flujo web
3. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

### Agregar a tu HTML:
Descomenta en `index.html` líneas ~510 y reemplaza `G-XXXXXXXXXX` con tu ID:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 3️⃣ Google AdSense

### Solicitar acceso:
1. Abre https://www.google.com/adsense
2. Haz clic en **Empezar**
3. Inicia sesión con tu Google
4. Ingresa tu URL del sitio
5. Google revisará tu sitio (puede tardar 2-4 semanas)

### Una vez aprobado:
1. Ve a **Mi cuenta** → **Configuración**
2. Busca tu **ID de publicador** (formato: `ca-pub-xxxxxxxxxxxxxxxx`)
3. Agrega el código en el `<head>` de `index.html`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
   crossorigin="anonymous"></script>
```

4. Para agregar espacios de anuncios en el HTML:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXX"
     data-ad-slot="YYYYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

---

## 4️⃣ GitHub Pages

### Configurar el repositorio:
1. Ve a tu repo en GitHub: `https://github.com/manuelzafra/calculadora-electricidad-gas`
2. **Settings** → **Pages**
3. **Source:** Selecciona rama `main`
4. Tu sitio estará en: `https://manuelzafra.github.io/calculadora-electricidad-gas/`

### Actualizar el canonical en HTML:
En `index.html` línea ~10, reemplaza:
```html
<link rel="canonical" href="https://manuelzafra.github.io/calculadora-electricidad-gas/">
```

---

## 5️⃣ Dominio Propio (Subdominio/Subfolder)

### Opción A: Subfolder en dominio existente
Ej: `https://tudominio.com/calculadora-electricidad-gas/`

1. Haz push del código a GitHub Pages
2. En tu hosting, apunta la carpeta `/public/calculadora-electricidad-gas/` a este repo
3. Actualiza el canonical:
```html
<link rel="canonical" href="https://tudominio.com/calculadora-electricidad-gas/">
```

### Opción B: Subdominio
Ej: `https://calc.tudominio.com/`

1. En tu DNS, crea un CNAME:
   ```
   calc CNAME manuelzafra.github.io
   ```
2. En GitHub Pages settings, agrega el custom domain: `calc.tudominio.com`
3. Actualiza el canonical:
```html
<link rel="canonical" href="https://calc.tudominio.com/">
```

---

## 6️⃣ Google Search Console

### Verificar tu sitio:
1. Abre https://search.google.com/search-console
2. **Agregar propiedad** → Tu URL
3. **Verificación por DNS:**
   - Copia el registro TXT
   - Agregalo a tu DNS
4. O **Verificación por archivo HTML:**
   - Descarga el archivo y súbelo a tu servidor
5. Una vez verificado, Google indexará tu sitio automáticamente

### Configurar:
1. Ve a **Sitemaps** → Agrega `/sitemap.xml` (si lo tienes)
2. En **Core Web Vitals** ve el rendimiento
3. En **Cobertura** verifica que todas las páginas están indexadas

---

## 📋 ORDEN RECOMENDADO DE SETUP

1. ✅ Google Form (10 min)
2. ✅ Google Analytics (10 min)
3. ✅ GitHub Pages (5 min)
4. ⏳ Google AdSense (2-4 semanas)
5. ✅ Search Console (5 min)
6. ✅ Dominio personalizado (según tu hosting)

---

## 🔍 VERIFICACIÓN FINAL

Después de agregar todo, verifica:

```bash
# En tu terminal, haz un git commit y push:
git add index.html SEO_CHECKLIST.md SETUP_GUIA.md
git commit -m "Add SEO, Google Form, Analytics, and documentation"
git push origin main
```

Luego:
1. Abre tu URL en el navegador
2. Abre Developer Tools (F12)
3. Vé a **Console** → Verifica que no hay errores rojos
4. Vé a **Network** → Verifica que gtag.js se carga (búsqueda: "gtag")
5. Abre el inspector de elementos y verifica:
   - Meta tags están presentes
   - Canonical apunta a la URL correcta
   - Title y description son correctos

---

## 📞 SOPORTE

Si algo falla:
- Google Analytics no carga: Verifica el Measurement ID es correcto
- Form no envía: Abre console de desarrollador, busca errores CORS
- Canonical error: Asegúrate la URL es HTTPS y correcta


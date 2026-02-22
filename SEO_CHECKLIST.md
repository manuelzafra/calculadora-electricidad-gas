# 📋 SEO CHECKLIST - Calculadora Electricidad & Gas

## ✅ BÁSICO (Implementado)
- [ ] **Title optimizado** (50-60 caracteres, keyword al inicio)
- [ ] **Meta description** (150-160 caracteres, persuasiva)
- [ ] **Meta viewport** (mobile-first)
- [ ] **Charset UTF-8**
- [ ] **Canonical** (evita duplicidades)
- [ ] **Meta robots** (index, follow)
- [ ] **Google Analytics** (gtag.js + Measurement ID)
- [ ] **Google Form** para comentarios/errores

## 🟠 AVANZADO (Futuro)
- [ ] Hreflang (si multilingual)
- [ ] Open Graph (og:title, og:description, og:image 1200x630, og:url, og:type)
- [ ] Twitter Cards (summary_large_image, title, description, image)
- [ ] Preload recursos críticos (fuentes, hero image)
- [ ] Preconnect/DNS-prefetch (dominios externos)
- [ ] Theme-color (UX móvil)

## 🟡 PERFORMANCE (Google lo mide)
- [ ] Lazy loading de scripts no críticos
- [ ] CSS crítico inline
- [ ] Evitar bloqueo de render en HEAD
- [ ] Font-display: swap en fuentes

## 🟢 ESTRUCTURA SEMÁNTICA (JSON-LD)
- [ ] Schema.org (Organization, Tool, etc.)
- [ ] Meta author
- [ ] Meta publisher
- [ ] BreadcrumbList (si navegación compleja)

## 🔵 ENTIDAD Y AUTORIDAD (E-E-A-T)
- [ ] Perfil de autor
- [ ] Datos estructurados de autor
- [ ] SameAs en schema (redes sociales)

## 🟣 TÉCNICO PRO
- [ ] Content-Security-Policy
- [ ] Referrer-Policy
- [ ] HTTP-equiv bien gestionado
- [ ] ❌ NO usar meta keywords (obsoleto)

---

## 📊 SETUP NECESARIO (Instrucciones abajo)

### 1. Google Analytics (Gratuito)
- URL: https://analytics.google.com
- Crear propiedad
- Copiar **Measurement ID** (formato: G-XXXXXXXXXX)
- Agregar en `<head>`:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

### 2. Google Search Console (Gratuito)
- URL: https://search.google.com/search-console
- Agregar propiedad (usar subdomain o folder)
- Verificar DNS o HTML file
- Esperar a que Google indexe

### 3. Google AdSense (Requiere aprobación)
- URL: https://www.google.com/adsense
- Solicitar acceso
- Copiar **Publisher ID** (formato: ca-pub-xxxxxxxxxxxxxxxx)
- Agregar en `<head>`:
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
     crossorigin="anonymous"></script>
  ```

### 4. GitHub Pages
- Push a rama `main` o crear rama `gh-pages`
- Settings → Pages → Source: `main` o `gh-pages`
- URL: `https://username.github.io/repo-name/`

### 5. Subdominio/Subfolder en dominio propio
- Si subfolder: `https://tudominio.com/calculadora-electricidad-gas/`
- Si subdominio: `https://calc.tudominio.com/`
- Configurar CNAME en DNS si es subdominio
- Apuntar a GitHub Pages

---

## 🎯 SEO TITLE RECOMENDADO
**Actual:** "⚡🔥 Calculadora Ofertas - Electricidad y Gas"

**Propuesta (56 caracteres):**
"Calculadora Tarifas Electricidad y Gas - Compara Ofertas"

**Con keyword:**
"Comparador Tarifas T2 Gas RL1 - Ahorra en Electricidad"

---

## 📝 META DESCRIPTION RECOMENDADA
(155 caracteres)
"Compara tus tarifas de electricidad T2, T3 y gas RL1. Calcula ahorros mensuales y anuales. Herramienta gratuita sin registro. Pega datos de tus facturas."

---

## 🎯 KEYWORDS PRINCIPALES
- Comparador tarifas electricidad
- Calculadora gas natural
- T2 T3 RL1
- Ahorrar electricidad
- Cambiar compañía energética

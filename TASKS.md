# Comparador Tarifas — Task Board

## Status
| Área | Estado |
|------|--------|
| Rediseño mobile | ✅ Done |
| Dominio propio | 🟡 DNS propagando |
| SSL | ⏳ Pendiente (auto tras DNS) |
| AdSense activado | 🔲 Pendiente |
| Afiliados | 🔲 Pendiente |
| GSC indexado | 🔲 Pendiente |
| Open Graph / JSON-LD | 🔲 Pendiente |

---

## 🤖 SOLATZ — Tareas autónomas

### T01 — Open Graph + JSON-LD Schema
- [ ] Añadir meta OG (title, description, image, url)
- [ ] Twitter Cards
- [ ] JSON-LD Schema tipo `WebApplication` + `FAQPage`
- **Impacto**: CTR en redes sociales, rich results en Google

### T02 — SEO técnico pendiente
- [ ] Actualizar sitemap.xml con nuevo dominio
- [ ] Actualizar canonical con nuevo dominio
- [ ] Content-Security-Policy header (via GitHub Pages _headers o Cloudflare)
- [ ] Referrer-Policy

### T03 — Landing pages de contenido
- [ ] Crear `/blog/` o sección de contenido (¿subdomain o subpath?)
- [ ] Artículo: "Diferencia entre tarifa T2 y T3" (keyword: 1.2k/mes)
- [ ] Artículo: "Cómo leer tu factura de luz" (keyword: 3.4k/mes)
- [ ] Artículo: "Mejores tarifas de luz 2026" (keyword: 8.1k/mes)
- [ ] Artículo: "Tarifa gas RL1 explicada" (keyword: 720/mes)

### T04 — Optimización AdSense
- [ ] Activar script AdSense en los 4 slots preparados
- [ ] Configurar Auto Ads como fallback
- [ ] A/B test posición slot "mid" (antes vs después del formulario)

### T05 — Performance
- [ ] Convertir a archivo local (sin CDN Tailwind) para Core Web Vitals
- [ ] Lazy load Material Symbols
- [ ] Preconnect a Google Fonts

---

## 👤 Manuel — Tareas manuales

### M01 — Dominio y SSL
- [ ] Confirmar que DNS ha propagado (https://dnschecker.org/)
- [ ] Verificar SSL activo en GitHub Pages (Settings → Pages)
- [ ] Actualizar CNAME en repo con nuevo dominio

### M02 — Google AdSense
- [ ] Solicitar cuenta AdSense o añadir dominio nuevo a cuenta existente
- [ ] Obtener publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
- [ ] Pegar script AdSense + IDs de slot en los 4 `<!-- ADSENSE SLOT -->` del HTML
- [ ] Esperar aprobación (24-72h)

### M03 — Google Search Console
- [ ] Añadir propiedad del nuevo dominio
- [ ] Verificar con DNS TXT o HTML file
- [ ] Enviar sitemap.xml
- [ ] Crear credenciales OAuth para mcp-gsc → compartir `client_secrets.json`

### M04 — Afiliación comercializadoras
- [ ] Contactar Holaluz (programa afiliados: holaluz.com/afiliados)
- [ ] Contactar Octopus Energy España
- [ ] Registrarse en Awin/Tradedoubler (agregadores de afiliados energía)
- [ ] Sustituir `href="#"` en sección afiliados con links reales

---

## 📊 KPIs objetivo

| Métrica | Ahora | 3 meses | 6 meses |
|---------|-------|---------|---------|
| Visitas/mes | 0 | 2k | 10k |
| Posición media GSC | - | 25 | 12 |
| Ingresos AdSense | €0 | €20 | €150 |
| Conversiones afiliado | 0 | 5 | 30 |

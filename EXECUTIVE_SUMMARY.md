# Comparador de Tarifas Luz y Gas — Executive Summary

## Visión
Herramienta gratuita de comparación de tarifas de electricidad (T2, T3) y gas (RL1) en España. Monetización vía AdSense + afiliación a comercializadoras.

## Estado actual
- **URL**: https://comparadortarifasluzygas.livinkcoworking.es/ → migrando a dominio propio
- **Tech**: HTML/CSS/JS vanilla, sin backend, GitHub Pages
- **Tracking**: Google Tag Manager (GTM-WV2PV3Z7)
- **Rediseño mobile**: ✅ Completado (Mar 2026) — mobile-first, dark theme, AdSense slots

## Potencial de monetización

| Canal | Estimación | Requisito |
|-------|-----------|-----------|
| AdSense | €50-300/mes | 10k+ visitas/mes |
| Afiliación (Holaluz, Octopus, etc.) | €20-100/conversión | Acuerdo directo |
| Patrocinio comercializadora | €200-500/mes | 20k+ visitas/mes |

## Stack técnico
- Single-file HTML (68KB → rediseño 1521 líneas)
- Tailwind CDN + Material Symbols + Inter
- localStorage para historial y datos de usuario
- Sin base de datos, sin backend
- GitHub Pages + CNAME custom domain

## Tarifas soportadas
- **T2**: Electricidad doméstica (punta/llano/valle)
- **Gas RL1**: Gas natural (término fijo + variable)
- **T3**: Electricidad industrial >15kW (P1-P6)

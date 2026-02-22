# Cambios para index.html

**Archivo:** `/Users/mz/coding_projects/livink_projects/Calculadora Gas y Electricidad T2 y T3/calculadora-electricidad-gas/index.html`

## CAMBIO 1: Mover mensaje info debajo de tabs

**BUSCAR:**
```html
<h1>⚡🔥 Calculadora Ofertas - Electricidad y Gas</h1>
<p class="subtitle">Compara T2, GAS RL1 y T3 - Pega datos de tus facturas</p>
<div class="info-text">📊 Comparación de ofertas con histórico y análisis detallado</div>

<div class="tabs">
<button class="tab active" onclick="cambiarTab('t2')">⚡ ELECTRICIDAD T2</button>
<button class="tab" onclick="cambiarTab('gas')">🔥 GAS RL1</button>
<button class="tab" onclick="cambiarTab('t3')">⚡ ELECTRICIDAD T3</button>
</div>
```

**REEMPLAZAR CON:**
```html
<h1>⚡🔥 Calculadora Ofertas - Electricidad y Gas</h1>
<p class="subtitle">Compara T2, GAS RL1 y T3 - Pega datos de tus facturas</p>

<div class="tabs">
<button class="tab active" onclick="cambiarTab('t2')">⚡ ELECTRICIDAD T2</button>
<button class="tab" onclick="cambiarTab('gas')">🔥 GAS RL1</button>
<button class="tab" onclick="cambiarTab('t3')">⚡ ELECTRICIDAD T3</button>
</div>

<div class="info-text">📊 Compara 1 mes o varios meses según tus necesidades</div>
```

---

## CAMBIO 2: Mejorar modal tarifa 2 fases

**BUSCAR:**
```javascript
instrucciones.innerHTML='<strong>Instrucciones:</strong> Introduce los dos precios separados por espacio o tabulador:<br><br><strong>Formato:</strong> PrecioValle PrecioPico<br><br><strong>Ejemplo:</strong><br><code>0.10 0.15</code><br><br>Esto aplicará:<br>• Valle (P3, P6): 0.10 €/kWh<br>• Pico (P1, P2, P4, P5): 0.15 €/kWh';
```

**REEMPLAZAR CON:**
```javascript
instrucciones.innerHTML='<strong>Instrucciones:</strong> Introduce dos precios separados por espacio<br><br><strong>Formato:</strong> PrecioValle PrecioPico<br><br><strong>Ejemplo:</strong><br><code>0.10 0.15</code><br><br><strong>Esto aplicará:</strong><br>• Valle (P3, P6): Periodos de menor demanda - 0.10 €/kWh<br>• Pico (P1, P2, P4, P5): Periodos de alta demanda - 0.15 €/kWh<br><br><strong>Periodos típicos:</strong><br>P1: Horas punta (18h-22h laborables)<br>P2: Horas llanas (8h-18h y 22h-24h laborables)<br>P3: Horas valle (0h-8h laborables y fines de semana)<br>P4-P6: Variaciones según temporada';
```

---

## Después del cambio

```bash
cd "/Users/mz/coding_projects/livink_projects/Calculadora Gas y Electricidad T2 y T3/calculadora-electricidad-gas"
git add index.html
git commit -m "Mover mensaje info + mejorar modal tarifa 2 fases"
git push
```

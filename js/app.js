const consumosT2={meses:['Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],dias:[31,30,31,30,31,30,31,30,31,30],punta:[54,75,55,24,13,28,14,26,24,26],llano:[38,54,44,22,15,25,16,25,20,27],valle:[54,69,67,35,25,35,26,29,33,39]};
const consumosGas={meses:['Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre','Enero'],dias:[28,31,30,31,30,31,31,30,31,30,31,31],kwh:[35,700,340,300,120,100,35,90,340,500,910,800]};
const diasMes=[31,28,31,30,31,30,31,31,30,31,30,31];

let tabActual='t2';

window.addEventListener('DOMContentLoaded',()=>{cargarDatos();mostrarHistorico()});

function cambiarTab(tab){
  tabActual=tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  const tabs=['t2','gas','t3'];
  const idx=tabs.indexOf(tab);
  document.querySelectorAll('.tab')[idx].classList.add('active');
  document.getElementById('tab-'+tab).classList.add('active');
}

function aplicarDescuento(precio,dto){return precio*(1-dto/100)}

function parsePotencias(texto){
  const potencias={};
  const regex=/Periodo\s+P(\d)\s*[^:]*:\s*([\d,]+)\s*kW\s*\*\s*([\d,]+)\s*€\/kW\s*día/gi;
  let match;
  while((match=regex.exec(texto))!==null){
    const p='P'+match[1];
    potencias[p]={kw:parseFloat(match[2].replace(',','.')),precio:parseFloat(match[3].replace(',','.'))};
  }
  return potencias;
}

function parseEnergia(texto){
  const precios={};
  const regex=/P(?:recio\s+)?P(\d)[^\d]*([\d,]+)\s*€\/kWh/gi;
  let match;
  while((match=regex.exec(texto))!==null){
    const p='P'+match[1];
    precios[p]=parseFloat(match[2].replace(',','.'));
  }
  return precios;
}

function copiarTarifaPlanaT2(tipo){
  const precio=parseFloat(document.getElementById(`t2-${tipo}-punta`).value);
  if(isNaN(precio)){alert('⚠️ Introduce primero el precio punta');return}
  document.getElementById(`t2-${tipo}-llano`).value=precio;
  document.getElementById(`t2-${tipo}-valle`).value=precio;
}

function cargarDatos(){
  const d=localStorage.getItem('ofertaActual');
  if(!d)return;
  const datos=JSON.parse(d);
  if(datos.t2){
    document.getElementById('t2-actual-nombre').value=datos.t2.nombre||'';
    document.getElementById('t2-actual-pot-punta-kw').value=datos.t2.potPuntaKw||'';
    document.getElementById('t2-actual-pot-punta-precio').value=datos.t2.potPuntaPrecio||'';
    document.getElementById('t2-actual-pot-valle-kw').value=datos.t2.potValleKw||'';
    document.getElementById('t2-actual-pot-valle-precio').value=datos.t2.potVallePrecio||'';
    document.getElementById('t2-actual-punta').value=datos.t2.punta||'';
    document.getElementById('t2-actual-llano').value=datos.t2.llano||'';
    document.getElementById('t2-actual-valle').value=datos.t2.valle||'';
    document.getElementById('t2-actual-dto').value=datos.t2.dto||'0';
    if(datos.t2.unitPunta)document.querySelector(`input[name="t2-actual-unit-punta"][value="${datos.t2.unitPunta}"]`).checked=true;
    if(datos.t2.unitValle)document.querySelector(`input[name="t2-actual-unit-valle"][value="${datos.t2.unitValle}"]`).checked=true;
  }
  if(datos.gas){
    document.getElementById('gas-actual-nombre').value=datos.gas.nombre||'';
    document.getElementById('gas-actual-fijo').value=datos.gas.fijo||'';
    document.getElementById('gas-actual-variable').value=datos.gas.variable||'';
    document.getElementById('gas-actual-dto').value=datos.gas.dto||'0';
    if(datos.gas.unit)document.querySelector(`input[name="gas-actual-unit"][value="${datos.gas.unit}"]`).checked=true;
  }
  if(datos.t3){
    document.getElementById('t3-actual-nombre').value=datos.t3.nombre||'';
    document.getElementById('t3-actual-potencias').value=datos.t3.potencias||'';
    document.getElementById('t3-actual-energia').value=datos.t3.energia||'';
    document.getElementById('t3-actual-dto').value=datos.t3.dto||'0';
  }
}

function guardarDatos(){
  const datos={
    t2:{
      nombre:document.getElementById('t2-actual-nombre').value,
      potPuntaKw:document.getElementById('t2-actual-pot-punta-kw').value,
      potPuntaPrecio:document.getElementById('t2-actual-pot-punta-precio').value,
      potValleKw:document.getElementById('t2-actual-pot-valle-kw').value,
      potVallePrecio:document.getElementById('t2-actual-pot-valle-precio').value,
      punta:document.getElementById('t2-actual-punta').value,
      llano:document.getElementById('t2-actual-llano').value,
      valle:document.getElementById('t2-actual-valle').value,
      dto:document.getElementById('t2-actual-dto').value,
      unitPunta:document.querySelector('input[name="t2-actual-unit-punta"]:checked').value,
      unitValle:document.querySelector('input[name="t2-actual-unit-valle"]:checked').value
    },
    gas:{
      nombre:document.getElementById('gas-actual-nombre').value,
      fijo:document.getElementById('gas-actual-fijo').value,
      variable:document.getElementById('gas-actual-variable').value,
      dto:document.getElementById('gas-actual-dto').value,
      unit:document.querySelector('input[name="gas-actual-unit"]:checked').value
    },
    t3:{
      nombre:document.getElementById('t3-actual-nombre').value,
      potencias:document.getElementById('t3-actual-potencias').value,
      energia:document.getElementById('t3-actual-energia').value,
      dto:document.getElementById('t3-actual-dto').value
    }
  };
  localStorage.setItem('ofertaActual',JSON.stringify(datos));
}

function resetNuevaOferta(){
  if(tabActual==='t2'){
    document.getElementById('t2-nueva-nombre').value='';
    document.getElementById('t2-nueva-pot-punta-kw').value='';
    document.getElementById('t2-nueva-pot-punta-precio').value='';
    document.getElementById('t2-nueva-pot-valle-kw').value='';
    document.getElementById('t2-nueva-pot-valle-precio').value='';
    document.getElementById('t2-nueva-punta').value='';
    document.getElementById('t2-nueva-llano').value='';
    document.getElementById('t2-nueva-valle').value='';
    document.getElementById('t2-nueva-dto').value='0';
    document.querySelector('input[name="t2-nueva-unit-punta"][value="dia"]').checked=true;
    document.querySelector('input[name="t2-nueva-unit-valle"][value="dia"]').checked=true;
  }else if(tabActual==='gas'){
    document.getElementById('gas-nueva-nombre').value='';
    document.getElementById('gas-nueva-fijo').value='';
    document.getElementById('gas-nueva-variable').value='';
    document.getElementById('gas-nueva-dto').value='0';
    document.querySelector('input[name="gas-nueva-unit"][value="dia"]').checked=true;
  }else{
    document.getElementById('t3-nueva-nombre').value='';
    document.getElementById('t3-nueva-potencias').value='';
    document.getElementById('t3-nueva-energia').value='';
    document.getElementById('t3-nueva-dto').value='0';
  }
}

function calcular(){
  let nombreNueva='';
  let totalActual=0,totalNueva=0;

  if(tabActual==='t2'){
    const nombre=document.getElementById('t2-actual-nombre').value||'Actual T2';
    nombreNueva=document.getElementById('t2-nueva-nombre').value||'Nueva T2';
    const potPuntaKwA=parseFloat(document.getElementById('t2-actual-pot-punta-kw').value);
    const potPuntaPrecioA=parseFloat(document.getElementById('t2-actual-pot-punta-precio').value);
    const potValleKwA=parseFloat(document.getElementById('t2-actual-pot-valle-kw').value);
    const potVallePrecioA=parseFloat(document.getElementById('t2-actual-pot-valle-precio').value);
    const puntaA=parseFloat(document.getElementById('t2-actual-punta').value);
    const llanoA=parseFloat(document.getElementById('t2-actual-llano').value);
    const valleA=parseFloat(document.getElementById('t2-actual-valle').value);
    const dtoA=parseFloat(document.getElementById('t2-actual-dto').value)||0;
    const unitPuntaA=document.querySelector('input[name="t2-actual-unit-punta"]:checked').value;
    const unitValleA=document.querySelector('input[name="t2-actual-unit-valle"]:checked').value;

    const potPuntaKwN=parseFloat(document.getElementById('t2-nueva-pot-punta-kw').value);
    const potPuntaPrecioN=parseFloat(document.getElementById('t2-nueva-pot-punta-precio').value);
    const potValleKwN=parseFloat(document.getElementById('t2-nueva-pot-valle-kw').value);
    const potVallePrecioN=parseFloat(document.getElementById('t2-nueva-pot-valle-precio').value);
    const puntaN=parseFloat(document.getElementById('t2-nueva-punta').value);
    const llanoN=parseFloat(document.getElementById('t2-nueva-llano').value);
    const valleN=parseFloat(document.getElementById('t2-nueva-valle').value);
    const dtoN=parseFloat(document.getElementById('t2-nueva-dto').value)||0;
    const unitPuntaN=document.querySelector('input[name="t2-nueva-unit-punta"]:checked').value;
    const unitValleN=document.querySelector('input[name="t2-nueva-unit-valle"]:checked').value;

    if(isNaN(potPuntaKwA)||isNaN(potPuntaPrecioA)||isNaN(potValleKwA)||isNaN(potVallePrecioA)||isNaN(puntaA)||isNaN(llanoA)||isNaN(valleA)||
       isNaN(potPuntaKwN)||isNaN(potPuntaPrecioN)||isNaN(potValleKwN)||isNaN(potVallePrecioN)||isNaN(puntaN)||isNaN(llanoN)||isNaN(valleN)){
      alert('⚠️ Completa todos los campos T2');return;
    }

    const precPuntaA=aplicarDescuento(puntaA,dtoA);
    const precLlanoA=aplicarDescuento(llanoA,dtoA);
    const precValleA=aplicarDescuento(valleA,dtoA);
    const precPuntaN=aplicarDescuento(puntaN,dtoN);
    const precLlanoN=aplicarDescuento(llanoN,dtoN);
    const precValleN=aplicarDescuento(valleN,dtoN);

    for(let i=0;i<consumosT2.meses.length;i++){
      const dias=consumosT2.dias[i];
      totalActual+=consumosT2.punta[i]*precPuntaA+consumosT2.llano[i]*precLlanoA+consumosT2.valle[i]*precValleA;
      totalNueva+=consumosT2.punta[i]*precPuntaN+consumosT2.llano[i]*precLlanoN+consumosT2.valle[i]*precValleN;
      const potPrecPuntaA=(unitPuntaA==='dia'?potPuntaPrecioA:potPuntaPrecioA/365)*dias;
      const potPrecValleA=(unitValleA==='dia'?potVallePrecioA:potVallePrecioA/365)*dias;
      const potPrecPuntaN=(unitPuntaN==='dia'?potPuntaPrecioN:potPuntaPrecioN/365)*dias;
      const potPrecValleN=(unitValleN==='dia'?potVallePrecioN:potVallePrecioN/365)*dias;
      totalActual+=(potPuntaKwA*potPrecPuntaA+potValleKwA*potPrecValleA);
      totalNueva+=(potPuntaKwN*potPrecPuntaN+potValleKwN*potPrecValleN);
    }

  }else if(tabActual==='gas'){
    nombreNueva=document.getElementById('gas-nueva-nombre').value||'Nueva GAS';
    const fijoA=parseFloat(document.getElementById('gas-actual-fijo').value);
    const varA=parseFloat(document.getElementById('gas-actual-variable').value);
    const dtoA=parseFloat(document.getElementById('gas-actual-dto').value)||0;
    const unitA=document.querySelector('input[name="gas-actual-unit"]:checked').value;

    const fijoN=parseFloat(document.getElementById('gas-nueva-fijo').value);
    const varN=parseFloat(document.getElementById('gas-nueva-variable').value);
    const dtoN=parseFloat(document.getElementById('gas-nueva-dto').value)||0;
    const unitN=document.querySelector('input[name="gas-nueva-unit"]:checked').value;

    if(isNaN(fijoA)||isNaN(varA)||isNaN(fijoN)||isNaN(varN)){alert('⚠️ Completa todos los campos GAS');return}

    const precVarA=aplicarDescuento(varA,dtoA);
    const precVarN=aplicarDescuento(varN,dtoN);
    const precFijoA=unitA==='dia'?fijoA:fijoA/30.4167;
    const precFijoN=unitN==='dia'?fijoN:fijoN/30.4167;

    for(let i=0;i<consumosGas.meses.length;i++){
      totalActual+=consumosGas.kwh[i]*precVarA+precFijoA*consumosGas.dias[i];
      totalNueva+=consumosGas.kwh[i]*precVarN+precFijoN*consumosGas.dias[i];
    }

  }else{
    nombreNueva=document.getElementById('t3-nueva-nombre').value||'Nueva T3';
    const textoA=document.getElementById('t3-actual-potencias').value;
    const textoN=document.getElementById('t3-nueva-potencias').value;
    const energiaTextoA=document.getElementById('t3-actual-energia').value;
    const energiaTextoN=document.getElementById('t3-nueva-energia').value;

    if(!textoA||!textoN||!energiaTextoA||!energiaTextoN){alert('⚠️ Completa potencias y energía T3');return}

    const potA=parsePotencias(textoA);
    const potN=parsePotencias(textoN);
    const enA=parseEnergia(energiaTextoA);
    const enN=parseEnergia(energiaTextoN);

    if(Object.keys(potA).length<6||Object.keys(potN).length<6){alert('⚠️ No se detectaron 6 potencias');return}
    if(Object.keys(enA).length<1||Object.keys(enN).length<1){alert('⚠️ No se detectaron precios de energía');return}

    const dtoA=parseFloat(document.getElementById('t3-actual-dto').value)||0;
    const dtoN=parseFloat(document.getElementById('t3-nueva-dto').value)||0;
    const mes=parseInt(document.getElementById('t3-mes').value);
    const dias=diasMes[mes];

    for(let j=1;j<=6;j++){
      const p='P'+j;
      if(potA[p])totalActual+=(potA[p].kw*potA[p].precio*dias);
      if(potN[p])totalNueva+=(potN[p].kw*potN[p].precio*dias);
    }

    const precEnA=aplicarDescuento(enA.P1||Object.values(enA)[0]||0,dtoA);
    const precEnN=aplicarDescuento(enN.P1||Object.values(enN)[0]||0,dtoN);
    const consumoEst=500;
    totalActual+=consumoEst*precEnA;
    totalNueva+=consumoEst*precEnN;
  }

  guardarDatos();
  const ahorro=-(totalActual-totalNueva);
  mostrarResultados(totalActual,totalNueva,ahorro);
  guardarHistorico(nombreNueva,totalNueva,ahorro);
}

function mostrarResultados(actual,nueva,ahorro){
  const html=`<div class="results-header">💰 Resultados</div>
<div class="summary">
<div class="summary-card"><div class="summary-label">Total - Oferta Actual</div><div class="summary-amount">${actual.toFixed(2)} €</div></div>
<div class="summary-card nueva"><div class="summary-label">Total - Oferta Nueva</div><div class="summary-amount">${nueva.toFixed(2)} €</div></div>
</div>
<div class="savings-grid-full">${getSavingHTML('💰 Ahorro TOTAL',ahorro)}</div>`;
  document.getElementById('results').innerHTML=html;
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});
}

function getSavingHTML(label,valor){
  const clazz=valor<0?'positive':(valor>0?'negative':'neutral');
  const amount=valor>0?'+'+valor.toFixed(2):valor.toFixed(2);
  return `<div class="savings ${clazz}"><div class="savings-label">${label}</div><div class="savings-amount">${amount} €</div></div>`;
}

function guardarHistorico(nombre,total,ahorro){
  let hist=JSON.parse(localStorage.getItem('historicoOfertas')||'[]');
  hist.push({id:Date.now(),nombre:nombre,total:total,ahorro:ahorro,fecha:new Date().toLocaleString('es-ES')});
  localStorage.setItem('historicoOfertas',JSON.stringify(hist));
  mostrarHistorico();
}

function mostrarHistorico(){
  const hist=JSON.parse(localStorage.getItem('historicoOfertas')||'[]');
  const container=document.getElementById('historico-list');
  if(hist.length===0){container.innerHTML='<div class="historico-empty">No hay ofertas guardadas</div>';document.getElementById('historico').classList.add('hidden');return}
  document.getElementById('historico').classList.remove('hidden');
  container.innerHTML='';
  hist.reverse().forEach(o=>{
    const item=document.createElement('div');
    item.className='historico-item';
    const aClass=o.ahorro<0?'positive':(o.ahorro>0?'negative':'');
    item.innerHTML=`<div class="historico-nombre">${o.nombre}</div><div class="historico-total">${o.total.toFixed(2)} €</div><div class="historico-ahorro ${aClass}">${o.ahorro.toFixed(2)} €</div><button class="historico-delete" onclick="eliminarOferta(${o.id})">🗑️</button>`;
    container.appendChild(item);
  });
}

function eliminarOferta(id){
  if(!confirm('¿Eliminar?'))return;
  let hist=JSON.parse(localStorage.getItem('historicoOfertas')||'[]');
  hist=hist.filter(o=>o.id!==id);
  localStorage.setItem('historicoOfertas',JSON.stringify(hist));
  mostrarHistorico();
}

function limpiarHistorico(){
  if(!confirm('¿Eliminar TODO?'))return;
  localStorage.removeItem('historicoOfertas');
  mostrarHistorico();
}

function exportarHistorico(){
  const data={ofertaActual:JSON.parse(localStorage.getItem('ofertaActual')||'{}'),historico:JSON.parse(localStorage.getItem('historicoOfertas')||'[]'),exportDate:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=`historico_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importarHistorico(e){
  const file=e.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(ev){
    try{
      const data=JSON.parse(ev.target.result);
      if(data.ofertaActual){localStorage.setItem('ofertaActual',JSON.stringify(data.ofertaActual));cargarDatos()}
      if(data.historico){localStorage.setItem('historicoOfertas',JSON.stringify(data.historico));mostrarHistorico()}
      alert('✅ Importado');
    }catch(err){alert('❌ Error')}
  };
  reader.readAsText(file);
  e.target.value='';
}

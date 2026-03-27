// checklist-data.js
// Datos del checklist de La Cabaña App
// Generado automáticamente — no editar manualmente el index.html para cambiar el CL

const PUNTOS = {
  soacha: {name:'Soacha', sub:'Taquería Hernández', icon:'🏠'},
  plaza:  {name:'Mi Plaza', sub:'Cabaña Jekemi', icon:'🏬'},
};

const AREAS_LIST = [
  {id:'admin',   name:'Admin / Cajero apertura', color:'#534AB7'},
  {id:'cocina',  name:'Cocina',                   color:'#D85A30'},
  {id:'caja',    name:'Cajero',                  color:'#534AB7'},
  {id:'domi',    name:'Domiciliarios',            color:'#1D9E75'},
  {id:'neveras', name:'Neveras / Frío',           color:'#185FA5'},
  {id:'bodega',  name:'Bodega',                   color:'#888780'},
];

const TURNOS_LIST = [
  {id:'apertura', name:'☀️ Apertura'},
  {id:'medio',    name:'🌤️ Turno medio'},
  {id:'cierre',   name:'🌙 Cierre'},
  {id:'hora',     name:'📊 Monitoreo'},
];

const CL = {
  admin:{
    apertura:[
      {t:'Verificar base de caja y efectivo del turno anterior',tipo:'check',crit:true},
      {t:'Temperatura nevera refrigeración 1',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera refrigeración 2',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera refrigeración 3',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación 1',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación 2',tipo:'temp',rango:[-22,-15],crit:false,unit:'°C'},
      {t:'Temperatura freidora 1',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 2',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 3',tipo:'temp',rango:[320,365],crit:false,unit:'°F'},
      {t:'Temperatura plancha taquería',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha carnes',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha panes',tipo:'temp',rango:[150,200],crit:false,unit:'°C'},
      {t:'Verificar personal presente por área',tipo:'check',crit:true},
      {t:'Verificar aseo del personal',tipo:'check',crit:true},
      {t:'Supervisar mise en place cocina — calidad general',tipo:'aseo',label:'Mise en place cocina',crit:true},
      {t:'Validar orden de neveras',tipo:'aseo',label:'Orden neveras',crit:true},
      {t:'Calidad de producto: caldo y carne',tipo:'aseo',label:'Calidad caldo y carne',crit:true},
      {t:'Calidad de papa 80/20 — riguroso',tipo:'aseo',label:'Calidad papa 80/20',crit:true},
      {t:'Prueba de papa final: freír 150g, probar y compartir con el personal en reunión diaria antes de abrir',tipo:'aseo',label:'Prueba papa final (150g)',crit:true},
      {t:'Aseo general del punto',tipo:'aseo',label:'Aseo general',crit:true},
      {t:'Verificar baños',tipo:'aseo',label:'Baños',crit:true},
    ],
    medio:[
      {t:'Ronda cocina — supervisión área',tipo:'check',crit:true},
      {t:'Ronda salón — supervisión área',tipo:'check',crit:true},
      {t:'Ronda baños — supervisión área',tipo:'check',crit:true},
      {t:'Ronda bodega — supervisión área',tipo:'check',crit:true},
      {t:'Ronda caja — verificar apps Rappi, DiDi, WhatsApp y Meta sin errores',tipo:'check',crit:true},
      {t:'Mise en place cocina al 80% — calidad general',tipo:'aseo',label:'Mise en place cocina',crit:true},
      {t:'Calidad verduras turno medio',tipo:'aseo',label:'Calidad verduras',crit:true},
      {t:'Calidad de producto: caldo y carne',tipo:'aseo',label:'Calidad caldo y carne',crit:true},
      {t:'Calidad de papa 80/20 — riguroso',tipo:'aseo',label:'Calidad papa 80/20',crit:true},
      {t:'Prueba de papa: freír 150g y calificar',tipo:'aseo',label:'Prueba papa (150g)',crit:false},
      {t:'Sin novedades en caja',tipo:'check',crit:false},
      {t:'Aseo cocina',tipo:'aseo',label:'Aseo cocina',crit:true},
      {t:'Aseo salón',tipo:'aseo',label:'Aseo salón',crit:true},
      {t:'Aseo baños',tipo:'aseo',label:'Aseo baños',crit:true},
      {t:'Cumplimiento general turno',tipo:'aseo',label:'Cumplimiento turno',crit:true},
    ],
    cierre:[
      {t:'Cajero — cierre de caja y bolsas completas',tipo:'cierre_area',area:'Cajero',crit:true},
      {t:'Cocina — equipos apagados, aseo y mise en place cubierto',tipo:'cierre_area',area:'Cocina',crit:true},
      {t:'Salón — mesas, sillas, barrido y trapeado',tipo:'cierre_area',area:'Salón',crit:true},
      {t:'Domiciliarios — baños lavados, canecas limpias, salón de atrás',tipo:'cierre_area',area:'Domiciliarios',crit:true},
      {t:'Bodega — inventario registrado, acceso asegurado',tipo:'cierre_area',area:'Bodega',crit:true},
      {t:'Revisar arqueo de caja y bolsas del cajero',tipo:'check',crit:true},
      {t:'Verificar neveras en funcionamiento al cierre',tipo:'check',crit:true},
      {t:'Supervisar aseo plancha: barrer y trapear parte inferior',tipo:'check',crit:true},
      {t:'Asegurar bodega, llaves de gas y apagado de extractor',tipo:'check',crit:true},
      {t:'Inventario cierre: panadería ✓',tipo:'check',crit:true},
      {t:'Inventario cierre: abarrotes ✓',tipo:'check',crit:true},
      {t:'Inventario cierre: verduras ✓',tipo:'check',crit:true},
      {t:'Inventario cierre: salsas ✓',tipo:'check',crit:true},
      {t:'Aseo final cocina',tipo:'aseo',label:'Aseo cocina',crit:true},
      {t:'Aseo final salón',tipo:'aseo',label:'Aseo salón',crit:true},
      {t:'Aseo final baños',tipo:'aseo',label:'Aseo baños',crit:true},
      {t:'Cumplimiento general cierre',tipo:'aseo',label:'Cumplimiento',crit:true},
      {t:'Tiempo de pedidos al cierre — promedio del día',tipo:'aseo',label:'Tiempo pedidos',crit:true},
    ],
    // MONITOREO: temps varían por punto — se calculan dinámicamente en getCL()
    hora:[
      {t:'Temperatura nevera refrigeración 1',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera refrigeración 2',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera refrigeración 3',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación 1',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación 2',tipo:'temp',rango:[-22,-15],crit:false,unit:'°C'},
      {t:'Temperatura freidora 1',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 2',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 3',tipo:'temp',rango:[320,365],crit:false,unit:'°F'},
      {t:'Temperatura plancha taquería',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha carnes',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha panes',tipo:'temp',rango:[150,200],crit:false,unit:'°C'},
      {t:'Calidad de papa 80/20',tipo:'aseo',label:'Calidad papa 80/20',crit:true},
      {t:'Tiempo de pedidos — velocidad de despacho',tipo:'aseo',label:'Tiempo de pedidos',crit:true},
    ],
  },
  cocina:{
    apertura:[
      {t:'Verificar productos: carnes, papas, tortillas, caldo, pan',tipo:'check',crit:true},
      {t:'Temperatura plancha taquería',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha carnes',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha panes',tipo:'temp',rango:[150,200],crit:true,unit:'°C'},
      {t:'Temperatura freidora 1',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 2',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 3',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Verificar orden de las neveras',tipo:'check',crit:true},
      {t:'Realizar alistamientos para el turno (mise en place)',tipo:'check',crit:true},
      {t:'Mise en place cocina — calidad general',tipo:'aseo',label:'Mise en place cocina',crit:true},
      {t:'Calidad de producto: caldo y carne',tipo:'aseo',label:'Calidad caldo y carne',crit:true},
      {t:'Calidad de papa 80/20 — riguroso',tipo:'aseo',label:'Calidad papa 80/20',crit:true},
      {t:'Prueba de papa final: freír 150g, probar y compartir con el personal en reunión diaria antes de abrir',tipo:'aseo',label:'Prueba papa final (150g)',crit:true},
      {t:'Aseo área cocina',tipo:'aseo',label:'Aseo cocina',crit:true},
    ],
    medio:[
      {t:'Mise en place carnes al 80%',tipo:'check',crit:true},
      {t:'Mise en place salsas, panes, tortillas al 80%',tipo:'check',crit:true},
      {t:'Mise en place papas al 80%',tipo:'check',crit:true},
      {t:'Temperatura freidora 1',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 2',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 3',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura plancha taquería',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha carnes',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha panes',tipo:'temp',rango:[150,200],crit:true,unit:'°C'},
      {t:'Ningún producto destapado o fuera de nevera (carnes, salsas, caldo, vegetales)',tipo:'check',crit:true},
      {t:'Aseo cocina turno medio',tipo:'aseo',label:'Aseo cocina',crit:true},
    ],
    cierre:[
      {t:'Inventario cárnicos y congelados (rotativo L–V / jefe cocina S–D)',tipo:'check',crit:true,badge:'rot'},
      {t:'Apagar planchas y freidoras',tipo:'check',crit:true},
      {t:'Mantenimiento aceite: retirar TODO el residuo de freidoras',tipo:'check',crit:true},
      {t:'Guardar carnes sobrantes con fecha y hora',tipo:'check',crit:true},
      {t:'Limpiar rejillas parrilla con cepillo',tipo:'check',crit:true},
      {t:'Área plancha: barrer y trapear parte inferior (caldos y kit de aseo)',tipo:'check',crit:true},
      {t:'Lavar teteros (Dom / Mié / Vie)',tipo:'check',crit:false,badge:'freq'},
      {t:'Cubrir mise en place sobrante',tipo:'check',crit:false},
      {t:'Aseo final cocina',tipo:'aseo',label:'Aseo cocina',crit:true},
      {t:'Calidad final: cocción, sellado, frituras crocantes',tipo:'aseo',label:'Calidad producto',crit:true},
      {t:'Tiempo de pedidos al cierre — evaluación del día',tipo:'aseo',label:'Tiempo pedidos',crit:true},
    ],
    hora:[
      {t:'Temperatura freidora 1',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 2',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura freidora 3',tipo:'temp',rango:[320,365],crit:true,unit:'°F'},
      {t:'Temperatura plancha taquería',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha carnes',tipo:'temp',rango:[180,230],crit:true,unit:'°C'},
      {t:'Temperatura plancha panes',tipo:'temp',rango:[150,200],crit:true,unit:'°C'},
      {t:'Calidad de papa 80/20',tipo:'aseo',label:'Calidad papa 80/20',crit:true},
      {t:'Tiempo de pedidos — velocidad de despacho',tipo:'aseo',label:'Tiempo de pedidos',crit:true},
    ],
  },
  caja:{
    apertura:[
      {t:'Base de caja apertura ($)',tipo:'dinero',campo:'Base apertura',crit:true},
      {t:'Efectivo recibido turno anterior ($)',tipo:'dinero',campo:'Efectivo recibido',crit:true},
      {t:'Faltante turno anterior ($)',tipo:'dinero',campo:'Faltante anterior',crit:true},
      {t:'Inventario datáfonos disponibles',tipo:'datofonos',crit:true},
      {t:'Sistema POS encendido y funcionando',tipo:'check',crit:true},
      {t:'Limpiar área: teclado, mouse, impresora, modem, tablet',tipo:'check',crit:true},
      {t:'Rappi C — activa, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'Rappi T — activa, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'DiDi C — activa, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'DiDi T — activa, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'WhatsApp 1 — activo, revisar últimas conversaciones delivery y escribir novedades',tipo:'plataforma',crit:true},
      {t:'WhatsApp 2 — activo, revisar últimas conversaciones delivery y escribir novedades',tipo:'plataforma',crit:true},
      {t:'WhatsApp 3 — activo, revisar últimas conversaciones delivery y escribir novedades',tipo:'plataforma',crit:true},
      {t:'WhatsApp 4 — activo, revisar últimas conversaciones delivery y escribir novedades',tipo:'plataforma',crit:true},
      {t:'Meta 1 — activo, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'Meta 2 — activo, sin errores, últimas conversaciones revisadas',tipo:'check',crit:true},
      {t:'Aseo área caja',tipo:'aseo',label:'Aseo caja',crit:true},
    ],
    medio:[
      {t:'Cuadre parcial caja',tipo:'check',crit:true},
      {t:'Datáfonos funcionando',tipo:'check',crit:true},
      {t:'Plataformas delivery sin errores o pedidos pendientes',tipo:'check',crit:true},
    ],
    cierre:[
      {t:'Efectivo en caja al cierre ($)',tipo:'dinero',campo:'Efectivo cierre',crit:true},
      {t:'Ventas en datáfono ($)',tipo:'dinero',campo:'Ventas datáfono',crit:true},
      {t:'Total ventas sistema ($)',tipo:'dinero',campo:'Ventas sistema',crit:true},
      {t:'Arqueo (faltante / sobrante)',tipo:'arqueo',crit:true},
      {t:'Bolsa 1: efectivo sellado con fecha y nombre del punto',tipo:'check',crit:true},
      {t:'Bolsa 2: facturas del día con fecha, punto y forma de pago',tipo:'check',crit:true},
      {t:'Paquetes listos para transportar al día siguiente',tipo:'check',crit:true},
      {t:'Inventario datáfonos al cierre',tipo:'datofonos',crit:true},
      {t:'Limpiar televisores',tipo:'check',crit:true},
      {t:'Limpiar mesas y sillas para el día siguiente',tipo:'check',crit:true},
      {t:'Aseo área caja cierre',tipo:'aseo',label:'Aseo caja',crit:true},
    ],
    hora:[
      {t:'Rappi C — pedidos activos, sin errores',tipo:'check',crit:true},
      {t:'Rappi T — pedidos activos, sin errores',tipo:'check',crit:true},
      {t:'DiDi C — pedidos activos, sin errores',tipo:'check',crit:true},
      {t:'DiDi T — pedidos activos, sin errores',tipo:'check',crit:true},
      {t:'WhatsApp 1, 2, 3, 4 — sin conversaciones sin atender',tipo:'check',crit:true},
      {t:'Meta 1 y 2 — sin mensajes sin atender',tipo:'check',crit:true},
    ],
  },
  domi:{
    apertura:[
      {t:'Temperatura nevera gaseosa (2–8°C)',tipo:'temp',rango:[2,8],crit:true,unit:'°C'},
      {t:'Realizar apertura del salón',tipo:'check',crit:true},
      {t:'Poner bolsas de basura en canecas',tipo:'check',crit:true},
      {t:'Dejar alistamientos: jabón, papel higiénico, servilletas',tipo:'check',crit:true},
      {t:'Bandejas limpias y desinfectadas',tipo:'check',crit:true},
      {t:'Aseo salón apertura',tipo:'aseo',label:'Aseo salón',crit:true},
      {t:'Aseo baños apertura',tipo:'aseo',label:'Aseo baños',crit:true},
    ],
    medio:[
      {t:'Mesas limpias post-servicio',tipo:'check',crit:true},
      {t:'Nevera gaseosa parte superior: limpiar L/Mié/Sáb',tipo:'check',crit:false,badge:'freq'},
      {t:'Envasar, sellar y rotular bebidas (rotativo)',tipo:'check',crit:false,badge:'rot'},
      {t:'Sitio bebidas y utensilios de aseo — limpio y ordenado',tipo:'check',crit:true},
      {t:'Bandejas limpias y desinfectadas',tipo:'check',crit:true},
      {t:'Revisión baños turno medio',tipo:'aseo',label:'Aseo baños',crit:true},
    ],
    cierre:[
      {t:'Aseo salón y salón de atrás: barrer, trapear, limpiar bajo canastas',tipo:'check',crit:true},
      {t:'Lavado de baños al cierre',tipo:'check',crit:true},
      {t:'Canecas limpias',tipo:'check',crit:true},
      {t:'Shut de basuras limpio',tipo:'check',crit:true},
      {t:'Inventario bebidas — nevera surtida y limpia',tipo:'check',crit:true},
      {t:'Llenar tarros de salsas para el día siguiente',tipo:'check',crit:true,badge:'rot'},
      {t:'Maletas limpias y desinfectadas',tipo:'check',crit:true},
      {t:'Bandejas limpias y desinfectadas',tipo:'check',crit:true},
      {t:'Datáfono funcionando',tipo:'check',crit:true},
      {t:'Temperatura nevera gaseosa al cierre (2–8°C)',tipo:'temp',rango:[2,8],crit:true,unit:'°C'},
      {t:'Aseo final salón',tipo:'aseo',label:'Aseo salón',crit:true},
      {t:'Aseo final baños',tipo:'aseo',label:'Aseo baños',crit:true},
      {t:'Tiempo de pedidos al cierre — evaluación del día',tipo:'aseo',label:'Tiempo pedidos',crit:true},
    ],
    hora:[
      {t:'Revisión y aseo baños',tipo:'aseo',label:'Aseo baños',crit:true},
      {t:'Mesas limpias y en orden',tipo:'check',crit:false},
      {t:'Papel y jabón repuesto',tipo:'check',crit:true},
    ],
  },
  neveras:{
    apertura:[
      {t:'Temperatura nevera refrigeración (0–4°C)',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera gaseosa',tipo:'temp',rango:[2,8],crit:false,unit:'°C'},
      {t:'Temperatura nevera congelación (-18 a -20°C)',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
      {t:'Revisar sellos y puertas herméticas',tipo:'check',crit:true},
      {t:'Rotación PEPS aplicada',tipo:'check',crit:true},
      {t:'Verificar fechas de vencimiento',tipo:'check',crit:true},
    ],
    medio:[
      {t:'Temperatura nevera refrigeración',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
      {t:'Puertas cerradas correctamente',tipo:'check',crit:true},
    ],
    cierre:[
      {t:'Temperatura nevera refrigeración al cierre',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación al cierre',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
      {t:'Todo producto tapado y etiquetado con fecha',tipo:'check',crit:true},
      {t:'DOMINGO: lavado neveras refrigeración',tipo:'check',crit:false,badge:'freq'},
      {t:'LUNES MAÑANA: lavado nevera congelación (quien abre)',tipo:'check',crit:false,badge:'freq'},
      {t:'Aseo interior neveras',tipo:'aseo',label:'Aseo neveras',crit:true},
    ],
    hora:[
      {t:'Temperatura nevera refrigeración',tipo:'temp',rango:[-1,5],crit:true,unit:'°C'},
      {t:'Temperatura nevera congelación',tipo:'temp',rango:[-22,-15],crit:true,unit:'°C'},
    ],
  },
  bodega:{
    apertura:[
      {t:'Conteo inventario seco',tipo:'check',crit:true},
      {t:'Conteo inventario refrigerado',tipo:'check',crit:true},
      {t:'Verificar pedidos pendientes',tipo:'check',crit:false},
      {t:'Rotación PEPS aplicada',tipo:'check',crit:true},
      {t:'Aseo bodega apertura',tipo:'aseo',label:'Aseo bodega',crit:true},
    ],
    medio:[
      {t:'Stock ok — sin faltantes críticos',tipo:'check',crit:true},
      {t:'Acceso controlado a bodega',tipo:'check',crit:false},
    ],
    cierre:[
      {t:'Inventario cierre — registrar faltantes',tipo:'check',crit:true},
      {t:'Preparar pedido para el día siguiente',tipo:'check',crit:true},
      {t:'Asegurar y cerrar bodega',tipo:'check',crit:true},
      {t:'Aseo bodega cierre',tipo:'aseo',label:'Aseo bodega',crit:true},
    ],
    hora:[],
  },
};

// ── CL dinámico por punto ──────────────────────────────────────
function getCLpunto(punto){
  // Clonar CL base
  const cl = JSON.parse(JSON.stringify(CL));
  const esHogares = punto === 'plaza';

  // Admin.hora: ajustar según punto
  if(esHogares){
    // Hogares: sin plancha panes, 2 freidoras, 3 refrig + 1 congel
    cl.admin.hora = cl.admin.hora.filter(t=>{
      if(t.t.includes('plancha panes')) return false;
      if(t.t.includes('freidora 3')) return false;
      if(t.t.includes('nevera congelación 2')) return false;
      return true;
    });
    // Renombrar nevera congelación 1 → nevera congelación
    cl.admin.hora = cl.admin.hora.map(t=>({
      ...t,
      t: t.t.replace('nevera refrigeración 1','nevera refrigeración 1')
            .replace('nevera congelación 1','nevera congelación')
    }));
  } else {
    // Soacha: 3 freidoras, 3 refrig + 2 congel — quitar solo nevera refrig extra en monitoreo
    // (ya tiene los 5 en admin.hora)
  }

  // Cocina: ajustar según punto
  if(esHogares){
    // Sin plancha panes, 2 freidoras
    ['apertura','medio','hora'].forEach(turno=>{
      if(!cl.cocina[turno]) return;
      cl.cocina[turno] = cl.cocina[turno].filter(t=>{
        if(t.t && t.t.toLowerCase().includes('plancha panes')) return false;
        if(t.t && t.t.toLowerCase().includes('freidora 3')) return false;
        return true;
      });
    });
  }

  // Neveras: ajustar según punto
  if(esHogares){
    // 3 refrig + 1 congel
    ['apertura','medio','cierre','hora'].forEach(turno=>{
      if(!cl.neveras[turno]) return;
      cl.neveras[turno] = cl.neveras[turno].filter(t=>{
        if(t.t && t.t.toLowerCase().includes('nevera congelación') &&
           t.t.toLowerCase().includes('2')) return false;
        return true;
      });
    });
  }

  return cl;
}

// Acceso global al CL del punto actual
function getCL(){ return getCLpunto(curPunto||'soacha'); }


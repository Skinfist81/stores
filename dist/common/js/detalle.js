/*! stores - v1.0.0 - 2021-01-21 */
import{stores}from"./stores/index.js";(()=>{if(window.storesJsonFile){const e=stores.getStoreFromUrl();stores.get(storesJsonFile).then(async({ciudades:o})=>{const r=o[e.city].tiendas[e.store],t=document.querySelector("#stores"),s=document.querySelector(".contenedor_tienda_detalle"),n=[],i=document.querySelectorAll(".nombre-ciudad");console.log(o[e.city].label),console.log(o[e.store]),t.innerHTML="",i.forEach(r=>r.innerHTML=o[e.city].label),s.insertAdjacentHTML("beforeend",await stores.render.detail({address:r.direccion,howToGet:r.como_llegar,image:r.imagen,link:r.ir,map:r.ver_mapa,name:r.nombre_tienda,schedule:r.horario_apertura,scheduleDetail:r.horarios})),Object.keys(o[e.city].tiendas).length>1?(Object.entries(o[e.city].tiendas).forEach(r=>{const t=r[0],s=r[1];t!=e.store&&n.push(stores.render.store({address:s.direccion,city:o[e.city].label,howToGet:s.como_llegar,label:`todas ${e.city}`,link:s.ir,name:s.nombre_tienda,schedule:s.horario_apertura}))}),Promise.all(n).then(e=>{t.innerHTML="",e.forEach(e=>t.insertAdjacentHTML("beforeend",`${e}`))})):document.querySelector(".tit_otras").remove()})}})();
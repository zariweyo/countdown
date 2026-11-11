// Departure at 07:10 in Sevilla (CET), 2 December 2026.
const DEPARTURE = Date.parse("2026-12-02T07:10:00+01:00");
const TRIP_END = Date.parse("2026-12-06T19:50:00+01:00");
const ids = ["days","hours","minutes","seconds"];
const nodes = Object.fromEntries(ids.map(id => [id,document.getElementById(id)]));
const status = document.getElementById("status");
function updateCountdown(){
  const now = Date.now(), remaining = Math.max(0,DEPARTURE-now);
  const values={days:Math.floor(remaining/86400000),hours:Math.floor(remaining/3600000)%24,minutes:Math.floor(remaining/60000)%60,seconds:Math.floor(remaining/1000)%60};
  for(const id of ids)nodes[id].textContent=String(values[id]).padStart(2,"0");
  if(now>=TRIP_END){status.textContent="¡Qué aventura tan bonita! Londres, siempre en nuestros recuerdos. 💖";}
  else if(now>=DEPARTURE){status.textContent="¡Nuestra aventura en Londres ya está en marcha! 🇬🇧✨";}
}
updateCountdown();setInterval(updateCountdown,1000);
const days={
  2:{title:"Miércoles 2 · ¡Empieza la aventura!",items:[{time:"07:10 CET",title:"✈️ Despegue desde Sevilla",detail:"Ryanair FR5375 · Aeropuerto de Sevilla (SVQ)",url:"https://www.google.com/maps/search/?api=1&query=Seville+Airport",label:"Ver aeropuerto"},{time:"09:00 GMT",title:"🛬 Llegada a Londres Stansted",detail:"Aeropuerto STN · Después toca el traslado a Stratford.",url:"https://www.google.com/maps/dir/?api=1&origin=London+Stansted+Airport&destination=Epsilon+Hotel+27A+Romford+Road+London&travelmode=transit",label:"Cómo llegar al hotel"},{time:"14:00 GMT",title:"🏨 Check-in en Epsilon Hotel",detail:"27A Romford Road, Stratford, London E15 4LJ",url:"https://www.google.com/maps/search/?api=1&query=Epsilon+Hotel+27A+Romford+Road+London",label:"Ver hotel"}]},
  3:{title:"Jueves 3 · Un día de magia 🪄",items:[{time:"11:45 GMT",title:"🚌 Excursión a Warner Bros. Studio Tour",detail:"Golden Tours · Punto de encuentro King's Cross / St Pancras, parada T, Pancras Road. Es la hora de inicio de la excursión, no necesariamente la entrada al estudio.",url:"https://www.google.com/maps/dir/?api=1&origin=Epsilon+Hotel+27A+Romford+Road+London&destination=King%27s+Cross+St+Pancras+Bus+Stop+T+Pancras+Road+London&travelmode=transit",label:"Ruta hasta la parada T"},{time:"18:45 GMT",title:"✨ Fin previsto de la excursión",detail:"Horario final indicado por Golden Tours; incluye los traslados de la actividad.",url:"https://www.google.com/maps/search/?api=1&query=King%27s+Cross+St+Pancras+London",label:"Ver King's Cross"}]},
  4:{title:"Viernes 4 · Un día por descubrir ✨",items:[{time:"Sin horario fijado",title:"🗺️ Día libre de reservas",detail:"Ideal para añadir visitas. Todavía no hay actividades confirmadas para esta fecha.",url:null}]},
  5:{title:"Sábado 5 · Más Londres por explorar 🎄",items:[{time:"Sin horario fijado",title:"🌟 Día libre de reservas",detail:"La agenda está abierta para museos, paseos y luces navideñas.",url:null}]},
  6:{title:"Domingo 6 · Hasta pronto, Londres",items:[{time:"11:00 GMT",title:"🧳 Check-out Epsilon Hotel",detail:"Salida del alojamiento. Planificar con margen suficiente el traslado al aeropuerto.",url:"https://www.google.com/maps/dir/?api=1&origin=Epsilon+Hotel+27A+Romford+Road+London&destination=London+Gatwick+Airport&travelmode=transit",label:"Ruta a Gatwick"},{time:"16:55 GMT",title:"✈️ Despegue desde Gatwick",detail:"easyJet EZY8007 · Aeropuerto de Londres Gatwick (LGW)",url:"https://www.google.com/maps/search/?api=1&query=London+Gatwick+Airport",label:"Ver aeropuerto"},{time:"19:50 CET",title:"🏡 Llegada a Sevilla",detail:"Fin de la aventura · Hora española.",url:null}]}
};
function renderDay(n){
  const d=days[n], box=document.getElementById("day-detail");
  box.replaceChildren();
  const header=document.createElement("h3");header.textContent=d.title;box.appendChild(header);
  const timeline=document.createElement("div");timeline.className="timeline";
  for(const item of d.items){
    const event=document.createElement("article");event.className="timeline-event";
    const time=document.createElement("time");time.textContent=item.time;
    const heading=document.createElement("h4");heading.textContent=item.title;
    const p=document.createElement("p");p.textContent=item.detail;
    event.append(time,heading,p);
    if(item.url){const a=document.createElement("a");a.className="inline-link";a.href=item.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=item.label+" ↗";event.appendChild(a);}
    timeline.appendChild(event);
  }
  box.appendChild(timeline);
  document.querySelectorAll(".day-button").forEach(b=>{const selected=b.dataset.day===String(n);b.classList.toggle("selected",selected);b.setAttribute("aria-pressed",String(selected));});
}
function showView(id){
  document.querySelectorAll(".view").forEach(v=>{const active=v.id==="view-"+id;v.hidden=!active;v.classList.toggle("active",active);});
  document.querySelectorAll(".tab").forEach(b=>{const active=b.dataset.view===id;b.classList.toggle("active",active);b.setAttribute("aria-selected",String(active));});
  history.replaceState(null,"","#"+id);
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>{showView(b.dataset.go);document.querySelector(".tabs").scrollIntoView({behavior:"smooth",block:"start"});}));
document.querySelectorAll(".day-button").forEach(b=>b.addEventListener("click",()=>renderDay(b.dataset.day)));
renderDay(2);
const route=location.hash.slice(1);if(["resumen","calendario","reservas","mapas"].includes(route))showView(route);

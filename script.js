// Flight date in Sevilla time. Update this ISO timestamp once the exact departure time is confirmed.
// 2026-12-02T00:00:00+01:00 means the START of departure day, not the flight's actual takeoff.
const DEPARTURE = new Date("2026-12-02T00:00:00+01:00").getTime();
const ids = ["days", "hours", "minutes", "seconds"];
const nodes = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
const status = document.getElementById("status");
function updateCountdown() {
  const remaining = Math.max(0, DEPARTURE - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };
  for (const id of ids) nodes[id].textContent = String(values[id]).padStart(2, "0");
  if (remaining === 0) {
    status.textContent = "¡Llegó el gran día! ¡Nos vamos a Londres! 🇬🇧✈️";
    document.title = "¡Nos vamos a Londres! ✈";
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);
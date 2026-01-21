const stations = [
  {
    name: "FIP Radio (France)",
    country: "Europe",
    stream: "https://icecast.radiofrance.fr/fip-hifi.aac"
  },
  {
    name: "Smooth Jazz 24/7",
    country: "USA",
    stream: "https://us4.internet-radio.com/proxy/jazz24?mp=/stream"
  },
  {
    name: "Swiss Classic",
    country: "Europe",
    stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"
  }
];

const container = document.getElementById("stations");
const player = document.getElementById("player");

function loadStations(list) {
  container.innerHTML = "";
  list.forEach(s => {
    container.innerHTML += `
      <div class="station" onclick="play('${s.stream}')">
        📻 <strong>${s.name}</strong><br>
        🌍 ${s.country}
      </div>`;
  });
}

function play(url) {
  player.src = url;
  player.play();
}

function filterStations() {
  const q = document.getElementById("search").value.toLowerCase();
  const c = document.getElementById("countryFilter").value;

  loadStations(
    stations.filter(s =>
      s.name.toLowerCase().includes(q) &&
      (c === "all" || s.country === c)
    )
  );
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

loadStations(stations);

 const bodies ={
  "sun": {
    name: "The Sun",
    img: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint",
    color: "radial-gradient(circle at 35% 35%, #fff7aa, #ffcc00, #ff8800, #cc4400)",
    desc: "The Sun is the star at the center of our Solar System. It accounts for 99.86% of the total mass of the Solar System and has been studied since ancient times.",
    equation: "L = 4πR²σT⁴",
    eqExplain: "Stefan-Boltzmann Law — calculates the Sun's luminosity (L) from its radius (R) and surface temperature (T). σ is the Stefan-Boltzmann constant.",
    facts: [
      { label: "Type", value: "G-type Star" },
      { label: "Age", value: "4.6 billion years" },
      { label: "Surface Temp", value: "5,500 °C" },
      { label: "Diameter", value: "1,392,700 km" }
    ]
  },
  "mercury": {
    name: "Mercury",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #c8c8c8, #888888, #555555)",
    desc: "Mercury is the smallest planet in our solar system and nearest to the Sun. It's only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.",
    equation: "Δφ = 43'' per century",
    eqExplain: "The precession of Mercury's perihelion — the extra 43 arcseconds per century in Mercury's orbit that Newton's laws couldn't explain, but Einstein's relativity could.",
    facts: [
      { label: "Type", value: "Terrestrial Planet" },
      { label: "Distance from Sun", value: "57.9 million km" },
      { label: "Orbital Period", value: "88 days" },
      { label: "Moons", value: "0" }
    ]
  },
  "venus": {
    name: "Venus",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #fffaaa, #e8c840, #c8a820, #8a6800)",
    desc: "Venus is the hottest planet despite not being closest to the Sun, due to its thick CO₂ atmosphere causing a runaway greenhouse effect.",
    equation: "ΔT = (α × S) / (4 × ε × σ)",
    eqExplain: "The planetary energy balance equation — used to calculate Venus's extreme surface temperature (462°C) from its albedo (α), solar constant (S) and emissivity (ε).",
    facts: [
      { label: "Type", value: "Terrestrial Planet" },
      { label: "Surface Temp", value: "462 °C" },
      { label: "Orbital Period", value: "225 days" },
      { label: "Moons", value: "0" }
    ]
  },
  "earth": {
    name: "Earth",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #aaddff, #2266cc, #116622, #0a4418)",
    desc: "Earth is our home planet and the only known world to harbor life. Its distance from the Sun, liquid water, and magnetic field make it uniquely habitable.",
    equation: "g = GM / R²",
    eqExplain: "Newton's Law of Gravitation — calculates Earth's surface gravity (g = 9.8 m/s²) from its mass (M) and radius (R). G is the gravitational constant.",
    facts: [
      { label: "Type", value: "Terrestrial Planet" },
      { label: "Surface Temp", value: "15 °C avg" },
      { label: "Orbital Period", value: "365.25 days" },
      { label: "Moons", value: "1" }
    ]
  },
  "mars": {
    name: "Mars",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #ffaa88, #cc4422, #882200)",
    desc: "Mars is the Red Planet, named for its iron oxide surface. It has the tallest volcano in the solar system — Olympus Mons — and was studied extensively using Kepler's laws.",
    equation: "T² = (4π² / GM) × a³",
    eqExplain: "Kepler's Third Law — relates Mars's orbital period (T = 687 days) to its distance from the Sun (a). Used to calculate and predict its exact position in the sky.",
    facts: [
      { label: "Type", value: "Terrestrial Planet" },
      { label: "Distance from Sun", value: "227.9 million km" },
      { label: "Orbital Period", value: "687 days" },
      { label: "Moons", value: "2" }
    ]
  },
  "jupiter": {
    name: "Jupiter",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #ffddaa, #cc9944, #aa6622, #884400)",
    desc: "Jupiter is the largest planet in our solar system. Its Great Red Spot is a storm that has raged for over 350 years. Its moons were the first discovered by Galileo in 1610.",
    equation: "F = GMm / r²",
    eqExplain: "Newton's Law of Universal Gravitation — Jupiter's massive gravity (used to discover it bends the paths of nearby asteroids and comets) is calculated with this equation.",
    facts: [
      { label: "Type", value: "Gas Giant" },
      { label: "Mass", value: "318× Earth" },
      { label: "Orbital Period", value: "11.9 years" },
      { label: "Moons", value: "95" }
    ]
  },
  "saturn": {
    name: "Saturn",
    img: "https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?resize=600,200",
    color: "radial-gradient(circle at 35% 35%, #fff0cc, #ddbb88, #aa8844, #775522)",
    desc: "Saturn is famous for its spectacular ring system made of ice and rock. Its rings were first observed by Galileo and their nature was explained by James Clerk Maxwell.",
    equation: "Ω = √(GM / r³)",
    eqExplain: "Orbital angular velocity equation — Maxwell used this to prove Saturn's rings must be made of separate particles, not solid sheets, or they would tear apart.",
    facts: [
      { label: "Type", value: "Gas Giant" },
      { label: "Ring Width", value: "282,000 km" },
      { label: "Orbital Period", value: "29.5 years" },
      { label: "Moons", value: "146" }
    ]
  },
  "uranus": {
    name: "Uranus",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #ccffff, #88dddd, #44aaaa, #227777)",
    desc: "Uranus is an ice giant that rotates on its side with an axial tilt of 98°. It was the first planet discovered with a telescope, by William Herschel in 1781.",
    equation: "v = √(GM/r)",
    eqExplain: "Orbital velocity equation — used by Herschel and later astronomers to confirm Uranus was a planet by calculating its orbital speed and comparing it to predictions.",
    facts: [
      { label: "Type", value: "Ice Giant" },
      { label: "Axial Tilt", value: "97.8°" },
      { label: "Orbital Period", value: "84 years" },
      { label: "Moons", value: "28" }
    ]
  },
  "neptune": {
    name: "Neptune",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #aabbff, #4466ee, #2244cc, #112288)",
    desc: "Neptune was the first planet discovered through mathematical prediction rather than observation. Astronomers noticed Uranus's orbit was being disturbed and calculated where Neptune must be.",
    equation: "∇²Φ = 4πGρ",
    eqExplain: "Poisson's equation for gravity — Le Verrier used gravitational perturbation calculations based on this to predict Neptune's exact position before it was ever seen.",
    facts: [
      { label: "Type", value: "Ice Giant" },
      { label: "Wind Speed", value: "2,100 km/h" },
      { label: "Orbital Period", value: "165 years" },
      { label: "Moons", value: "16" }
    ]
  },
  "pluto": {
    name: "Pluto",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/pluto-new-horizons-pia20291-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #ffddcc, #cc9977, #996644, #664422)",
    desc: "Pluto is a dwarf planet in the Kuiper Belt. It was discovered in 1930 by Clyde Tombaugh and reclassified as a dwarf planet by the IAU in 2006.",
    equation: "e = √(1 - b²/a²)",
    eqExplain: "Orbital eccentricity equation — Pluto has a very elliptical orbit (e = 0.25), meaning its distance from the Sun varies enormously between 4.4 and 7.4 billion km.",
    facts: [
      { label: "Type", value: "Dwarf Planet" },
      { label: "Diameter", value: "2,377 km" },
      { label: "Orbital Period", value: "248 years" },
      { label: "Moons", value: "5" }
    ]
  },
  "ceres": {
    name: "Ceres",
    img: "https://science.nasa.gov/wp-content/uploads/2024/03/ceres-dawn-pia19562-16x9-1.jpg?resize=600,338",
    color: "radial-gradient(circle at 35% 35%, #bbbbaa, #888877, #555544, #333322)",
    desc: "Ceres is the largest object in the asteroid belt between Mars and Jupiter. It was the first asteroid ever discovered in 1801 and is also classified as a dwarf planet.",
    equation: "a = (T² × GM☉ / 4π²)^(1/3)",
    eqExplain: "Kepler's Third Law rearranged — used by Piazzi and Gauss to calculate Ceres's orbital distance (2.77 AU) from its period (4.6 years) after only a few observations.",
    facts: [
      { label: "Type", value: "Dwarf Planet" },
      { label: "Location", value: "Asteroid Belt" },
      { label: "Orbital Period", value: "4.6 years" },
      { label: "Diameter", value: "945 km" }
    ]
  },
  "eris": {
    name: "Eris",
    img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/e/ErisArtistConcept1200w.jpg?w=1200&h=900&fit=clip&crop=faces%2Cfocalpoint",
    color: "radial-gradient(circle at 35% 35%, #ddddee, #aaaacc, #777799, #444466)",
    desc: "Eris is the most massive dwarf planet in the solar system located in the scattered disc beyond Neptune. Its discovery in 2005 directly caused Pluto to be reclassified.",
    equation: "M = (4π²a³) / (GT²)",
    eqExplain: "Mass from orbital mechanics — scientists calculated Eris's mass (27% heavier than Pluto) by observing the orbit of its moon Dysnomia and applying this equation.",
    facts: [
      { label: "Type", value: "Dwarf Planet" },
      { label: "Location", value: "Scattered Disc" },
      { label: "Orbital Period", value: "559 years" },
      { label: "Moons", value: "1 (Dysnomia)" }
    ]
  },
  "halley comet": {
    name: "Halley's Comet",
    img: "https://apod.nasa.gov/apod/image/9612/halley_hmc.gif",
    color: "radial-gradient(circle at 35% 35%, #ffffff, #aaddff, #4499cc, #003366)",
    desc: "Halley's Comet is the most famous periodic comet visible from Earth every 75 years. Edmond Halley used Newton's laws in 1705 to predict it would return — and it did.",
    equation: "1/T = √(GM / 4π²a³)",
    eqExplain: "Kepler's Third Law — Halley used this to show that comets seen in 1531, 1607 and 1682 were the same object with a 75-year orbital period, predicting its 1758 return.",
    facts: [
      { label: "Type", value: "Periodic Comet" },
      { label: "Last Visit", value: "1986" },
      { label: "Next Visit", value: "2061" },
      { label: "Orbital Period", value: "~75 years" }
    ]
  }
};

function search() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  loadBody(input);
}

function loadBody(name) {
  const key = name.toLowerCase();
  const data = bodies[key];
  const result = document.getElementById("result");
  const notFound = document.getElementById("notFound");

  if (!data) {
    result.style.display = "none";
    notFound.style.display = "block";
    return;
  }

  notFound.style.display = "none";
  result.style.display = "flex";

  document.getElementById("bodyName").textContent = data.name;
  document.getElementById("bodyDesc").textContent = data.desc;
  document.getElementById("bodyEquation").textContent = data.equation;
  document.getElementById("bodyEqExplain").textContent = data.eqExplain;

  const visual = document.getElementById("planetVisual");
  if (data.img) {
    visual.style.background = "none";
    visual.innerHTML = `<img src="${data.img}"
      style="width:180px; height:180px; border-radius:50%; object-fit:cover;">`;
  } else {
    visual.innerHTML = "";
    visual.style.background = data.color;
  }

  const factsEl = document.getElementById("bodyFacts");
  factsEl.innerHTML = data.facts.map(f => `
    <div class="fact">
      <div class="fact-label">${f.label}</div>
      <div class="fact-value">${f.value}</div>
    </div>
  `).join("");

  document.getElementById("searchInput").value = data.name;
}

document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") search();
});
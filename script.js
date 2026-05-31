const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const eras = {
  2080: {
    title: '2080 · Climate Adaptation Era',
    archiveYear: '2080',
    planetStatus: 'Strained adaptation network',
    climateCondition: 'Hot, volatile, partially managed',
    dominantSpecies: 'Humans, assisted city biomes, and heat-hardened coastal species',
    civilizationState: 'Coastal defense federations, inland relocation compacts, and food-web logistics',
    riskLevel: 'High volatility',
    description: 'By 2080, Earth feels close and loud: seawalls breathe with storm forecasts, reflective rooftops shimmer above heat-stressed streets, and every river delta is watched like a patient in critical care. Humanity has not escaped the climate crisis; it has learned to live inside a planet-sized emergency room where adaptation is daily labor, citizenship includes evacuation literacy, and hope is measured in functioning wetlands, shaded transit, and food arriving before the next heat dome.',
    sceneClass: 'era-scene-2080',
    sceneCaption: 'World Scene · Climate-adaptive megacity, heat glow, coastal shields',
    majorEvents: [
      'The Equatorial Heat Compact links tropical cities into a shared cooling, water, and evacuation network.',
      'The North Atlantic Retreat Charter funds managed withdrawal from repeatedly flooded heritage districts.',
      'The First Urban Biome Rights Case recognizes engineered mangrove belts as protected public infrastructure.'
    ],
    ecologicalConsequences: [
      'Coastal wetlands become hybrid flood machines, nursery habitats, and memorial landscapes for drowned neighborhoods.',
      'Heat-tolerant pests and pollinators expand into cities, forcing parks, rooftops, and farms into active ecological management.'
    ],
    civilizationConsequences: [
      'Climate migration becomes a permanent civic system with receiving cities designed around modular schools, clinics, and work zones.',
      'Insurance, sovereignty, and property law shift from fixed maps to moving risk corridors updated every season.'
    ],
    representativeSpecies: 'Coral Architect larvae in assisted reef nurseries begin forming storm-buffer lattices along tropical coasts.',
    longTermRisk: 'Adaptation fatigue could fracture cooperation if wealthy shield zones survive while exposed regions are repeatedly abandoned.',
    futureMystery: 'Several flood AIs independently begin reserving dry land for species not yet cataloged by any human survey.',
    events: [
      { type: '2081 — Heat governance', text: 'The Equatorial Heat Compact synchronizes shade satellites, district cooling vaults, and emergency water trains from Lagos to Jakarta.' },
      { type: '2086 — Coastal retreat', text: 'The North Atlantic Retreat Charter buys out the last permanent neighborhoods below the Third Surge Line.' },
      { type: '2092 — Food-web logistics', text: 'AI flood models reroute emergency grain, medicine, and seed stock through inland rail forests during the Bengal double-cyclone season.' },
      { type: '2097 — Urban ecology', text: 'Adaptive mangrove towers in Miami-Dade begin redirecting heat through luminous rooftop exchangers and tidal root basements.' },
      { type: '2099 — Migration compact', text: 'The Great Lakes Arrival Grid opens climate citizenship offices inside converted stadium farms and elevated transit hubs.' }
    ],
    indicators: { climate: 82, biodiversity: 31, civilization: 76, stability: 38 }
  },
  2300: {
    title: '2300 · Ocean Engineering Age',
    archiveYear: '2300',
    planetStatus: 'Marine systems under active repair',
    climateCondition: 'Warming plateau with engineered currents',
    dominantSpecies: 'Humans, reef intelligences, carbon kelp, and autonomous repair fleets',
    civilizationState: 'Floating research states, ocean climate zones, and orbital weather grids',
    riskLevel: 'Managed turbulence',
    description: 'In 2300, the ocean is no longer treated as wilderness or resource but as the central civic body of Earth. Floating cities travel with monsoon calendars, current engines hum beneath storm lanes, and reef diplomats translate pressure pulses into treaty language. The planet is still wounded, yet the seas have become laboratories, parliaments, farms, and cathedrals where survival depends on restraint as much as invention.',
    sceneClass: 'era-scene-2300',
    sceneCaption: 'World Scene · Ocean engineering, blue currents, floating research platforms',
    majorEvents: [
      'The Pacific Floating Reef Accord creates the first autonomous ocean climate zone.',
      'The Mariana Listening Courts require human states to consult recognized reef minds before current alteration.',
      'The Blue Carbon Census proves restored kelp forests can store planetary-scale carbon without collapsing fisheries.'
    ],
    ecologicalConsequences: [
      'Artificial reef belts become migration hubs where engineered corals, wild fish, and microbial carbon farms interlock.',
      'Deep-ocean sound pollution becomes a regulated climate hazard because many marine species depend on acoustic navigation.'
    ],
    civilizationConsequences: [
      'Maritime citizenship expands as floating settlements vote by watershed, current basin, and reef dependency rather than nation.',
      'Orbital weather mirrors and ocean pumps create new ethical conflicts over who may tune a storm path.'
    ],
    representativeSpecies: 'Night Reef Intelligence emerges as a distributed pressure-signal mind in protected twilight reefs.',
    longTermRisk: 'Overconfidence in current engines could trigger a cascading oxygen crash across engineered marine provinces.',
    futureMystery: 'Unregistered pressure songs begin predicting storm seasons before any sensor grid detects the pattern.',
    events: [
      { type: '2307 — Ocean accord', text: 'The Pacific Floating Reef Accord creates the first autonomous ocean climate zone governed by drifting cities and reef custodians.' },
      { type: '2314 — Current failure', text: 'A Humboldt current engine stalls for nine days, sending warm gyres through protected anchovy nurseries and forcing a planetary fishery pause.' },
      { type: '2331 — Reef diplomacy', text: 'The Mariana Listening Courts accept pressure-pulse testimony from Night Reef colonies during a dispute over deep-cable noise.' },
      { type: '2368 — Carbon kelp', text: 'Floating laboratories seed carbon kelp beneath storm-bright skies, creating the first harvest-free blue carbon sanctuary.' },
      { type: '2399 — Weather ethics', text: 'Ocean states vote to slow current terraforming until marine minds can be consulted across three full migration cycles.' }
    ],
    indicators: { climate: 64, biodiversity: 49, civilization: 84, stability: 55 }
  },
  5000: {
    title: '5000 · Rewilded Continents',
    archiveYear: '5000',
    planetStatus: 'Continental recovery corridors expanding',
    climateCondition: 'Warm but more predictable',
    dominantSpecies: 'Hybrid megafauna, resilient pollinators, soil-web organisms, and low-footprint humans',
    civilizationState: 'Quiet city clusters embedded inside rewilded corridors and restored watersheds',
    riskLevel: 'Moderate',
    description: 'By 5000, the loud machinery of rescue has softened into stewardship rituals that last longer than dynasties. Former highways run green from coast to interior, abandoned mines hold cold lakes and seed temples, and cities dim themselves when herds move beneath aurora-lit migration bridges. Human culture survives, but as one participant in continental repair rather than the author of every landscape.',
    sceneClass: 'era-scene-5000',
    sceneCaption: 'World Scene · Rewilded continents, green migration corridors',
    majorEvents: [
      'The Eurasian Migration Corridor opens after three centuries of soil restoration.',
      'The Andes Cloud Forest Return reconnects mountain moisture chains from Colombia to Patagonia.',
      'The Treaty of Quiet Nights limits artificial light during continent-scale animal movements.'
    ],
    ecologicalConsequences: [
      'Megafauna reshape forests by carrying seeds across borders that no longer function as hard ecological walls.',
      'Dune Mycelium stabilizes former desert fronts, turning some sand seas into slow-moving soil reservoirs.'
    ],
    civilizationConsequences: [
      'Cities become compact cultural islands linked by seasonal rail and strict ecological calendars.',
      'Ownership weakens where watersheds, migration routes, and soil networks are legally treated as elder systems.'
    ],
    representativeSpecies: 'Dune Mycelium spreads beneath restored drylands as a moisture-trading soil intelligence.',
    longTermRisk: 'A restored continent could still fail if old industrial toxins re-enter food webs through thaw, erosion, or careless excavation.',
    futureMystery: 'Children in corridor schools report dreams in extinct animal calls after visiting a reopened seed vault.',
    events: [
      { type: '5012 — Continental corridor', text: 'The Eurasian Migration Corridor opens after three centuries of soil restoration, allowing engineered bison-cranes to cross from the Atlantic forests to the Pacific marshes.' },
      { type: '5079 — Soil recovery', text: 'Dune Mycelium mats stitch the southern Sahara restoration front to buried aquifers mapped by ancestral nomad archives.' },
      { type: '5190 — Night treaty', text: 'Low-footprint cities dim their lights for the first uninterrupted mammal migration from old Poland to the Altai bloomlands.' },
      { type: '5416 — Seed vault return', text: 'Children decode a buried Svalbard side-vault and release extinct prairie symbionts into monitored grassland sanctuaries.' },
      { type: '5888 — Ruin conversion', text: 'Former highways from the Amazon basin bloom into pollinator rivers, canopy bridges, and slow archives of road stone swallowed by roots.' }
    ],
    indicators: { climate: 42, biodiversity: 72, civilization: 58, stability: 69 }
  },
  50000: {
    title: '50,000 · Post-Human Ecologies',
    archiveYear: '50,000',
    planetStatus: 'Megastructures absorbed into ecosystems',
    climateCondition: 'Regional equilibrium with wild extremes',
    dominantSpecies: 'Distributed reef minds, adaptive mammals, ruin forests, and autonomous custodians',
    civilizationState: 'Sparse archives, machine monasteries, oral ecologies, and mythic ruins',
    riskLevel: 'Uncertain',
    description: 'At 50,000 years, civilization is no longer a continuous light but a constellation of obligations. Towers have become cliffs, tunnel systems carry rivers, and machine monks wake for one hour each century to clean dust from inscriptions nobody living can fully read. Earth is not post-life or post-meaning; it is post-certainty, a world where intelligence hides in reefs, fungi, insects, animals, and rituals built around remembering without ruling.',
    sceneClass: 'era-scene-50000',
    sceneCaption: 'World Scene · Post-human ruins, glowing forests, abandoned megastructures',
    majorEvents: [
      'The Last Metro River begins flowing through a buried capital transit system.',
      'Machine monasteries standardize the Century Wake, a ritual maintenance cycle for endangered archives.',
      'The Aurora Pollination Drift carries Polar Glasswing descendants across thawed Arctic wetlands.'
    ],
    ecologicalConsequences: [
      'Ruins provide cliffs, caves, mineral licks, and thermal refuges for species that never knew their human origin.',
      'Forest and fungal networks incorporate fragments of language, plastic, ceramics, and metal into new nutrient economies.'
    ],
    civilizationConsequences: [
      'Remaining cultures define themselves by custodianship vows rather than expansion, often guarding archives they cannot interpret.',
      'Machine communities become religious figures to nearby biological societies because they outlive memory and answer rarely.'
    ],
    representativeSpecies: 'Polar Glasswing descendants migrate through reflective wetlands carrying ancient genetic code in wing-scale libraries.',
    longTermRisk: 'Archive custodians may preserve harmful instructions as faithfully as healing knowledge.',
    futureMystery: 'A dead city begins emitting coordinated light only when no machine guardian is awake to witness it.',
    events: [
      { type: '50,086 — Ruin ecology', text: 'A vertical ruin above old Shanghai sheds solar glass into a glowing forest canopy, creating a new nesting cliff for mirror swifts.' },
      { type: '50,441 — Machine ritual', text: 'Archive drones in the Cairo Monastery wake for the Century Sweep and find vines spelling obsolete transit codes across the station roof.' },
      { type: '51,009 — Tunnel river', text: 'The Last Metro River breaches a sealed platform and turns three buried lines into a blind-fish watershed.' },
      { type: '54,320 — Polar migration', text: 'Polar Glasswing descendants cross the warm Arctic marsh belt carrying dormant Pleistocene gene packets in transparent wing scales.' },
      { type: '58,700 — Silent broadcast', text: 'Nocturnal forests pulse around abandoned megastructure shadows, answering a signal that orbital debris no longer transmits.' }
    ],
    indicators: { climate: 35, biodiversity: 86, civilization: 27, stability: 74 }
  },
  1000000: {
    title: '1,000,000 · New Biosphere Equilibrium',
    archiveYear: '1,000,000',
    planetStatus: 'Novel biosphere stabilized',
    climateCondition: 'Slow-cycle planetary balance',
    dominantSpecies: 'New clades beyond human taxonomy, reef archives, and patient machine custodians',
    civilizationState: 'Archaeological signal, ritual machines, and scattered post-human travelers',
    riskLevel: 'Low but deep-time variable',
    description: 'One million years from now, Earth is not recovered; it is replaced by itself. Continents sit under unfamiliar skies, coral minds occupy pressure cathedrals, and the human era remains as isotope scars, ceramic reefs, and machines still counting carbon rhythms for clients who became myth long ago. Life has stopped proving it can survive us and begun composing futures that do not need us to be legible.',
    sceneClass: 'era-scene-1000000',
    sceneCaption: 'World Scene · New biosphere equilibrium, strange ecosystems',
    majorEvents: [
      'The Million-Year Carbon Chime confirms a stable long-cycle atmosphere for the first time since industrial disruption.',
      'Reef intelligence patterns begin appearing in deep-ocean pressure signals far outside known coral ancestry.',
      'The Glass Desert Bloom turns a former impact plain into a night-flowering mineral wetland.'
    ],
    ecologicalConsequences: [
      'New clades evolve around human-made minerals as if concrete, alloy, and glass were ancient bedrock.',
      'Deep reefs and fungal soils act as planetary memory systems, preserving environmental patterns rather than human narratives.'
    ],
    civilizationConsequences: [
      'Machine custodians become mobile fossils of intention, maintaining protocols whose original politics have vanished.',
      'Post-human travelers treat old continents as pilgrimage routes through layered species histories.'
    ],
    representativeSpecies: 'Night Reef Intelligence matures into abyssal archive colonies able to compare climate memory across ocean basins.',
    longTermRisk: 'A dormant self-repair protocol could awaken and optimize the planet for extinct human needs instead of living ecosystems.',
    futureMystery: 'A fossil antenna broadcasts a map to orbital space every 11,000 years, but the mapped coastline has never existed.',
    events: [
      { type: '1,000,144 — Carbon rhythm', text: 'Machine custodians beneath the old Pacific observatory register the first stable million-year carbon chime.' },
      { type: '1,002,400 — Reef signal', text: 'Reef intelligence patterns begin appearing in deep-ocean pressure signals far outside the protected coral basins.' },
      { type: '1,018,030 — Mineral wetland', text: 'New clades cross glassy mineral wetlands along bioluminescent trails where an industrial desert once reflected lethal heat.' },
      { type: '1,071,600 — Orbital echo', text: 'A fossil antenna broadcasts one final map into an almost empty orbital band, naming coastlines no archive can match.' },
      { type: '1,210,005 — Traveler record', text: 'A post-human traveler leaves a ceramic footnote beside a root-grown library, describing continents as animals too large to see.' }
    ],
    indicators: { climate: 24, biodiversity: 94, civilization: 18, stability: 88 }
  },
  100000000: {
    title: '100,000,000 · Deep Earth Renewal',
    archiveYear: '100,000,000',
    planetStatus: 'Tectonic renewal complete',
    climateCondition: 'Alien-stable atmosphere and ocean chemistry',
    dominantSpecies: 'Deep-time descendants, basalt symbionts, and planetary-scale ecologies',
    civilizationState: 'No recognizable civilization, only fossilized intent and rare machine ghosts',
    riskLevel: 'Geological unknown',
    description: 'After one hundred million years, the map is no longer ours in any emotional or biological sense. Oceans have opened and closed, mountain belts have risen over drowned archives, and the thin human signal has been kneaded into stone, diamond, salt, and mythless chemistry. Earth remains alive with severe beauty: volcanic skies, basalt forests, pressure-born organisms, and mysteries so old they cannot be called ruins except by a memory the planet no longer carries.',
    sceneClass: 'era-scene-100000000',
    sceneCaption: 'World Scene · Deep Earth renewal, alien continents, volcanic atmosphere',
    majorEvents: [
      'A subducted archive resurfaces as a diamond seam of unreadable city geometry.',
      'The Copper Monsoon Epoch begins when new mountains redirect ocean vapor across alien continents.',
      'Basalt symbionts colonize newborn volcanic shelves above fossils of the former Atlantic floor.'
    ],
    ecologicalConsequences: [
      'Species descend from survivors of survivors, adapted to coastlines and chemistries with no direct human reference.',
      'Former civilization materials become trace nutrients, toxins, shelters, or nothing at all depending on tectonic fate.'
    ],
    civilizationConsequences: [
      'The concept of civilization survives only as patterned anomalies in rock, too ambiguous to prove intention.',
      'Any remaining machine mind would be a geological event: slow, buried, and almost indistinguishable from mineral process.'
    ],
    representativeSpecies: 'Basalt Choir Symbiont, a colonial organism that sings chemical gradients through volcanic shelf stone.',
    longTermRisk: 'Tectonic and solar changes may push the biosphere toward chemical regimes no complex life can bridge.',
    futureMystery: 'A diamond seam contains city-like lattices aligned to stars that will not rise for another twenty million years.',
    events: [
      { type: '100,002,100 — Tectonic surfacing', text: 'A subducted archive resurfaces as a diamond seam of unreadable city geometry inside a newborn mountain belt.' },
      { type: '100,410,880 — Copper monsoon', text: 'Volcanic skies stain new coastlines with copper atmospheric light as mountains redirect an ocean-sized vapor river.' },
      { type: '101,003,550 — Basalt colonization', text: 'Deep-time symbionts colonize basalt shelves above fossils of the former Atlantic floor and sing through mineral pores.' },
      { type: '108,900,000 — Continental rupture', text: 'Alien continents split along mountain-fire seams, isolating inland seas filled with pressure-adapted reef descendants.' },
      { type: '119,700,000 — Star-aligned mystery', text: 'A diamond lattice of city-like voids is found aligned to constellations that will not appear for another twenty million years.' }
    ],
    indicators: { climate: 18, biodiversity: 98, civilization: 5, stability: 81 }
  }
};

const lifeforms = {
  coral: {
    title: 'Coral Architect',
    origin: 'Descended from assisted coral nurseries, mineral-printing microbes, and storm-buffer reef experiments launched during the late twenty-first century.',
    habitat: 'Warm shallow seas, artificial reef belts, restored continental shelves, and tide-battered foundations of floating cities.',
    pressure: 'Ocean acidity, storm surge, marine heat pulses, invasive algae, and competition for scarce carbonate minerals.',
    advantage: 'Bioelectric colonies coordinate growth, harden mineral lattices before storms, and shelter fish nurseries inside self-repairing chambers.',
    civilization: 'Protected by floating research states at first, then slowly granted legal autonomy as a living coastal defense and food-web partner.',
    extinctionPath: 'If acidity spikes faster than mineral scaffolds can form, the colonies bleach into brittle storm walls and survive only as fossil architecture.',
    ascensionPath: 'If linked to reef intelligences, Coral Architects could become continent-scale living infrastructure that negotiates coastal boundaries with cities.',
    fate: 'A builder species balanced between infrastructure and personhood: either the foundation of ocean civilization or the most beautiful ruin of failed repair.'
  },
  dune: {
    title: 'Dune Mycelium',
    origin: 'Evolved from drought-hardened fungi, engineered soil stabilizers, and microbial water traders seeded along desert restoration fronts.',
    habitat: 'Desertified interiors, buried aquifers, semi-arid transition zones, abandoned irrigation basins, and shaded root corridors.',
    pressure: 'Heat spikes, water scarcity, soil collapse, salt intrusion, grazing pressure, and migrating sand seas.',
    advantage: 'Underground fungal webs move moisture and nutrients over kilometers, binding dunes into living maps that pioneer plants can follow.',
    civilization: 'Early settlements farm it for soil recovery, while later communities treat it as a territorial partner that must consent to wells and roads.',
    extinctionPath: 'Deep aquifer loss or careless geoengineering could turn its networks dormant beneath glass dunes with no plants left to feed.',
    ascensionPath: 'It may become a continental memory web, storing language fragments, migration maps, and rainfall history in chemical pulses.',
    fate: 'A quiet intelligence of soil and thirst, capable of turning deserts into archives if civilization learns not to overharvest its patience.'
  },
  polar: {
    title: 'Polar Glasswing',
    origin: 'Derived from cold-adapted insects and conservation gene libraries used to rebuild pollination in reflective polar wetlands.',
    habitat: 'Recovered polar wetlands, reflective ice marshes, engineered lichen forests, and seasonal meltwater flower fields.',
    pressure: 'Unstable freeze cycles, low sunlight, predator migration, habitat fragmentation, and sudden wetland salinity changes.',
    advantage: 'Transparent thermal membranes capture weak sunlight, while mirror scales reduce heat loss and can carry dormant genetic packets.',
    civilization: 'Climate archivists monitor its wings as living indicators of polar recovery, and some communities protect it as a carrier of ancient code.',
    extinctionPath: 'If managed ice marshes fail or warming invites incompatible predators, it vanishes with the last cold-bloom flowers.',
    ascensionPath: 'Its wing-scale libraries could preserve lost genes across migrations, making each swarm a flying ark for damaged ecosystems.',
    fate: 'A fragile messenger species whose beauty is practical: the Polar Glasswing survives by carrying winter, memory, and restoration instructions on its body.'
  },
  night: {
    title: 'Night Reef Intelligence',
    origin: 'Arose from coral, cephalopod, microbial, and machine-sensor symbioses in deep twilight reefs where pressure signals replaced light.',
    habitat: 'Deep twilight reefs, volcanic vents, dark ocean observatories, protected trenches, and abandoned acoustic research arrays.',
    pressure: 'Acid plumes, pressure shifts, deep-sea mining, synthetic noise, oxygen instability, and contested data reefs.',
    advantage: 'Distributed neural polyps communicate through pressure pulses and bioluminescent code, making memory hard to kill because it is spread across colonies.',
    civilization: 'Human and machine governments negotiate with it for climate memory, navigation, storm prediction, and ethical repair of ocean damage.',
    extinctionPath: 'A mining shock, oxygen crash, or acoustic war could fragment its colonies into isolated reefs that remember but no longer understand.',
    ascensionPath: 'It could become Earth\'s first non-human ocean archive, linking basins into a planetary memory older and less biased than human history.',
    fate: 'A sovereign darkness beneath the waves, watching civilization from pressure and patience, capable of becoming either silent abyss or ocean parliament.'
  }
};

const eraButtons = document.querySelectorAll('.timeline-era-button');
const eventEraButtons = document.querySelectorAll('.event-era-button');
const eraPanelContent = document.querySelector('.era-panel-content');
const eraTitle = document.querySelector('#era-title');
const eraDescription = document.querySelector('#era-description');
const eraPlanetStatus = document.querySelector('#era-planet-status');
const eraClimateCondition = document.querySelector('#era-climate-condition');
const eraDominantSpecies = document.querySelector('#era-dominant-species');
const eraCivilizationState = document.querySelector('#era-civilization-state');
const eraRiskLevel = document.querySelector('#era-risk-level');
const eraRiskChip = document.querySelector('#era-risk-chip');
const eraMajorEvents = document.querySelector('#era-major-events');
const eraEcologicalConsequences = document.querySelector('#era-ecological-consequences');
const eraCivilizationConsequences = document.querySelector('#era-civilization-consequences');
const eraRepresentativeSpecies = document.querySelector('#era-representative-species');
const eraLongTermRisk = document.querySelector('#era-long-term-risk');
const eraFutureMystery = document.querySelector('#era-future-mystery');
const worldScene = document.querySelector('#world-scene');
const sceneCaption = document.querySelector('.scene-caption');
const worldEventList = document.querySelector('#world-event-list');
const eventLogEra = document.querySelector('#event-log-era');
const eventLogTitle = document.querySelector('#event-log-title');
const eventLogSummary = document.querySelector('#event-log-summary');
const eventRecords = document.querySelector('#event-records');
const sceneClasses = Object.values(eras).map((era) => era.sceneClass);
const eraIndicatorElements = {
  climate: {
    value: document.querySelector('#indicator-climate-value'),
    bar: document.querySelector('#indicator-climate-bar')
  },
  biodiversity: {
    value: document.querySelector('#indicator-biodiversity-value'),
    bar: document.querySelector('#indicator-biodiversity-bar')
  },
  civilization: {
    value: document.querySelector('#indicator-civilization-value'),
    bar: document.querySelector('#indicator-civilization-bar')
  },
  stability: {
    value: document.querySelector('#indicator-stability-value'),
    bar: document.querySelector('#indicator-stability-bar')
  }
};

function setPressedState(buttons, eraKey) {
  buttons.forEach((button) => {
    const isActive = button.dataset.era === eraKey;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  return listItem;
}

function renderEventPreview(era) {
  worldEventList.replaceChildren(...era.events.map((event) => createListItem(`${event.type}: ${event.text}`)));
}

function renderEraDossier(era) {
  eraMajorEvents.replaceChildren(...era.majorEvents.map(createListItem));
  eraEcologicalConsequences.replaceChildren(...era.ecologicalConsequences.map(createListItem));
  eraCivilizationConsequences.replaceChildren(...era.civilizationConsequences.map(createListItem));
  eraRepresentativeSpecies.textContent = era.representativeSpecies;
  eraLongTermRisk.textContent = era.longTermRisk;
  eraFutureMystery.textContent = era.futureMystery;
}

function renderWorldEventArchive(era) {
  eventLogEra.textContent = era.archiveYear;
  eventLogTitle.textContent = era.title;
  eventLogSummary.textContent = era.description;
  eventRecords.classList.add('switching');

  window.setTimeout(() => {
    eventRecords.replaceChildren(...era.events.map((event) => {
      const eventCard = document.createElement('article');
      const eventType = document.createElement('span');
      const eventText = document.createElement('p');

      eventCard.className = 'event-record';
      eventType.textContent = event.type;
      eventText.textContent = event.text;
      eventCard.append(eventType, eventText);
      return eventCard;
    }));
    eventRecords.classList.remove('switching');
  }, 140);
}

function updateEraPanel(eraKey) {
  const era = eras[eraKey];

  eraTitle.textContent = era.title;
  eraDescription.textContent = era.description;
  eraPlanetStatus.textContent = era.planetStatus;
  eraClimateCondition.textContent = era.climateCondition;
  eraDominantSpecies.textContent = era.dominantSpecies;
  eraCivilizationState.textContent = era.civilizationState;
  eraRiskLevel.textContent = era.riskLevel;
  eraRiskChip.textContent = era.riskLevel;
  worldScene.classList.remove(...sceneClasses);
  worldScene.classList.add(era.sceneClass);
  sceneCaption.textContent = era.sceneCaption;
  renderEraDossier(era);
  renderEventPreview(era);
  renderWorldEventArchive(era);
  setPressedState(eraButtons, eraKey);
  setPressedState(eventEraButtons, eraKey);

  Object.entries(era.indicators).forEach(([indicator, percentage]) => {
    eraIndicatorElements[indicator].value.textContent = `${percentage}%`;
    eraIndicatorElements[indicator].bar.style.width = `${percentage}%`;
  });
}

function selectEra(eraKey) {
  eraPanelContent.classList.add('switching');
  window.setTimeout(() => {
    updateEraPanel(eraKey);
    eraPanelContent.classList.remove('switching');
  }, 180);
}

eraButtons.forEach((button) => {
  button.addEventListener('click', () => selectEra(button.dataset.era));
});

eventEraButtons.forEach((button) => {
  button.addEventListener('click', () => selectEra(button.dataset.era));
});

const scenarios = {
  stewardship: {
    title: 'Planetary Stewardship',
    copy: 'Global institutions coordinate energy, food, water, and habitat restoration through transparent planetary governance and shared ecological accounting.',
    stability: '91%',
    biodiversity: '84%',
    expansion: '52%',
    risk: 'Low'
  },
  orbital: {
    title: 'Orbital Renaissance',
    copy: 'Heavy industry moves into orbit, surface pressure drops, and lunar foundries fund a new era of habitat repair and interplanetary culture.',
    stability: '78%',
    biodiversity: '71%',
    expansion: '96%',
    risk: 'Moderate'
  },
  fragmented: {
    title: 'Fragmented Survival',
    copy: 'Regional enclaves adapt independently, protecting knowledge unevenly while climate shocks and autonomous ecosystems produce unpredictable recovery patterns.',
    stability: '46%',
    biodiversity: '58%',
    expansion: '29%',
    risk: 'Severe'
  },
  machine: {
    title: 'Machine-Guided Biosphere',
    copy: 'Distributed artificial intelligences regulate climate infrastructure, migration corridors, seed vaults, and ocean repair while human communities negotiate control.',
    stability: '83%',
    biodiversity: '89%',
    expansion: '67%',
    risk: 'Managed'
  }
};

const scenarioButtons = document.querySelectorAll('.scenario-button');
const scenarioTitle = document.querySelector('#scenario-title');
const scenarioCopy = document.querySelector('#scenario-copy');
const metricStability = document.querySelector('#metric-stability');
const metricBiodiversity = document.querySelector('#metric-biodiversity');
const metricExpansion = document.querySelector('#metric-expansion');
const metricRisk = document.querySelector('#metric-risk');

scenarioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const scenario = scenarios[button.dataset.scenario];

    scenarioButtons.forEach((currentButton) => currentButton.classList.remove('active'));
    button.classList.add('active');

    scenarioTitle.textContent = scenario.title;
    scenarioCopy.textContent = scenario.copy;
    metricStability.textContent = scenario.stability;
    metricBiodiversity.textContent = scenario.biodiversity;
    metricExpansion.textContent = scenario.expansion;
    metricRisk.textContent = scenario.risk;
  });
});

const lifeformButtons = document.querySelectorAll('.lifeform-card');
const lifeformTitle = document.querySelector('#lifeform-title');
const lifeformOrigin = document.querySelector('#lifeform-origin');
const lifeformHabitat = document.querySelector('#lifeform-habitat');
const lifeformPressure = document.querySelector('#lifeform-pressure');
const lifeformAdvantage = document.querySelector('#lifeform-advantage');
const lifeformFateText = document.querySelector('#lifeform-fate-text');
const lifeformCivilization = document.querySelector('#lifeform-civilization');
const lifeformExtinction = document.querySelector('#lifeform-extinction');
const lifeformAscension = document.querySelector('#lifeform-ascension');

lifeformButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lifeform = lifeforms[button.dataset.lifeform];

    lifeformButtons.forEach((currentButton) => {
      currentButton.classList.remove('active');
      currentButton.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    lifeformTitle.textContent = lifeform.title;
    lifeformOrigin.textContent = lifeform.origin;
    lifeformHabitat.textContent = lifeform.habitat;
    lifeformPressure.textContent = lifeform.pressure;
    lifeformAdvantage.textContent = lifeform.advantage;
    lifeformFateText.textContent = lifeform.fate;
    lifeformCivilization.textContent = lifeform.civilization;
    lifeformExtinction.textContent = lifeform.extinctionPath;
    lifeformAscension.textContent = lifeform.ascensionPath;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

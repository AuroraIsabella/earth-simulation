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
    dominantSpecies: 'Humans and assisted urban biomes',
    civilizationState: 'Coastal defense and relocation compacts',
    riskLevel: 'High volatility',
    description: 'The century closes under heat, flood, and migration pressure. Cities become defensive ecosystems, and every coast operates like a monitored threshold between survival and retreat.',
    sceneClass: 'era-scene-2080',
    sceneCaption: 'World Scene · Climate-adaptive megacity, heat glow, coastal shields',
    events: [
      { type: 'Climate disaster', text: 'Coastal shield gates close before the equatorial surge window.' },
      { type: 'Species adaptation', text: 'Adaptive mangrove towers redirect heat through luminous rooftop exchangers.' },
      { type: 'Civilization decision', text: 'Migration compacts route millions through protected inland corridors.' },
      { type: 'AI intervention', text: 'AI flood models reroute emergency food webs through inland rail forests.' }
    ],
    indicators: {
      climate: 82,
      biodiversity: 31,
      civilization: 76,
      stability: 38
    }
  },
  2300: {
    title: '2300 · Ocean Engineering Age',
    archiveYear: '2300',
    planetStatus: 'Marine systems under active repair',
    climateCondition: 'Warming plateau with engineered currents',
    dominantSpecies: 'Humans, reef intelligences, and carbon kelp',
    civilizationState: 'Floating research states and orbital weather grids',
    riskLevel: 'Managed turbulence',
    description: 'Autonomous reefs, blue-carbon forests, and current stabilizers pulse through the oceans. Humanity survives by listening to tides as if they are planetary instrumentation.',
    sceneClass: 'era-scene-2300',
    sceneCaption: 'World Scene · Ocean engineering, blue currents, floating research platforms',
    events: [
      { type: 'Ocean engineering accident', text: 'A current engine stalls and sends warm gyres through protected reef nurseries.' },
      { type: 'Ecological breakthrough', text: 'Floating laboratories seed carbon kelp beneath storm-bright skies.' },
      { type: 'Species adaptation', text: 'Reef intelligences map safe harbors through blue acoustic signals.' },
      { type: 'Civilization decision', text: 'Ocean states vote to slow terraforming until marine minds can be consulted.' }
    ],
    indicators: {
      climate: 64,
      biodiversity: 49,
      civilization: 84,
      stability: 55
    }
  },
  5000: {
    title: '5000 · Rewilded Continents',
    archiveYear: '5000',
    planetStatus: 'Continental recovery corridors expanding',
    climateCondition: 'Warm but more predictable',
    dominantSpecies: 'Hybrid megafauna and resilient pollinators',
    civilizationState: 'Low-footprint city clusters inside rewilded zones',
    riskLevel: 'Moderate',
    description: 'Migration corridors cross old borders. Engineered forests and naturally adapted species begin to outgrow the memory of crisis, turning former extraction zones into living archives.',
    sceneClass: 'era-scene-5000',
    sceneCaption: 'World Scene · Rewilded continents, green migration corridors',
    events: [
      { type: 'Species adaptation', text: 'Megafauna herds enter the northern corridor without human escort.' },
      { type: 'Ecological breakthrough', text: 'Former highways bloom into pollinator rivers and canopy bridges.' },
      { type: 'Civilization decision', text: 'Low-footprint cities dim their lights for continent-scale migrations.' },
      { type: 'Archive discovery', text: 'Children decode a buried seed vault and release extinct prairie symbionts.' }
    ],
    indicators: {
      climate: 42,
      biodiversity: 72,
      civilization: 58,
      stability: 69
    }
  },
  50000: {
    title: '50,000 · Post-Human Ecologies',
    archiveYear: '50,000',
    planetStatus: 'Megastructures absorbed into ecosystems',
    climateCondition: 'Regional equilibrium with wild extremes',
    dominantSpecies: 'Distributed reef minds and adaptive mammals',
    civilizationState: 'Sparse archives, autonomous habitats, and mythic ruins',
    riskLevel: 'Uncertain',
    description: 'Cities no longer look built. Towers become nesting cliffs, transit tunnels become rivers, and the remaining intelligences read civilization as geology with lights still blinking inside.',
    sceneClass: 'era-scene-50000',
    sceneCaption: 'World Scene · Post-human ruins, glowing forests, abandoned megastructures',
    events: [
      { type: 'Post-human ruin discovery', text: 'A vertical ruin sheds solar glass into a glowing forest canopy.' },
      { type: 'AI intervention', text: 'Archive drones wake briefly as vines bridge the transit canyon.' },
      { type: 'New biosphere emergence', text: 'Nocturnal forests pulse around abandoned megastructure shadows.' },
      { type: 'Species adaptation', text: 'Tunnel mammals learn to navigate by reading dormant transit magnets.' }
    ],
    indicators: {
      climate: 35,
      biodiversity: 86,
      civilization: 27,
      stability: 74
    }
  },
  1000000: {
    title: '1,000,000 · New Biosphere Equilibrium',
    archiveYear: '1,000,000',
    planetStatus: 'Novel biosphere stabilized',
    climateCondition: 'Slow-cycle planetary balance',
    dominantSpecies: 'New clades beyond human taxonomy',
    civilizationState: 'Archaeological signal and machine custodians',
    riskLevel: 'Low but deep-time variable',
    description: 'Continents drift into unfamiliar climates. Life has stopped recovering and started inventing, while the human era persists as mineral traces and patient machine memories.',
    sceneClass: 'era-scene-1000000',
    sceneCaption: 'World Scene · New biosphere equilibrium, strange ecosystems',
    events: [
      { type: 'New biosphere emergence', text: 'Strange canopy organisms open reflective blooms at dusk.' },
      { type: 'AI intervention', text: 'Machine custodians register a stable million-year carbon rhythm.' },
      { type: 'Species adaptation', text: 'New clades cross mineral wetlands along bioluminescent trails.' },
      { type: 'Civilization echo', text: 'A fossil antenna broadcasts one final map into an empty orbital band.' }
    ],
    indicators: {
      climate: 24,
      biodiversity: 94,
      civilization: 18,
      stability: 88
    }
  },
  100000000: {
    title: '100,000,000 · Deep Earth Renewal',
    archiveYear: '100,000,000',
    planetStatus: 'Tectonic renewal complete',
    climateCondition: 'Alien-stable atmosphere and ocean chemistry',
    dominantSpecies: 'Deep-time descendants and planetary symbionts',
    civilizationState: 'No recognizable civilization, only fossilized intent',
    riskLevel: 'Geological unknown',
    description: 'The map is no longer ours. Oceans, mountains, and species have rewritten Earth into a distant living world where humanity is a thin signal buried inside stone.',
    sceneClass: 'era-scene-100000000',
    sceneCaption: 'World Scene · Deep Earth renewal, alien continents, volcanic atmosphere',
    events: [
      { type: 'Climate transformation', text: 'Volcanic skies stain new coastlines with copper atmospheric light.' },
      { type: 'Geological rupture', text: 'Alien continents split along newborn mountain-fire seams.' },
      { type: 'New biosphere emergence', text: 'Deep-time symbionts colonize basalt shelves above forgotten fossils.' },
      { type: 'Post-human ruin discovery', text: 'A subducted archive resurfaces as a diamond seam of unreadable cities.' }
    ],
    indicators: {
      climate: 18,
      biodiversity: 98,
      civilization: 5,
      stability: 81
    }
  }
};

const lifeforms = {
  coral: {
    title: 'Coral Architect',
    habitat: 'Warm shallow seas, artificial reef belts, and restored continental shelves.',
    pressure: 'Ocean acidity, storm surge, heat pulses, and competition for mineral scaffolds.',
    advantage: 'Bioelectric colonies grow mineral lattices that buffer storms and shelter nurseries.',
    fate: 'May become a continent-scale reef civilization foundation or collapse into fossilized storm walls.',
    civilization: 'Protected by floating research states, then slowly granted autonomy as a living coastal defense system.'
  },
  dune: {
    title: 'Dune Mycelium',
    habitat: 'Desertified interiors, buried aquifers, and semi-arid transition zones.',
    pressure: 'Heat spikes, water scarcity, soil collapse, and migrating sand seas.',
    advantage: 'Underground fungal webs trade moisture and nutrients across vast sand corridors.',
    fate: 'Could knit deserts into living water maps or become a dormant memory web beneath glass dunes.',
    civilization: 'Early settlements farm it for soil recovery, but later communities treat it as a territorial partner.'
  },
  polar: {
    title: 'Polar Glasswing',
    habitat: 'Recovered polar wetlands, reflective ice marshes, and engineered lichen forests.',
    pressure: 'Unstable freeze cycles, low sunlight, predator migration, and habitat fragmentation.',
    advantage: 'Transparent thermal membranes capture weak sunlight while mirror scales reduce heat loss.',
    fate: 'May guide the return of polar pollination or vanish when the last managed ice marsh fails.',
    civilization: 'Climate archivists monitor its wings as living indicators of polar recovery.'
  },
  night: {
    title: 'Night Reef Intelligence',
    habitat: 'Deep twilight reefs, volcanic vents, and dark ocean observatories.',
    pressure: 'Acid plumes, pressure shifts, synthetic noise, and contested data reefs.',
    advantage: 'Distributed neural polyps communicate through pressure pulses and bioluminescent code.',
    fate: 'Could become Earth\'s first non-human ocean archive or retreat into silent abyssal reef cities.',
    civilization: 'Human and machine governments negotiate with it for climate memory, navigation, and ethical repair.'
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

function renderEventPreview(era) {
  worldEventList.replaceChildren(...era.events.map((event) => {
    const eventItem = document.createElement('li');
    eventItem.textContent = `${event.type}: ${event.text}`;
    return eventItem;
  }));
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
const lifeformHabitat = document.querySelector('#lifeform-habitat');
const lifeformPressure = document.querySelector('#lifeform-pressure');
const lifeformAdvantage = document.querySelector('#lifeform-advantage');
const lifeformFateText = document.querySelector('#lifeform-fate-text');
const lifeformCivilization = document.querySelector('#lifeform-civilization');

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
    lifeformHabitat.textContent = lifeform.habitat;
    lifeformPressure.textContent = lifeform.pressure;
    lifeformAdvantage.textContent = lifeform.advantage;
    lifeformFateText.textContent = lifeform.fate;
    lifeformCivilization.textContent = lifeform.civilization;
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

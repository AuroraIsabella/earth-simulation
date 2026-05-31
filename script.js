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
    planetStatus: 'Strained adaptation network',
    climateCondition: 'Hot, volatile, partially managed',
    dominantSpecies: 'Humans and assisted urban biomes',
    civilizationState: 'Coastal defense and relocation compacts',
    riskLevel: 'High volatility',
    description: 'The century closes under heat, flood, and migration pressure. Cities become defensive ecosystems, and every coast operates like a monitored threshold between survival and retreat.',
    indicators: {
      climate: 82,
      biodiversity: 31,
      civilization: 76,
      stability: 38
    }
  },
  2300: {
    title: '2300 · Ocean Engineering Age',
    planetStatus: 'Marine systems under active repair',
    climateCondition: 'Warming plateau with engineered currents',
    dominantSpecies: 'Humans, reef intelligences, and carbon kelp',
    civilizationState: 'Floating research states and orbital weather grids',
    riskLevel: 'Managed turbulence',
    description: 'Autonomous reefs, blue-carbon forests, and current stabilizers pulse through the oceans. Humanity survives by listening to tides as if they are planetary instrumentation.',
    indicators: {
      climate: 64,
      biodiversity: 49,
      civilization: 84,
      stability: 55
    }
  },
  5000: {
    title: '5000 · Rewilded Continents',
    planetStatus: 'Continental recovery corridors expanding',
    climateCondition: 'Warm but more predictable',
    dominantSpecies: 'Hybrid megafauna and resilient pollinators',
    civilizationState: 'Low-footprint city clusters inside rewilded zones',
    riskLevel: 'Moderate',
    description: 'Migration corridors cross old borders. Engineered forests and naturally adapted species begin to outgrow the memory of crisis, turning former extraction zones into living archives.',
    indicators: {
      climate: 42,
      biodiversity: 72,
      civilization: 58,
      stability: 69
    }
  },
  50000: {
    title: '50,000 · Post-Human Ecologies',
    planetStatus: 'Megastructures absorbed into ecosystems',
    climateCondition: 'Regional equilibrium with wild extremes',
    dominantSpecies: 'Distributed reef minds and adaptive mammals',
    civilizationState: 'Sparse archives, autonomous habitats, and mythic ruins',
    riskLevel: 'Uncertain',
    description: 'Cities no longer look built. Towers become nesting cliffs, transit tunnels become rivers, and the remaining intelligences read civilization as geology with lights still blinking inside.',
    indicators: {
      climate: 35,
      biodiversity: 86,
      civilization: 27,
      stability: 74
    }
  },
  1000000: {
    title: '1,000,000 · New Biosphere Equilibrium',
    planetStatus: 'Novel biosphere stabilized',
    climateCondition: 'Slow-cycle planetary balance',
    dominantSpecies: 'New clades beyond human taxonomy',
    civilizationState: 'Archaeological signal and machine custodians',
    riskLevel: 'Low but deep-time variable',
    description: 'Continents drift into unfamiliar climates. Life has stopped recovering and started inventing, while the human era persists as mineral traces and patient machine memories.',
    indicators: {
      climate: 24,
      biodiversity: 94,
      civilization: 18,
      stability: 88
    }
  },
  100000000: {
    title: '100,000,000 · Deep Earth Renewal',
    planetStatus: 'Tectonic renewal complete',
    climateCondition: 'Alien-stable atmosphere and ocean chemistry',
    dominantSpecies: 'Deep-time descendants and planetary symbionts',
    civilizationState: 'No recognizable civilization, only fossilized intent',
    riskLevel: 'Geological unknown',
    description: 'The map is no longer ours. Oceans, mountains, and species have rewritten Earth into a distant living world where humanity is a thin signal buried inside stone.',
    indicators: {
      climate: 18,
      biodiversity: 98,
      civilization: 5,
      stability: 81
    }
  }
};

const eraButtons = document.querySelectorAll('.timeline-era-button');
const eraPanelContent = document.querySelector('.era-panel-content');
const eraTitle = document.querySelector('#era-title');
const eraDescription = document.querySelector('#era-description');
const eraPlanetStatus = document.querySelector('#era-planet-status');
const eraClimateCondition = document.querySelector('#era-climate-condition');
const eraDominantSpecies = document.querySelector('#era-dominant-species');
const eraCivilizationState = document.querySelector('#era-civilization-state');
const eraRiskLevel = document.querySelector('#era-risk-level');
const eraRiskChip = document.querySelector('#era-risk-chip');
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

  Object.entries(era.indicators).forEach(([indicator, percentage]) => {
    eraIndicatorElements[indicator].value.textContent = `${percentage}%`;
    eraIndicatorElements[indicator].bar.style.width = `${percentage}%`;
  });
}

eraButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const eraKey = button.dataset.era;

    eraButtons.forEach((currentButton) => {
      currentButton.classList.remove('active');
      currentButton.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    eraPanelContent.classList.add('switching');
    window.setTimeout(() => {
      updateEraPanel(eraKey);
      eraPanelContent.classList.remove('switching');
    }, 180);
  });
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

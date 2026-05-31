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

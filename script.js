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
    copy: 'Civilizations coordinate energy, food, water, and habitat restoration through transparent planetary governance.',
    stability: '91%',
    biodiversity: '84%',
    expansion: '52%'
  },
  orbital: {
    title: 'Orbital Renaissance',
    copy: 'Industry migrates into orbit, lowering surface pressure while lunar foundries and habitats expand human possibility.',
    stability: '76%',
    biodiversity: '68%',
    expansion: '94%'
  },
  fragmented: {
    title: 'Fragmented Survival',
    copy: 'Regional enclaves adapt independently, preserving knowledge unevenly while ecosystems recover in unpredictable patterns.',
    stability: '48%',
    biodiversity: '57%',
    expansion: '31%'
  }
};

const scenarioButtons = document.querySelectorAll('.scenario-button');
const scenarioTitle = document.querySelector('#scenario-title');
const scenarioCopy = document.querySelector('#scenario-copy');
const metricStability = document.querySelector('#metric-stability');
const metricBiodiversity = document.querySelector('#metric-biodiversity');
const metricExpansion = document.querySelector('#metric-expansion');

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

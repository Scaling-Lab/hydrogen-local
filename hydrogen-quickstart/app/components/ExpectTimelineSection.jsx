const timelinePhases = [
  {
    period: 'Week 1-2',
    title: 'The First Signals',
    align: 'right',
    theme: 'sunrise',
    icon: 'zap',
    bullets: [
      'Increased morning energy',
      'Sharper mental clarity',
      'Improved mood',
    ],
    subtext: 'Cellular function begins to improve.',
    highlight: 'You wake up feeling more like yourself.',
  },
  {
    period: 'Week 3-4',
    title: 'Energy Stabilizes',
    align: 'left',
    theme: 'neutral',
    icon: 'battery',
    bullets: [
      'No more 3 PM crashes',
      'Workouts feel stronger',
      'Less irritable with family',
    ],
    highlight: 'Brain fog lifts.',
  },
  {
    period: 'Week 4-8',
    title: 'Measurable Changes',
    align: 'right',
    theme: 'neutral',
    icon: 'target',
    bullets: [
      'Bloodwork shows changes in free and total testosterone',
      'Libido improvements become noticeable',
    ],
    highlight: "Your wife notices before you tell her you're trying something new.",
  },
  {
    period: 'Week 8-12',
    title: 'Optimal Results',
    align: 'left',
    theme: 'mint',
    icon: 'target',
    labelTone: 'dark',
    bullets: [
      'Body composition changes',
      'Consistent morning erections return',
      'Stubborn belly fat starts burning off',
      'Muscle builds easier',
    ],
    highlight: 'You feel like the man you know you are inside.',
  },
];

export function ExpectTimelineSection() {
  return (
    <section className="expect-timeline">
      <div className="expect-timeline__inner">
        <div className="expect-timeline__header">
          <h2>
            What You Can <span>Realistically Expect</span>
          </h2>
          <p>Your transformation journey with Testolite PRO</p>
        </div>

        <div className="expect-timeline__timeline">
          <div className="expect-timeline__line" aria-hidden="true" />
          {timelinePhases.map((phase) => (
            <div
              className={`expect-timeline__row expect-timeline__row--${phase.align}`}
              key={phase.period}
            >
              <span className="expect-timeline__marker" aria-hidden="true">
                <span />
              </span>

              <div className="expect-timeline__label">
                <span
                  className={
                    phase.labelTone ? `expect-timeline__label--${phase.labelTone}` : ''
                  }
                >
                  {phase.period}
                </span>
              </div>

              <article
                className={`expect-timeline__card expect-timeline__card--${phase.theme}`}
              >
                <div className="expect-timeline__card-head">
                  <span className="expect-timeline__icon">
                    {renderIcon(phase.icon)}
                  </span>
                  <div>
                    <h3>{phase.title}</h3>
                  </div>
                </div>

                {phase.bullets?.length ? (
                  <ul className="expect-timeline__list">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {phase.subtext ? (
                  <p className="expect-timeline__subtext">{phase.subtext}</p>
                ) : null}

                <p className="expect-timeline__highlight">
                  ✨ {phase.highlight}
                </p>
              </article>
            </div>
          ))}
        </div>

        <div className="expect-timeline__disclaimer">
          <p>
            ℹ️ Individual results vary based on starting testosterone levels, age,
            and lifestyle factors.
          </p>
        </div>
      </div>
    </section>
  );
}

function renderIcon(type) {
  switch (type) {
    case 'battery':
      return (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11 7-3 5h4l-3 5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" x2="22" y1="11" y2="13" strokeWidth="2" />
        </svg>
      );
    case 'target':
      return (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      );
    case 'zap':
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

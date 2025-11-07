const BADGES = [
  {
    id: 'guarantee',
    type: 'metric',
    metric: '60',
    metricLabel: 'Days',
    title: 'RESULTS OR\nMONEY BACK\nGUARANTEE',
  },
  {
    id: 'shipping',
    title: 'FREE\nSHIPPING',
    subtitle: 'No Hidden Fees',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
  {
    id: 'safe',
    title: '100%\nSAFE',
    subtitle: 'FDA Compliant Wavelengths and Power Density',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 'medical',
    title: 'MEDICAL-GRADE\nQUALITY',
    subtitle: 'Professional Standard',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export function BadgesSection() {
  const marqueeBadges = [...BADGES, ...BADGES];

  return (
    <section className="badges">
      <div className="badges__glow badges__glow--top" aria-hidden="true" />
      <div className="badges__glow badges__glow--bottom" aria-hidden="true" />
      <div className="badges__inner">
        <div className="badges__mobile">
          <div className="badges__viewport">
            <div className="badges__track">
              {marqueeBadges.map((badge, index) => (
                <BadgeCard badge={badge} key={`${badge.id}-${index}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="badges__desktop">
          <div className="badges__grid">
            {BADGES.map((badge) => (
              <BadgeCard badge={badge} key={badge.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeCard({badge}) {
  const lines = badge.title.split('\n');

  return (
    <div className="badge-card">
      <div className="badge-card__media">
        {badge.type === 'metric' ? (
          <>
            <span className="badge-card__metric">{badge.metric}</span>
            <span className="badge-card__metric-label">{badge.metricLabel}</span>
          </>
        ) : (
          badge.icon && badge.icon({className: 'badge-card__icon'})
        )}
      </div>
      <h3 className="badge-card__title">
        {lines.map((line, index) => (
          <span key={`${badge.id}-line-${index}`}>
            {line}
            {index !== lines.length - 1 && <br />}
          </span>
        ))}
      </h3>
      {badge.subtitle && (
        <p className="badge-card__subtitle">{badge.subtitle}</p>
      )}
    </div>
  );
}

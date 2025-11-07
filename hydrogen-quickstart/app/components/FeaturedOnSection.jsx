const outlets = [
  {label: 'CNBC', className: 'featured-on__logo-text'},
  {label: "Men's Fitness", className: 'featured-on__logo-text featured-on__logo-text--red'},
  {label: 'Fox News', className: 'featured-on__logo-text featured-on__logo-text--blue'},
  {label: 'Huberman Lab', className: 'featured-on__logo-tag'},
];

export function FeaturedOnSection() {
  return (
    <section className="featured-on">
      <div className="featured-on__inner">
        <p className="featured-on__eyebrow">Red Light Therapy Has Been Featured On:</p>
        <div className="featured-on__logos">
          <span className="featured-on__peacock" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          {outlets.map((outlet) => (
            <span key={outlet.label} className={outlet.className}>
              {outlet.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

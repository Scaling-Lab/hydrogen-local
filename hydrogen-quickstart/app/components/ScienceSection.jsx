import studyImage from '~/assets/study.webp';

const DEFAULT_TITLE = (
  <>
    A study showed a <span className="science__highlight">71% increase</span> in
    testosterone in just <span className="science__highlight">2 weeks</span> with
    light therapy*
  </>
);

const DEFAULT_COPY = [
  'Light therapy? Sounds weird right? But the science does make sense.',
  <>
    <strong>Here&apos;s why:</strong> Your ancestors spent hours outdoors every day.
    Their skin received therapeutic wavelengths that supported cellular function
    throughout their bodies, including areas rarely exposed to sun nowadays.
  </>,
  <>
    <strong>In contrast, we spend 90% of our time indoors.</strong> Modern life
    pollutes our environment with xenoestrogens and stress while keeping us under
    artificial light that provides none of these benefits.
  </>,
  "It&apos;s also deprived you of the natural light frequencies that kept your testosterone-producing cells energized for millennia. Your body is literally starved of the light energy it needs to function optimally.",
];

const DEFAULT_CTA =
  'TestoLite PRO delivers the specific 670nm wavelength your testosterone-producing cells need.';

export function ScienceSection({
  eyebrow = 'Did You Know?',
  title = DEFAULT_TITLE,
  copy = DEFAULT_COPY,
  cta = DEFAULT_CTA,
  image = studyImage,
  imageAlt = 'Science Daily article snippet',
  reverse = false,
}) {
  const innerClassName = `science__inner${reverse ? ' science__inner--reverse' : ''}`;

  return (
    <section className="science">
      <div className={innerClassName}>
        <div className="science__content">
          <p className="science__eyebrow">{eyebrow}</p>
          <h2 className="science__title">{title}</h2>

          <div className="science__copy">
            {copy.map((paragraph, index) => (
              <p key={`science-copy-${index}`}>{paragraph}</p>
            ))}
            {cta && <p className="science__cta">{cta}</p>}
          </div>
        </div>

        <div className="science__media">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

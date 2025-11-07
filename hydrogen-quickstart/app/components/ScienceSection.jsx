import studyImage from '~/assets/study.webp';

export function ScienceSection() {
  return (
    <section className="science">
      <div className="science__inner">
        <div className="science__content">
          <p className="science__eyebrow">Did You Know?</p>
          <h2 className="science__title">
            A study showed a{' '}
            <span className="science__highlight">71% increase</span> in
            testosterone in just <span className="science__highlight">2 weeks</span>{' '}
            with light therapy*
          </h2>

          <div className="science__copy">
            <p>Light therapy? Sounds weird right? But the science does make sense.</p>
            <p>
              <strong>Here&apos;s why:</strong> Your ancestors spent hours outdoors
              every day. Their skin received therapeutic wavelengths that supported
              cellular function throughout their bodies, including areas rarely exposed
              to sun nowadays.
            </p>
            <p>
              <strong>In contrast, we spend 90% of our time indoors.</strong> Modern
              life pollutes our environment with xenoestrogens and stress while keeping
              us under artificial light that provides none of these benefits.
            </p>
            <p>
              It&apos;s also deprived you of the natural light frequencies that kept
              your testosterone-producing cells energized for millennia. Your body is
              literally starved of the light energy it needs to function optimally.
            </p>
            <p className="science__cta">
              TestoLite PRO delivers the specific 670nm wavelength your
              testosterone-producing cells need.
            </p>
          </div>
        </div>

        <div className="science__media">
          <img src={studyImage} alt="Science Daily article snippet" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

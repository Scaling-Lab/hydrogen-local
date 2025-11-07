import howItWorksVideo from '~/assets/Testoite Technology Sales Page.mp4';

const topRow = [
  {number: 1, title: 'Emits 670nm red light', variant: 'solid'},
  {number: 2, title: 'Safely penetrates testicular tissue', variant: 'outline'},
  {number: 3, title: 'Absorbed by mitochondria', variant: 'outline'},
];

const bottomRow = [
  {number: 6, title: 'Natural testosterone production increases', variant: 'solid'},
  {number: 5, title: 'Your Leydig cells get the energy they need', variant: 'outline'},
  {number: 4, title: '40% increase in ATP production', variant: 'solid'},
];

export function HowItWorksSection() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__inner">
        <div className="how-it-works__head">
          <p className="how-it-works__eyebrow">Restore it.</p>
          <h2>How Does Testolite PRO Work?</h2>
        </div>

        <div className="how-it-works__body">
          <div className="how-it-works__content">
            <div className="how-it-works__copy">
              <p>
                Red light therapy works differently than other solutions. It restores
                your body&apos;s testosterone-producing engine. Not fuel it. Not replace
                it.
              </p>
              <p>
                You&apos;re not masking the problem or creating dependency—you&apos;re
                restoring your cells&apos; natural testosterone-producing capacity so
                your body can do what it&apos;s supposed to do.
              </p>
              <p className="how-it-works__subhead">Here&apos;s how it works:</p>
            </div>

            <div className="how-it-works__flow">
              <div className="how-it-works__row">
                {topRow.map((step, index) => (
                  <div className="how-it-works__flow-item" key={step.number}>
                    <StepCard step={step} />
                    {index < topRow.length - 1 && (
                      <span className="how-it-works__arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="how-it-works__down-arrow">
                <span className="how-it-works__arrow how-it-works__arrow--down" aria-hidden="true">
                  ↓
                </span>
              </div>

              <div className="how-it-works__row">
                {bottomRow.map((step, index) => (
                  <div className="how-it-works__flow-item" key={step.number}>
                    <StepCard step={step} />
                    {index < bottomRow.length - 1 && (
                      <span className="how-it-works__arrow" aria-hidden="true">
                        ←
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="how-it-works__note">
              Like nature intended. Safe, targeted 670nm light fuels your cells so they
              can perform at their peak.
            </div>
          </div>

          <div className="how-it-works__media">
            <video
              src={howItWorksVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({step}) {
  return (
    <div className={`how-it-works__step how-it-works__step--${step.variant}`}>
      <span className="how-it-works__step-number">{step.number}</span>
      <p>{step.title}</p>
    </div>
  );
}

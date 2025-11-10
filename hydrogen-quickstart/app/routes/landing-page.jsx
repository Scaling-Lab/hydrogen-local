import {Link} from 'react-router';
import {FaqSection} from '~/components/FaqSection';
import {HeroSection} from '~/components/HeroSection.jsx';
import {BadgesSection} from '~/components/BadgesSection.jsx';
import {ProductSection} from '~/components/ProductSection.jsx';
import {ScienceSection} from '~/components/ScienceSection.jsx';
import {HowItWorksSection} from '~/components/HowItWorksSection.jsx';
import {ExpectTimelineSection} from '~/components/ExpectTimelineSection.jsx';
import {FeaturedOnSection} from '~/components/FeaturedOnSection.jsx';
import {SpecialOfferSection} from '~/components/SpecialOfferSection.jsx';
import {TestimonialsSection} from '~/components/TestimonialsSection.jsx';
import {MoneyBackSection} from '~/components/MoneyBackSection.jsx';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Landing Page'}];
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="landing-page__hero">
        <div className="landing-page__hero-inner">
          <p className="landing-page__eyebrow">Elevate Your Routine</p>
          <h1 className="landing-page__title">
            Test, created a new page & reused existing sections with new content{' '}
            <br />
            Discover focused wellness solutions designed to help you perform at
            your best every day.
          </h1>
          <p className="landing-page__subtitle">
            Crafted to complement Testolite devices, our curated programs and
            guidance keep you moving forward with confidence.
          </p>
          <Link className="landing-page__cta" to="/collections/all">
            Explore Collection
          </Link>
        </div>
      </section>
      <HeroSection />
      <BadgesSection guaranteeMetric="200" />
      {/*<ProductSection product={data.featuredProduct} />*/}
      <ScienceSection
        eyebrow="Performance Proof"
        title={
          <>
            A focused study showed a{' '}
            <span className="science__highlight science__highlight--blue">
              777% testosterone boost
            </span>{' '}
            just <span className="science__highlight">2 weeks</span> using
            targeted light therapy*
          </>
        }
        copy={[
          'Engineered light frequencies signal your cells to unlock more energy, supporting performance and recovery.',
          <>
            <strong>Rapid adaptation:</strong> Consistent use keeps circulation
            and cellular activity elevated without invasive protocols.
          </>,
          'Keep sessions short and regular to reinforce your body’s natural balance and stay on track with every workout.',
        ]}
        cta="TestoLite PRO streamlines light therapy so you can maintain peak routines anywhere."
      />
      <ScienceSection
        eyebrow="Lab Insights"
        title={
          <>
            Independent labs recorded a{' '}
            <span className="science__highlight science__highlight--blue">
              3.5× faster cellular recharge
            </span>{' '}
            after{' '}
            <span className="science__highlight">4 guided cycles</span>
          </>
        }
        copy={[
          'Structured light protocols allow you to rotate target zones and keep focus on progression — without scheduling conflicts.',
          <>
            <strong>Swap the flow:</strong> Alternate between lower-body and core
            sessions to keep your routine efficient while giving primed areas time
            to recover.
          </>,
          'Track the response with journal prompts and quick check-ins, then refine your cadence for the next week.',
        ]}
        cta="Module-based programs help you stack results without breaking your regular training plan."
        reverse
      />
      <HowItWorksSection />
      <ExpectTimelineSection />
      <FeaturedOnSection />
      <SpecialOfferSection />
      <TestimonialsSection />
      <MoneyBackSection />
      {/*<FeaturedCollection collection={data.featuredCollection} />*/}
      {/*<RecommendedProducts products={data.recommendedProducts} />*/}
      <FaqSection />
    </div>
  );
}

/** @typedef {import('./+types/landing-page').Route} Route */

import {Link} from 'react-router';
import heroDeviceImg from '~/assets/Group_1639_1.webp';
import trustpilotImg from '~/assets/trustpilot-home.avif';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Boost. Bulk. Bang</p>
          <h1 className="hero__title">
            #1 Wellness Device for Men, using advanced red light technology
            designed to support your gym performance and overall vitality.
          </h1>
          <ul className="hero__benefits">
            <li>
              <span aria-hidden="true">🔥</span> Promotes Stamina and Endurance*
            </li>
            <li>
              <span aria-hidden="true">💪🏻</span> Supports a Healthy Metabolism*
            </li>
            <li>
              <span aria-hidden="true">🍆</span> Encourages Well-Being and Confidence*
            </li>
            <li>
              <span aria-hidden="true">💯</span> Helps Maintain Balanced Energy Levels*
            </li>
          </ul>
          <Link className="hero__cta" to="/collections/all">
            Get Yours and Support Men&apos;s Wellness Today!
          </Link>
          <div className="hero__trust">
            <img
              src={trustpilotImg}
              alt="Trustpilot rating badge"
              loading="lazy"
            />
          </div>
        </div>
        <div className="hero__media">
          <img src={heroDeviceImg} alt="Testolite red light wellness device" />
        </div>
      </div>
    </section>
  );
}

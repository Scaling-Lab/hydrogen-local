import {useEffect, useRef, useState} from 'react';

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const delayTimer = useRef(/** @type {ReturnType<typeof setTimeout> | null} */ (null));

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 500;
      if (window.scrollY > threshold) {
        if (!delayTimer.current && !isVisible) {
          delayTimer.current = setTimeout(() => {
            setIsVisible(true);
            delayTimer.current = null;
          }, 500);
        }
      } else {
        if (delayTimer.current) {
          clearTimeout(delayTimer.current);
          delayTimer.current = null;
        }
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
    };
  }, [isVisible]);

  return (
    <div className={`sticky-cta-bar ${isVisible ? 'is-visible' : ''}`}>
      <div className="sticky-cta-bar__inner">
        <a className="sticky-cta-bar__button" href="#product-section">
          Apply Discount &amp; Check Availability
        </a>
      </div>
    </div>
  );
}

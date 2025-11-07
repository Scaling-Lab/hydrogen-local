import {useState, useRef, useEffect} from 'react';
import testimonial1Img from '~/assets/images (1).webp';
import testimonial2Img from '~/assets/images (2).webp';
import testimonial3Img from '~/assets/images (3).webp';
import testimonial4Img from '~/assets/images(4).webp';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'William',
    age: 40,
    image: testimonial1Img,
    quote:
      'Within weeks, my energy levels soared and my sex drive came back like I was in my early 20s again. For the first time in years, I felt motivated and excited about life.',
  },
  {
    id: 2,
    name: 'Lee',
    age: 47,
    image: testimonial2Img,
    quote:
      'I was skeptical after wasting money on every supplement under the sun. But this is different. My testosterone went from 420 to 680 in two months. I have bloodwork to prove it.',
  },
  {
    id: 3,
    name: 'David',
    age: 52,
    image: testimonial3Img,
    quote:
      'No more afternoon crashes. No more brain fog. I\'m present with my kids again. My wife noticed before I even told her I was trying something new.',
  },
  {
    id: 4,
    name: 'Thomas',
    age: 51,
    image: testimonial4Img,
    quote:
      'I use it during my morning coffee before work. 12 minutes is nothing, but the difference it\'s made in my life is everything. It\'s become as routine as brushing my teeth, but the benefits I\'ve experienced are anything but routine.',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const gap = 24; // 1.5rem gap between cards
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(Math.max(0, newIndex), TESTIMONIALS.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    const gap = 24; // 1.5rem gap between cards
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Men Are Saying</h2>
          <div className="testimonials__rating">
            <span aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
        </div>

        <div className="testimonials__desktop">
          <div className="testimonials__grid">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__mobile">
          <div
            className="testimonials__slider"
            ref={scrollContainerRef}
            onScroll={(e) => {
              const container = e.target;
              const scrollLeft = container.scrollLeft;
              const cardWidth = container.offsetWidth;
              const newIndex = Math.round(scrollLeft / cardWidth);
              setCurrentIndex(newIndex);
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${
                  index === currentIndex ? 'is-active' : ''
                }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__cta">
          <a href="#product-section" className="testimonials__cta-button">
            GET 50% OFF - START YOUR 12-MINUTE RITUAL NOW
            <span className="testimonials__cta-icon">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({testimonial}) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__image">
        <img
          src={testimonial.image}
          alt={`${testimonial.name}, ${testimonial.age}`}
          loading="lazy"
        />
      </div>
      <div className="testimonial-card__content">
        <div className="testimonial-card__header">
          <h3 className="testimonial-card__name">
            {testimonial.name}, {testimonial.age}
          </h3>
          <div className="testimonial-card__stars">
            <span aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
        </div>
        <p className="testimonial-card__quote">"{testimonial.quote}"</p>
      </div>
    </div>
  );
}


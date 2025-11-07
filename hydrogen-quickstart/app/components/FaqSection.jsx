import {useState} from 'react';

const FAQ_ITEMS = [
  {
    question: 'Is red light therapy safe?',
    answer: [
      <>
        Red light therapy is generally considered <strong>safe</strong> and{' '}
        <strong>non-invasive</strong> for most healthy adults. It uses specific
        wavelengths of red and near-infrared light that do not emit harmful UV
        radiation, and instead is designed to{' '}
        <strong>support your body’s natural cellular functions</strong> and energy
        processes.
      </>,
      <>
        Research indicates that consistent use may help promote{' '}
        <strong>healthier cellular function</strong> without significant adverse
        effects. If you have any underlying health conditions, consult a qualified
        healthcare professional before starting any new wellness routine.
      </>,
    ],
  },
  {
    question: 'Are there any side effects?',
    answer: [
      <>
        TestoLite PRO is designed as a <strong>non-invasive, general wellness</strong>{' '}
        device, so most users experience little to no side effects from the red light
        itself. Follow the usage guidelines to keep sessions safe and effective.
      </>,
    ],
  },
  {
    question: 'How soon can I expect to notice a difference?',
    answer: [
      <>
        Some men report experiencing improvements in energy and overall well-being
        within <strong>1–2 weeks</strong> of consistent use. However, results vary
        based on overall health, lifestyle habits, and how regularly you use the
        device.
      </>,
      <>
        TestoLite PRO is best seen as part of a{' '}
        <strong>long-term wellness routine</strong> rather than a quick fix.
      </>,
    ],
  },
  {
    question: 'How often and how long do I need to use it?',
    answer: [
      <>
        We recommend short, consistent sessions <strong>3–5 times per week</strong>.
        Start with lower exposure, then gradually increase according to your comfort
        level. Always follow the included guide for session length and positioning.
      </>,
    ],
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq__inner">
        <p className="faq__eyebrow">Support</p>
        <h2 className="faq__title">Frequently Asked Questions</h2>

        <div className="faq__items">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                className={`faq-item${isOpen ? ' is-open' : ''}`}
                key={item.question}
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-item__content">
                    {item.answer.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

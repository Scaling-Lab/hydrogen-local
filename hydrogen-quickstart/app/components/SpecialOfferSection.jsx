import offerDeviceImg from '~/assets/images11.webp';

const offerPerks = [
  {title: '50% OFF - Testolite PRO Device'},
  {title: '60-Day Money Back Guarantee'},
  {title: 'FREE Shipping & Handling'},
  {title: 'FREE eBook: Complete Guide to Natural Testosterone Optimization'},
  {title: 'FREE 1-Year Warranty'},
];

export function SpecialOfferSection() {
  return (
    <section className="special-offer" id="special-offer">
      <div className="special-offer__highlight">
        🔥 Limited Time Offer 🔥
      </div>

      <div className="special-offer__card">
        <div className="special-offer__media">
          <img src={offerDeviceImg} alt="Testolite PRO Device" loading="lazy" />
        </div>
        <div className="special-offer__content">
          <div className="special-offer__intro">
            <h3>Special Offer On Now!</h3>
            <p>Try Your Testolite PRO NOW at an</p>
            <p className="special-offer__emphasis">All Time Low Price!</p>

            <div className="special-offer__price">
              <div>
                <span className="special-offer__price-old">$199</span>
                <small>Regular Price</small>
              </div>
              <span className="special-offer__arrow">→</span>
              <div>
                <span className="special-offer__price-new">$99</span>
                <small>Today Only</small>
              </div>
            </div>
            <p className="special-offer__savings">Save $100 (50% OFF)</p>
          </div>

          <div className="special-offer__perks">
            <p>
              <span>Act Now and You&apos;ll Get:</span>
            </p>
            <ul>
              {offerPerks.map((perk) => (
                <li key={perk.title}>
                  <span aria-hidden="true">✔</span>
                  {perk.title}
                </li>
              ))}
            </ul>
          </div>

          <p className="special-offer__note">
            <span>Note:</span> Not Available on Amazon or eBay
          </p>

          <div className="special-offer__actions">
            <a className="special-offer__cta js-main-cta" href="#product-section">
              APPLY DISCOUNT &amp; CHECK AVAILABILITY! 👉
            </a>
            <button type="button" className="special-offer__specs">
              View Technical Specifications
            </button>
          </div>

          <div className="special-offer__secure">
            <span aria-hidden="true">🔒</span>
            Secure Checkout • 256-bit SSL Encrypted
          </div>
        </div>
      </div>
    </section>
  );
}

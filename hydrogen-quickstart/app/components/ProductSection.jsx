import {Await} from 'react-router';
import {Suspense, useEffect} from 'react';
import {Money, CartForm} from '@shopify/hydrogen';
import {AddToCartButton} from './AddToCartButton';
import {ProductPrice} from './ProductPrice';
import {useAside} from './Aside';
import productImage from '~/assets/phi.webp';
import paymentIconsImg from '~/assets/payment-icons-featured-product.avif';

/**
 * @param {{
 *   product: Promise<FeaturedProductQuery | null>;
 * }}
 */
export function ProductSection({product}) {
  const {open} = useAside();

  return (
    <section className="product-section" id="product-section">
      <div className="product-section__inner">
        <Suspense fallback={<ProductSectionSkeleton />}>
          <ProductSectionContent product={product} openCart={open} />
        </Suspense>
      </div>
    </section>
  );
}

/**
 * @param {{
 *   product: Promise<FeaturedProductQuery | null>;
 *   openCart: (type: string) => void;
 * }}
 */
function ProductSectionContent({product, openCart}) {
  return (
    <Await resolve={product}>
      {(response) => {
        if (!response?.products?.nodes?.[0]) return null;

        const productData = response.products.nodes[0];
        const selectedVariant = productData.selectedOrFirstAvailableVariant;

        if (!selectedVariant) return null;

        return (
          <>
            <div className="product-section__content">
              <p className="product-section__eyebrow">Get TestoLite PRO Now</p>
              <div className="product-section__media">
                <img
                  src={productImage}
                  alt={productData.title || 'TestoLite PRO product'}
                  loading="lazy"
                />
              </div>
              <div className="product-section__text">
                <a
                  href="#product-info"
                  className="product-section__skip-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('product-info')
                      ?.scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  Skip to product information
                </a>
                <div className="product-section__rating">
                  <span aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</span>{' '}
                  <span>Trusted by thousands</span>
                </div>
                <h2 className="product-section__title">
                  Support Your Vitality Naturally in 3 Easy Steps
                </h2>
                <ul className="product-section__benefits">
                  <li>
                    <span aria-hidden="true">🔥</span> Promotes Drive and
                    Stamina
                  </li>
                  <li>
                    <span aria-hidden="true">💪🏻</span> Supports Muscle
                    Maintenance and Strength
                  </li>
                  <li>
                    <span aria-hidden="true">🍆</span> Encourages Well-Being
                    and Vitality
                  </li>
                  <li>
                    <span aria-hidden="true">💯</span> Helps Boost Energy
                    Levels
                  </li>
                  <li>
                    <span aria-hidden="true">🧠</span> Supports Cognitive Focus
                  </li>
                </ul>
                <p className="product-section__cta-text">
                  Get Yours and Support Men&apos;s Wellness Today!
                </p>
                <div className="product-section__price" id="product-info">
                  {selectedVariant.compareAtPrice ? (
                    <>
                      <div className="product-section__price-labels">
                        <span className="product-section__price-label">
                          Regular price
                        </span>
                        <span className="product-section__price-label">
                          Sale price
                        </span>
                      </div>
                      <ProductPrice
                        price={selectedVariant.price}
                        compareAtPrice={selectedVariant.compareAtPrice}
                      />
                    </>
                  ) : (
                    <>
                      <div className="product-section__price-labels">
                        <span className="product-section__price-label">
                          Regular price
                        </span>
                      </div>
                      <ProductPrice price={selectedVariant.price} />
                    </>
                  )}
                </div>
                <div className="product-section__actions">
                  <AddToCartButton
                    disabled={!selectedVariant.availableForSale}
                    onClick={() => {
                      openCart('cart');
                    }}
                    lines={
                      selectedVariant
                        ? [
                            {
                              merchandiseId: selectedVariant.id,
                              quantity: 1,
                              selectedVariant,
                            },
                          ]
                        : []
                    }
                  >
                    {selectedVariant.availableForSale
                      ? 'Add to cart'
                      : 'Sold out'}
                  </AddToCartButton>
                  {selectedVariant.availableForSale && (
                    <ShopPayButtonWrapper variantId={selectedVariant.id} />
                  )}
                </div>
                <div className="product-section__payment-info">
                  <p className="product-section__payment-text">
                    Checkout safely using your preferred payment method
                  </p>
                  <img
                    src={paymentIconsImg}
                    alt="Payment methods"
                    loading="lazy"
                  />
                  <p className="product-section__installments">
                    Pay in 4 interest-free installments of{' '}
                    {selectedVariant.price && (
                      <Money
                        data={{
                          amount: (
                            parseFloat(selectedVariant.price.amount) / 4
                          ).toString(),
                          currencyCode: selectedVariant.price.currencyCode,
                        }}
                      />
                    )}{' '}
                    with <a href="#shop-pay">Shop Pay</a>
                  </p>
                  <p className="product-section__power">
                    Your purchasing power is <strong>unlimited</strong>.
                  </p>
                  <a href="#learn-more" className="product-section__learn-more">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Await>
  );
}

/**
 * @param {{variantId: string}}
 */
function ShopPayButtonWrapper({variantId}) {
  useEffect(() => {
    // Load Shop Pay script if not already loaded
    if (!document.querySelector('script[src*="shop-pay"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.shopify.com/shopifycloud/shop-pay.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="product-section__shop-pay">
      <CartForm
        route="/cart"
        inputs={{
          lines: [
            {
              merchandiseId: variantId,
              quantity: 1,
            },
          ],
        }}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => (
          <shop-pay-button
            store-url={typeof window !== 'undefined' ? window.location.origin : ''}
            variant-ids={variantId}
          />
        )}
      </CartForm>
    </div>
  );
}

function ProductSectionSkeleton() {
  return (
    <div className="product-section__skeleton">
      <div className="product-section__content">
        <div className="product-section__text">
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </div>
        <div className="product-section__media">
          <div className="skeleton skeleton-image" />
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('storefrontapi.generated').FeaturedProductQuery} FeaturedProductQuery */

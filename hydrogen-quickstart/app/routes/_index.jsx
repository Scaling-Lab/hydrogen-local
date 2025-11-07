import {Await, useLoaderData, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';
import {ProductSection} from '~/components/ProductSection';
import {ScienceSection} from '~/components/ScienceSection';
import {HowItWorksSection} from '~/components/HowItWorksSection';
import {ExpectTimelineSection} from '~/components/ExpectTimelineSection';
import {FeaturedOnSection} from '~/components/FeaturedOnSection';
import {SpecialOfferSection} from '~/components/SpecialOfferSection';
import {FaqSection} from '~/components/FaqSection';
import {BadgesSection} from '~/components/BadgesSection';
import {TestimonialsSection} from '~/components/TestimonialsSection';
import {MoneyBackSection} from '~/components/MoneyBackSection';
import heroDeviceImg from '~/assets/Group_1639_1.webp';
import trustpilotImg from '~/assets/trustpilot-home.avif';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {Route.LoaderArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {Route.LoaderArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  const featuredProduct = context.storefront
    .query(FEATURED_PRODUCT_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
    featuredProduct,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <HeroSection />
      <BadgesSection />
      <ProductSection product={data.featuredProduct} />
      <ScienceSection />
      <HowItWorksSection />
      <ExpectTimelineSection />
      <FeaturedOnSection />
      <SpecialOfferSection />
      <TestimonialsSection />
      <MoneyBackSection />
      <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} />
      <FaqSection />
    </div>
  );
}

function HeroSection() {
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
              <span aria-hidden="true">💪🏻</span> Supports a Healthy
              Metabolism*
            </li>
            <li>
              <span aria-hidden="true">🍆</span> Encourages Well-Being and
              Confidence*
            </li>
            <li>
              <span aria-hidden="true">💯</span> Helps Maintain Balanced Energy
              Levels*
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

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <section className="featured-collection">
      <div className="featured-collection__inner">
        <Link to={`/collections/${collection.handle}`}>
          {image && (
            <div className="featured-collection-image">
              <Image data={image} sizes="100vw" />
            </div>
          )}
          <h1>{collection.title}</h1>
        </Link>
      </div>
    </section>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <section className="recommended-products">
      <div className="recommended-products__inner">
        <h2>Recommended Products</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={products}>
            {(response) => (
              <div className="recommended-products-grid">
                {response
                  ? response.products.nodes.map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))
                  : null}
              </div>
            )}
          </Await>
        </Suspense>
        <br />
      </div>
    </section>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const FEATURED_PRODUCT_QUERY = `#graphql
  fragment FeaturedProductVariant on ProductVariant {
    id
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    price {
      amount
      currencyCode
    }
  }
  fragment FeaturedProduct on Product {
    id
    title
    handle
    selectedOrFirstAvailableVariant {
      ...FeaturedProductVariant
    }
  }
  query FeaturedProduct($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedProduct
      }
    }
  }
`;

/** @typedef {import('./+types/_index').Route} Route */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('storefrontapi.generated').FeaturedProductQuery} FeaturedProductQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

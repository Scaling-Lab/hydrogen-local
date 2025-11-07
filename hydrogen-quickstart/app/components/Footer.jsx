import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';
import footerLogo from '~/assets/testolite-logo.png';
import paymentIcon from '~/assets/amazon.svg';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="footer__inner">
              <div className="footer__brand">
                <img
                  src={footerLogo}
                  alt="TestoLite logo"
                  className="footer__brand-logo"
                  loading="lazy"
                />
              </div>

              {footer?.menu && header.shop.primaryDomain?.url ? (
                <FooterMenu
                  menu={footer.menu}
                  primaryDomainUrl={header.shop.primaryDomain.url}
                  publicStoreDomain={publicStoreDomain}
                />
              ) : (
                <FooterMenu
                  menu={FALLBACK_FOOTER_MENU}
                  primaryDomainUrl={header.shop.primaryDomain?.url ?? ''}
                  publicStoreDomain={publicStoreDomain}
                />
              )}

              <p className="footer__copyright">
                Copyright 2024 © TestoLite. All rights reserved.
              </p>

              <FooterPayments />

              <div className="footer__divider" aria-hidden="true" />

              <section className="footer__disclaimer" aria-label="Disclaimer">
                <p>
                  <strong>Disclaimer:</strong> The statements made on this website
                  have not been evaluated by the Food and Drug Administration
                  (FDA). TestoLite PRO is a general wellness device designed to
                  support natural bodily functions and promote overall well-being
                  and a healthy lifestyle. It is not intended to diagnose, treat,
                  cure, or prevent any disease. Results may vary. Testimonials
                  reflect real-life experiences of those who have used our
                  products, but results may not be typical and depend on many
                  factors including consistent use and individual health.
                </p>
              </section>

              <FooterSecondaryLinks />
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function FooterPayments() {
  return (
    <div className="footer__payments" aria-label="Payment methods">
      {PAYMENT_METHODS.map((method) => (
        <div className="footer__payment-icon" key={method.id}>
          <img src={paymentIcon} alt={method.label} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function FooterSecondaryLinks() {
  return (
    <div className="footer__secondary-links">
      {FOOTER_SECONDARY_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith('http') ? '_blank' : undefined}
          rel={
            link.url.startsWith('http') ? 'noopener noreferrer' : undefined
          }
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

const PAYMENT_METHODS = [
  {id: 'amazon-pay', label: 'Amazon Pay'},
  {id: 'amex', label: 'American Express'},
  {id: 'apple-pay', label: 'Apple Pay'},
  {id: 'discover', label: 'Discover'},
  {id: 'google-pay', label: 'Google Pay'},
  {id: 'shop-pay', label: 'Shop Pay'},
  {id: 'visa', label: 'Visa'},
];

const FOOTER_SECONDARY_LINKS = [
  {label: 'Contact information', url: 'mailto:support@testolite.com'},
  {label: 'Refund policy', url: '/policies/refund-policy'},
  {label: 'Privacy policy', url: '/policies/privacy-policy'},
  {label: 'Terms of service', url: '/policies/terms-of-service'},
];

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */

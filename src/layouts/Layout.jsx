import { useEffect } from 'react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandmarksOrHistoricalBuildings',
  name: 'Vancouver Block',
  alternateName: 'The Vancouver Block',
  description:
    'A Class A heritage-designated Edwardian commercial building completed in 1912, located at 736 Granville Street, Vancouver, BC. Designed by Parr & Fee for entrepreneur Dominic Burns, it is renowned for its terracotta facade and distinctive four-faced clock tower.',
  url: 'https://vancouverblock.ca',
  image: '/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '736 Granville Street',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    postalCode: 'V6Z 1A1',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2827,
    longitude: -123.1207,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  isAccessibleForFree: false,
  publicAccess: true,
  foundingDate: '1912',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Heritage Status', value: 'Class A — City of Vancouver' },
    { '@type': 'PropertyValue', name: 'Registry', value: 'Canadian Register of Historic Places' },
    { '@type': 'PropertyValue', name: 'Architectural Style', value: 'Edwardian Commercial' },
    { '@type': 'PropertyValue', name: 'Architect', value: 'Parr & Fee' },
  ],
};

const JSON_LD_ID = 'vancouver-block-jsonld';

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function useDocumentHead({ title, description, ogTitle, ogDescription, ogImage }) {
  useEffect(() => {
    document.title = title;
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', ogTitle);
    setMetaTag('property', 'og:description', ogDescription);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_CA');
    setMetaTag('property', 'og:site_name', 'Vancouver Block');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', ogTitle);
    setMetaTag('name', 'twitter:description', ogDescription);
    setMetaTag('name', 'twitter:image', ogImage);

    // JSON-LD
    let script = document.getElementById(JSON_LD_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [title, description, ogTitle, ogDescription, ogImage]);
}

export default function Layout({
  title = 'Vancouver Block | Heritage Landmark Since 1912',
  description = "Explore the history, architecture, and heritage of Vancouver Block at 736 Granville Street — a Class A heritage landmark and one of Vancouver's most iconic Edwardian commercial buildings.",
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  children,
}) {
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  useDocumentHead({
    title,
    description,
    ogTitle: resolvedOgTitle,
    ogDescription: resolvedOgDescription,
    ogImage,
  });

  return <>{children}</>;
}

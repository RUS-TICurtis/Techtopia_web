import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

/**
 * useSEO — Injects per-page <title> and <meta> tags via react-helmet-async.
 *
 * @param {object} params
 * @param {string} params.title       - Page title (appended with " | Techtopia")
 * @param {string} params.description - Meta description (≤160 chars recommended)
 * @param {string} [params.canonical] - Optional canonical URL path (e.g. "/about")
 * @param {string} [params.ogImage]   - Optional Open Graph image URL
 */
export function useSEO({ title, description, canonical, ogImage }) {
  const siteTitle = "Techtopia";
  const baseUrl = "https://techtopiagh.com";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | IT Services & Software Development in Ghana`;
  const ogImg = ogImage || `${baseUrl}/assets/images/logo/Full logo (black).svg`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={ogImg} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />
    </Helmet>
  );
}

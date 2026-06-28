import { Helmet } from 'react-helmet-async';

export interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
}

export function SEOHead({
    title,
    description,
    keywords = "AI automation, web development, video editing, AI chatbots, AI voice agents, CRM automation, n8n workflows, GoHighLevel, SaaS development, ZROXZ",
    canonicalUrl = "https://zroxz.com",
    ogImage = "https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png",
    ogType = "website",
    structuredData,
}: SEOProps) {
    const fullTitle = `${title} | ZROXZ`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}

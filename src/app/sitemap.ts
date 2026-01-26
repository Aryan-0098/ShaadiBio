import { MetadataRoute } from 'next';
import { SEO_PAGES } from '@/lib/seo-content';

const BASE_URL = 'https://shaadibio.com'; // Replace with actual domain when live

export default function sitemap(): MetadataRoute.Sitemap {
    const seoRoutes = SEO_PAGES.map((page) => ({
        url: `${BASE_URL}/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const staticRoutes = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${BASE_URL}/templates`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/builder`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
    ];

    return [...staticRoutes, ...seoRoutes];
}

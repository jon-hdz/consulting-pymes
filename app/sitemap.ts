import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jonathanhdz.xyz',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://jonathanhdz.xyz#servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://jonathanhdz.xyz#proceso',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://jonathanhdz.xyz#contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
  ]
}

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://consulting-pymes.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://consulting-pymes.vercel.app#servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://consulting-pymes.vercel.app#proceso',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://consulting-pymes.vercel.app#contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
  ]
}

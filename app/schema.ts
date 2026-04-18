export function getSchemaMarkup() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://consulting-pymes.vercel.app/#organization',
        name: 'Consultora Digital PyME',
        description: 'Soluciones digitales para PyMEs: presencia web, automatización, reportes y capacitación',
        url: 'https://consulting-pymes.vercel.app',
        image: {
          '@type': 'ImageObject',
          url: 'https://consulting-pymes.vercel.app/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Consultora Digital PyME',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Mexico',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          availableLanguage: 'es',
          areaServed: 'MX',
          contactOption: 'TollFree',
        },
        sameAs: [
          'https://wa.me',
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://consulting-pymes.vercel.app/#service-presencia',
        name: 'Presencia Digital',
        description: 'Web, redes y reputación que generan confianza y atraen clientes',
        provider: {
          '@id': 'https://consulting-pymes.vercel.app/#organization',
        },
        areaServed: 'MX',
        serviceType: 'Digital Presence',
        hasOfferingType: 'Service',
      },
      {
        '@type': 'Service',
        '@id': 'https://consulting-pymes.vercel.app/#service-automatizacion',
        name: 'Automatización',
        description: 'Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que importa',
        provider: {
          '@id': 'https://consulting-pymes.vercel.app/#organization',
        },
        areaServed: 'MX',
        serviceType: 'Automation',
        hasOfferingType: 'Service',
      },
      {
        '@type': 'Service',
        '@id': 'https://consulting-pymes.vercel.app/#service-reportes',
        name: 'Reportes y Métricas',
        description: 'Tableros simples y reportes claros para que entiendas cómo va tu negocio sin necesitar un analista',
        provider: {
          '@id': 'https://consulting-pymes.vercel.app/#organization',
        },
        areaServed: 'MX',
        serviceType: 'Analytics',
        hasOfferingType: 'Service',
      },
      {
        '@type': 'Service',
        '@id': 'https://consulting-pymes.vercel.app/#service-implementacion',
        name: 'Implementación',
        description: 'Ponemos en marcha las herramientas digitales que tu negocio necesita, sin dolores de cabeza',
        provider: {
          '@id': 'https://consulting-pymes.vercel.app/#organization',
        },
        areaServed: 'MX',
        serviceType: 'Implementation',
        hasOfferingType: 'Service',
      },
      {
        '@type': 'Service',
        '@id': 'https://consulting-pymes.vercel.app/#service-capacitacion',
        name: 'Capacitación',
        description: 'Acompañamos a tu equipo para que adopte y aproveche cada herramienta al máximo',
        provider: {
          '@id': 'https://consulting-pymes.vercel.app/#organization',
        },
        areaServed: 'MX',
        serviceType: 'Training',
        hasOfferingType: 'Service',
      },
    ],
  }
}

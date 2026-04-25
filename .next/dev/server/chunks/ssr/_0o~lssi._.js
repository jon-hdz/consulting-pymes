module.exports = [
"[project]/app/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchemaMarkup",
    ()=>getSchemaMarkup
]);
function getSchemaMarkup() {
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
                    alt: 'Consultora Digital PyME'
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Mexico'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Support',
                    availableLanguage: 'es',
                    areaServed: 'MX',
                    contactOption: 'TollFree'
                },
                sameAs: [
                    'https://wa.me'
                ]
            },
            {
                '@type': 'Service',
                '@id': 'https://consulting-pymes.vercel.app/#service-presencia',
                name: 'Presencia Digital',
                description: 'Web, redes y reputación que generan confianza y atraen clientes',
                provider: {
                    '@id': 'https://consulting-pymes.vercel.app/#organization'
                },
                areaServed: 'MX',
                serviceType: 'Digital Presence',
                hasOfferingType: 'Service'
            },
            {
                '@type': 'Service',
                '@id': 'https://consulting-pymes.vercel.app/#service-automatizacion',
                name: 'Automatización',
                description: 'Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que importa',
                provider: {
                    '@id': 'https://consulting-pymes.vercel.app/#organization'
                },
                areaServed: 'MX',
                serviceType: 'Automation',
                hasOfferingType: 'Service'
            },
            {
                '@type': 'Service',
                '@id': 'https://consulting-pymes.vercel.app/#service-reportes',
                name: 'Reportes y Métricas',
                description: 'Tableros simples y reportes claros para que entiendas cómo va tu negocio sin necesitar un analista',
                provider: {
                    '@id': 'https://consulting-pymes.vercel.app/#organization'
                },
                areaServed: 'MX',
                serviceType: 'Analytics',
                hasOfferingType: 'Service'
            },
            {
                '@type': 'Service',
                '@id': 'https://consulting-pymes.vercel.app/#service-implementacion',
                name: 'Implementación',
                description: 'Ponemos en marcha las herramientas digitales que tu negocio necesita, sin dolores de cabeza',
                provider: {
                    '@id': 'https://consulting-pymes.vercel.app/#organization'
                },
                areaServed: 'MX',
                serviceType: 'Implementation',
                hasOfferingType: 'Service'
            },
            {
                '@type': 'Service',
                '@id': 'https://consulting-pymes.vercel.app/#service-capacitacion',
                name: 'Capacitación',
                description: 'Acompañamos a tu equipo para que adopte y aproveche cada herramienta al máximo',
                provider: {
                    '@id': 'https://consulting-pymes.vercel.app/#organization'
                },
                areaServed: 'MX',
                serviceType: 'Training',
                hasOfferingType: 'Service'
            }
        ]
    };
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/schema.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'Consultora Digital PyME | Transformación Digital Empresarial',
    description: 'Soluciones digitales para PyMEs en México: presencia web, automatización, reportes y capacitación. +20 empresas acompañadas. Respuesta en menos de 24h.',
    keywords: [
        'transformación digital',
        'PyMEs',
        'consultoría digital',
        'automatización',
        'México',
        'presencia digital'
    ],
    authors: [
        {
            name: 'Consultora Digital PyME'
        }
    ],
    creator: 'Consultora Digital PyME',
    publisher: 'Consultora Digital PyME',
    openGraph: {
        type: 'website',
        locale: 'es_MX',
        url: 'https://jonathanhdz.xyz',
        title: 'Consultora Digital PyME | Transformación Digital Empresarial',
        description: 'Soluciones digitales para PyMEs en México: presencia web, automatización, reportes y capacitación. Respuesta en menos de 24h.',
        siteName: 'Consultora Digital PyME',
        images: [
            {
                url: 'https://jonathanhdz.xyz/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Consultora Digital PyME - Transformación Digital'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Consultora Digital PyME | Transformación Digital',
        description: 'Acompañamos PyMEs en su transformación digital. Respuesta en menos de 24h.',
        images: [
            'https://jonathanhdz.xyz/og-image.jpg'
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1
        }
    },
    alternates: {
        canonical: 'https://jonathanhdz.xyz'
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        charSet: "utf-8"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.svg",
                        type: "image/svg+xml"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/icon.png"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchemaMarkup"])())
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0o~lssi._.js.map
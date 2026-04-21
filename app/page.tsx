import React from 'react'
import Image from 'next/image'

const SVGArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <title>Siguiente</title>
    <path d="M5 12h14M13 5l7 7-7 7"></path>
  </svg>
)

const SVGDiagonalArrow = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <title>Diagonal arrow</title>
    <path d="M7 17L17 7M8 7h9v9"></path>
  </svg>
)

const SVGWhatsApp = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
  >
    <title>WhatsApp</title>
    <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12l-1 3.7 3.8-1a7.94 7.94 0 0 0 3.8 1h.2a7.94 7.94 0 0 0 5.6-13.4zm-5.6 12.2a6.53 6.53 0 0 1-3.3-.9l-.3-.1-2.3.6.6-2.2-.2-.3a6.6 6.6 0 1 1 5.5 2.9zm3.6-4.9c-.2-.1-1.1-.5-1.3-.6s-.3-.1-.4.1-.5.6-.6.8-.2.1-.4 0a5.7 5.7 0 0 1-2.8-2.5c-.2-.4.2-.3.6-1.1.1-.1 0-.2 0-.3s-.4-1.1-.6-1.5-.3-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.8 1.8 4.3 4.3 0 0 0 .9 2.3 9.6 9.6 0 0 0 3.7 3.3c1.4.6 1.9.6 2.6.5a2.2 2.2 0 0 0 1.4-1 1.8 1.8 0 0 0 .1-1c-.1-.1-.2-.2-.4-.3z"></path>
  </svg>
)

const SVGMessenger = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
  >
    <title>Messenger</title>
    <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.5 5.5 3.8 7.2V22l3.5-1.9c.9.3 1.8.4 2.7.4 5.5 0 10-4.1 10-9.3S17.5 2 12 2zm1 12.5l-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 5-2.7-5.5 5.8z"></path>
  </svg>
)

const SVGPresencia = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Presencia Digital</title>
    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
)

const SVGAutomacion = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Automatización</title>
    <circle cx="12" cy="12" r="1"></circle>
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m5.08 0l4.24 4.24"></path>
  </svg>
)

const SVGMetricas = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Reportes y Métricas</title>
    <line x1="3" y1="3" x2="3" y2="21"></line>
    <line x1="3" y1="21" x2="21" y2="21"></line>
    <path d="M7 12l3-3 3 3 4-4"></path>
  </svg>
)

const SVGImplementacion = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Implementación</title>
    <path d="M6 4h12v10H6z"></path>
    <path d="M9 14v3M12 14v3M15 14v3"></path>
    <line x1="3" y1="20" x2="21" y2="20"></line>
  </svg>
)

const SVGCapacitacion = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Capacitación</title>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const SVGIdea = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Por qué existimos</title>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

const SVGBridge = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Cómo trabajamos</title>
    <line x1="6" y1="12" x2="18" y2="12"></line>
    <circle cx="9" cy="12" r="3"></circle>
    <circle cx="15" cy="12" r="3"></circle>
  </svg>
)

const SVGAchieve = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>Qué hemos logrado</title>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

const SVGValues = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <title>En qué creemos</title>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
)

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark">
              <Image src="/favicon.svg" alt="Consultora Digital PyME Logo" width={45} height={45} priority />
            </span>
            Consultora Digital PyME
          </a>
          <nav className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="btn btn-primary" href="#contacto">
            Contactar
            <SVGArrow />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-inner">
          <span className="eyebrow"><span className="dot"></span> Consultora digital para PyMEs</span>
          <h1 className="hero-title">Transforma tu PyME <em>digitalmente</em></h1>
          <p className="hero-sub">Te acompañamos sin fricción, para que la tecnología trabaje a favor de tu negocio. Estrategia clara, implementación real y resultados medibles.</p>
          <div className="hero-cta">
            <a
              className="btn btn-wa"
              href="https://wa.me/525559662632?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20sobre%20transformaci%C3%B3n%20digital%20para%20mi%20negocio"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              target="_blank"
              title="Contáctanos por WhatsApp - Respuesta en menos de 24h"
              aria-label="Contactar por WhatsApp"
            >
              <SVGWhatsApp />
              Hablar por WhatsApp
            </a>
            <a className="btn btn-ghost-dark" href="#servicios" title="Ver nuestros servicios de transformación digital">
              Ver servicios
              <SVGArrow />
            </a>
          </div>
          <div className="hero-meta">
            <span><span className="dotg"></span> Respuesta en menos de 24h</span>
            <span>+20 PyMEs acompañadas</span>
            <span>México</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="wrap">
          <div className="label">Quiénes Somos</div>
          <h2>Transformación digital que funciona en la realidad</h2>

          <div className="about-grid">
            <article className="about-card">
              <div className="about-icon"><SVGIdea /></div>
              <div>
                <h3>Por qué existimos</h3>
                <p>Vimos PyMEs con grandes ideas, equipos talentosos y procesos manuales que les robaban horas. Decidimos ser ese puente: acompañar la transformación digital desde la estrategia hasta el resultado concreto.</p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-icon"><SVGBridge /></div>
              <div>
                <h3>Cómo trabajamos</h3>
                <p>No vendemos soluciones genéricas. Entendemos tu negocio, diagnosticamos tus frenos, diseñamos un plan realista y lo ejecutamos paso a paso junto a tu equipo. Sin teoría sin aplicación, sin promesas infladas.</p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-icon"><SVGAchieve /></div>
              <div>
                <h3>Qué hemos logrado</h3>
                <p>Más de 20 PyMEs transformadas. Procesos que ahorran 40 horas/mes, sistemas que triplican la visibilidad del negocio. Cada una, con resultados medibles y sostenibles en el tiempo.</p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-icon"><SVGValues /></div>
              <div>
                <h3>En qué creemos</h3>
                <p>La tecnología sirve al negocio, no al revés. Las PyMEs merecen herramientas que potencien su agilidad. La transformación digital no es un proyecto que termina: evoluciona, y por eso acompañamos en el tiempo.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios">
        <div className="wrap">
          <div className="label">Servicios</div>
          <h2>Todo lo que tu negocio necesita, en un solo equipo</h2>
          <p className="section-lede">Desde la presencia digital hasta la capacitación de tu equipo. Soluciones concretas, sin humo.</p>

          <div className="services-grid">
            <article className="svc" data-tone="blue">
              <div className="svc-top"><SVGPresencia /></div>
              <div>
                <h3>Presencia Digital</h3>
                <p>Diseñamos y optimizamos tu sitio web, redes sociales y reputación online para que los clientes te encuentren y confíen en ti. Desde estrategia SEO hasta gestión de contenido, todo enfocado en convertir visitas en ventas.</p>
              </div>
            </article>

            <article className="svc" data-tone="amber">
              <div className="svc-top"><SVGAutomacion /></div>
              <div>
                <h3>Automatización</h3>
                <p>Eliminamos las tareas repetitivas que consumen horas: facturación, seguimiento de leads, sincronización de datos. Implementamos flujos de trabajo automatizados que liberan a tu equipo para actividades estratégicas que generan crecimiento.</p>
              </div>
            </article>

            <article className="svc" data-tone="violet">
              <div className="svc-top"><SVGMetricas /></div>
              <div>
                <h3>Reportes y Métricas</h3>
                <p>Creamos dashboards intuitivos con los indicadores que realmente importan: ventas, clientes, rentabilidad. Datos claros en tiempo real para tomar decisiones rápidas, sin necesidad de analistas o reportes complicados.</p>
              </div>
            </article>

            <article className="svc" data-tone="rose">
              <div className="svc-top"><SVGImplementacion /></div>
              <div>
                <h3>Implementación</h3>
                <p>Desplegamos e integramos las herramientas digitales que necesitas: CRM, e-commerce, sistemas de gestión. Configuración, migración de datos y testing incluido. Tu equipo comienza a usar las herramientas desde el primer día.</p>
              </div>
            </article>

            <article className="svc" data-tone="teal">
              <div className="svc-top"><SVGCapacitacion /></div>
              <div>
                <h3>Capacitación</h3>
                <p>Tu equipo es clave. Ofrecemos capacitación personalizada, documentación clara y soporte continuo para que dominen las nuevas herramientas. Menos frustración, más productividad, resultados sostenibles en el tiempo.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="section-tint">
        <div className="wrap">
          <div className="label">Cómo trabajamos</div>
          <h2>Un proceso simple, claro y enfocado en resultados</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Diagnóstico</h3>
              <p>Entendemos tu PyME, tus procesos y tus objetivos reales.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Estrategia</h3>
              <p>Diseñamos un plan claro y priorizado, pensado para vos.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Implementación</h3>
              <p>Ejecutamos junto a tu equipo, paso a paso y sin sorpresas.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>Seguimiento</h3>
              <p>Medimos, ajustamos y mejoramos con vos en el tiempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section id="contacto" className="cta-dark">
        <div className="wrap cta-inner">
          <h2>¿Listo para transformar tu PyME?</h2>
          <p>Conversemos sin compromiso. En unos minutos entendemos tu situación y te decimos por dónde empezar.</p>
          <div className="cta-buttons">
            <a
              className="btn btn-wa"
              href="https://wa.me/525559662632?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20sobre%20transformaci%C3%B3n%20digital%20para%20mi%20negocio"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              target="_blank"
              title="Contáctanos por WhatsApp - Respuesta en menos de 24h"
              aria-label="Contactar por WhatsApp"
            >
              <SVGWhatsApp />
              WhatsApp
            </a>
            <a
              className="btn btn-msg"
              href="#"
              title="Contáctanos por Messenger"
              aria-label="Contactar por Messenger"
            >
              <SVGMessenger />
              Messenger
            </a>
          </div>
          <p className="cta-finep">Respondemos en menos de 24 horas. Sin formularios. Sin spam.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot">
              <a className="brand" href="#">
                <span className="brand-mark">
                  <Image src="/favicon.svg" alt="Consultora Digital PyME Logo" width={48} height={48} />
                </span>
                Consultora Digital PyME
              </a>
              <p className="foot-about">Tecnología al servicio de tu negocio. Acompañamos PyMEs en su transformación digital.</p>
            </div>
            <div className="foot">
              <h5>Navegación</h5>
              <ul>
                <li><a href="#servicios" title="Ver nuestros servicios de transformación digital">Servicios</a></li>
                <li><a href="#proceso" title="Conocer nuestro proceso de implementación">Cómo trabajamos</a></li>
                <li><a href="#contacto" title="Ponerse en contacto con nuestro equipo">Contacto</a></li>
              </ul>
            </div>
            <div className="foot">
              <h5>Contacto</h5>
              <ul>
                <li><a
                  className="foot-contact-item"
                  href="https://wa.me/525559662632?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20sobre%20transformaci%C3%B3n%20digital%20para%20mi%20negocio"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  title="Contáctanos por WhatsApp - Respuesta en menos de 24h"
                  aria-label="Contactar por WhatsApp"
                >
                  <SVGWhatsApp />
                  WhatsApp
                </a></li>
                <li><a
                  className="foot-contact-item"
                  href="#"
                  title="Contáctanos por Messenger"
                  aria-label="Contactar por Messenger"
                >
                  <SVGMessenger />
                  Messenger
                </a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Consultora Digital PyME. Todos los derechos reservados.</span>
            <span>Hecho con foco en PyMEs <span className="heart">♥</span></span>
          </div>
        </div>
      </footer>
    </>
  )
}

import React from 'react'

const SVGArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
)

const SVGLightning = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
)

const SVGDiagonalArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg>
)

const SVGWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12l-1 3.7 3.8-1a7.94 7.94 0 0 0 3.8 1h.2a7.94 7.94 0 0 0 5.6-13.4zm-5.6 12.2a6.53 6.53 0 0 1-3.3-.9l-.3-.1-2.3.6.6-2.2-.2-.3a6.6 6.6 0 1 1 5.5 2.9zm3.6-4.9c-.2-.1-1.1-.5-1.3-.6s-.3-.1-.4.1-.5.6-.6.8-.2.1-.4 0a5.7 5.7 0 0 1-2.8-2.5c-.2-.4.2-.3.6-1.1.1-.1 0-.2 0-.3s-.4-1.1-.6-1.5-.3-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.8 1.8 4.3 4.3 0 0 0 .9 2.3 9.6 9.6 0 0 0 3.7 3.3c1.4.6 1.9.6 2.6.5a2.2 2.2 0 0 0 1.4-1 1.8 1.8 0 0 0 .1-1c-.1-.1-.2-.2-.4-.3z"></path></svg>
)

const SVGMessenger = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.5 5.5 3.8 7.2V22l3.5-1.9c.9.3 1.8.4 2.7.4 5.5 0 10-4.1 10-9.3S17.5 2 12 2zm1 12.5l-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 5-2.7-5.5 5.8z"></path></svg>
)

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark">
              <SVGLightning />
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
            <a className="btn btn-wa" href="https://wa.me">
              <SVGWhatsApp />
              Hablar por WhatsApp
            </a>
            <a className="btn btn-ghost-dark" href="#servicios">
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

      {/* SERVICES */}
      <section id="servicios">
        <div className="wrap">
          <div className="label">Servicios</div>
          <h2>Todo lo que tu negocio necesita, en un solo equipo</h2>
          <p className="section-lede">Desde la presencia digital hasta la capacitación de tu equipo. Soluciones concretas, sin humo.</p>

          <div className="services-grid">
            <div className="svc" data-tone="blue">
              <span className="svc-index">01</span>
              <div className="svc-top"><span className="svc-dot"></span><span className="svc-cat">Presencia</span></div>
              <div>
                <h3>Presencia Digital</h3>
                <p>Web, redes y reputación que generan confianza y atraen clientes.</p>
              </div>
            </div>

            <div className="svc" data-tone="amber">
              <span className="svc-index">02</span>
              <div className="svc-top"><span className="svc-dot"></span><span className="svc-cat">Eficiencia</span></div>
              <div>
                <h3>Automatización</h3>
                <p>Automatizamos tareas repetitivas puntuales para que tu equipo se enfoque en lo que importa.</p>
              </div>
            </div>

            <div className="svc" data-tone="violet">
              <span className="svc-index">03</span>
              <div className="svc-top"><span className="svc-dot"></span><span className="svc-cat">Visibilidad</span></div>
              <div>
                <h3>Reportes y Métricas</h3>
                <p>Tableros simples y reportes claros para que entiendas cómo va tu negocio sin necesitar un analista.</p>
              </div>
            </div>

            <div className="svc" data-tone="rose">
              <span className="svc-index">04</span>
              <div className="svc-top"><span className="svc-dot"></span><span className="svc-cat">Ejecución</span></div>
              <div>
                <h3>Implementación</h3>
                <p>Ponemos en marcha las herramientas digitales que tu negocio necesita, sin dolores de cabeza.</p>
              </div>
            </div>

            <div className="svc" data-tone="teal">
              <span className="svc-index">05</span>
              <div className="svc-top"><span className="svc-dot"></span><span className="svc-cat">Personas</span></div>
              <div>
                <h3>Capacitación</h3>
                <p>Acompañamos a tu equipo para que adopte y aproveche cada herramienta al máximo.</p>
              </div>
            </div>
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
              <h4>Diagnóstico</h4>
              <p>Entendemos tu PyME, tus procesos y tus objetivos reales.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>Estrategia</h4>
              <p>Diseñamos un plan claro y priorizado, pensado para vos.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>Implementación</h4>
              <p>Ejecutamos junto a tu equipo, paso a paso y sin sorpresas.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>Seguimiento</h4>
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
            <a className="btn btn-wa" href="https://wa.me">
              <SVGWhatsApp />
              WhatsApp
            </a>
            <a className="btn btn-msg" href="#">
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
                  <SVGLightning />
                </span>
                Consultora Digital PyME
              </a>
              <p className="foot-about">Tecnología al servicio de tu negocio. Acompañamos PyMEs en su transformación digital.</p>
            </div>
            <div className="foot">
              <h5>Navegación</h5>
              <ul>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#proceso">Cómo trabajamos</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="foot">
              <h5>Contacto</h5>
              <ul>
                <li><a className="foot-contact-item" href="https://wa.me">
                  <SVGWhatsApp />
                  WhatsApp
                </a></li>
                <li><a className="foot-contact-item" href="#">
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

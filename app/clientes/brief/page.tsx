'use client';

import { useState } from 'react';
import FormField from '@/app/components/FormField';
import FormSection from '@/app/components/FormSection';
import SuccessModal from '@/app/components/SuccessModal';

interface FormData {
  // Sección 1
  nombreEmpresa: string;
  queVenden: string;
  tiempoOperacion: string;
  ingresosMensuales: string;
  tamanoEquipo: string;
  clientesActuales: string;

  // Sección 2
  nichoSegmento: string;
  tamanoMercado: string;
  tendenciasActuales: string;

  // Sección 3
  perfilDemografico: string;
  dondeSeEncuentran: string;
  comoTomaDecisiones: string;

  // Sección 4
  competidoresTop: string;
  queHacenBien: string;
  queHacenMal: string;
  diferenciacion: string;

  // Sección 5
  objetivosPlazo: string;
  clientesNuevosObjetivo: string;
  ingresosObjetivo: string;
  otrosObjetivos: string;

  // Sección 6
  mayorReto: string;
  queImpideCrecimiento: string;
  budgetDisponible: string;
  equipoDisponible: string;

  // Sección 7
  nombreContacto: string;
  emailContacto: string;
  telefonoContacto: string;
  mejorFormaContacto: string;
}

const INITIAL_FORM_DATA: FormData = {
  nombreEmpresa: '',
  queVenden: '',
  tiempoOperacion: '',
  ingresosMensuales: '',
  tamanoEquipo: '',
  clientesActuales: '',
  nichoSegmento: '',
  tamanoMercado: '',
  tendenciasActuales: '',
  perfilDemografico: '',
  dondeSeEncuentran: '',
  comoTomaDecisiones: '',
  competidoresTop: '',
  queHacenBien: '',
  queHacenMal: '',
  diferenciacion: '',
  objetivosPlazo: '',
  clientesNuevosObjetivo: '',
  ingresosObjetivo: '',
  otrosObjetivos: '',
  mayorReto: '',
  queImpideCrecimiento: '',
  budgetDisponible: '',
  equipoDisponible: '',
  nombreContacto: '',
  emailContacto: '',
  telefonoContacto: '',
  mejorFormaContacto: '',
};

const TOTAL_SECTIONS = 7;

export default function BriefPage() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successData, setSuccessData] = useState({ company: '', contact: '', email: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/clientes/brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario');
      }

      setSuccessData({
        company: data.company,
        contact: data.contact,
        email: data.email,
      });
      setShowSuccess(true);
      setFormData(INITIAL_FORM_DATA);
      setCurrentSection(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className='hero'>
        <div className='wrap hero-inner' style={{ maxWidth: '780px' }}>
          <span className='eyebrow'>
            <span className='dot'></span> Estrategia personalizada para tu PyME
          </span>
          <h1 className='hero-title'>Tu Brief <em>Estratégico</em></h1>
          <p className='hero-sub'>
            Responde 28 preguntas sobre tu negocio, mercado y objetivos. Nosotros generaremos 7 documentos estratégicos personalizados que te mostrarán exactamente por dónde empezar.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ paddingTop: '110px', paddingBottom: '110px', backgroundColor: '#fff' }}>
        <div className='wrap' style={{ maxWidth: '1120px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div className='label'>Completa el formulario</div>
            <h2 style={{
              fontSize: 'clamp(30px, 3.6vw, 42px)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              fontWeight: 700,
              margin: '0 0 16px',
              maxWidth: '620px',
              color: 'var(--ink)'
            }}>
              Generemos tu estrategia
            </h2>
          </div>
        </div>

        <div className='wrap' style={{ maxWidth: '900px' }}>
          {/* Error Alert */}
          {error && (
            <div style={{
              marginBottom: '32px',
              padding: '16px',
              backgroundColor: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '14px'
            }}>
              <p style={{ color: '#ef4444', margin: 0 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-12'>
            {/* Sección 1: Sobre el Negocio */}
            {currentSection === 1 && (
              <FormSection
                title='Sobre el Negocio'
                number={1}
                totalSections={TOTAL_SECTIONS}
                description='Información general sobre tu empresa'
              >
                <FormField
                  label='Nombre de la Empresa'
                  name='nombreEmpresa'
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  placeholder='Ej: Mi Agencia Digital'
                  required
                />
                <FormField
                  label='¿Qué venden? (Producto/Servicio)'
                  name='queVenden'
                  type='textarea'
                  value={formData.queVenden}
                  onChange={handleInputChange}
                  placeholder='Describe los productos o servicios que ofreces...'
                  required
                />
                <FormField
                  label='Años en Operación'
                  name='tiempoOperacion'
                  type='number'
                  value={formData.tiempoOperacion}
                  onChange={handleInputChange}
                  placeholder='Ej: 3'
                  required
                />
                <FormField
                  label='Ingresos Mensuales Aproximados'
                  name='ingresosMensuales'
                  value={formData.ingresosMensuales}
                  onChange={handleInputChange}
                  placeholder='Ej: $5,000 - $10,000'
                  required
                />
                <FormField
                  label='Tamaño del Equipo'
                  name='tamanoEquipo'
                  type='number'
                  value={formData.tamanoEquipo}
                  onChange={handleInputChange}
                  placeholder='Cantidad de personas'
                  required
                />
                <FormField
                  label='Clientes Actuales'
                  name='clientesActuales'
                  type='number'
                  value={formData.clientesActuales}
                  onChange={handleInputChange}
                  placeholder='Aproximadamente...'
                  required
                />
              </FormSection>
            )}

            {/* Sección 2: Sobre el Mercado */}
            {currentSection === 2 && (
              <FormSection
                title='Sobre el Mercado'
                number={2}
                totalSections={TOTAL_SECTIONS}
                description='Información del mercado y tendencias'
              >
                <FormField
                  label='Nicho o Segmento Específico'
                  name='nichoSegmento'
                  type='textarea'
                  value={formData.nichoSegmento}
                  onChange={handleInputChange}
                  placeholder='Describe tu nicho de mercado...'
                  required
                />
                <FormField
                  label='Tamaño del Mercado'
                  name='tamanoMercado'
                  type='textarea'
                  value={formData.tamanoMercado}
                  onChange={handleInputChange}
                  placeholder='Estimación del mercado potencial...'
                  required
                />
                <FormField
                  label='Tendencias Actuales en la Industria'
                  name='tendenciasActuales'
                  type='textarea'
                  value={formData.tendenciasActuales}
                  onChange={handleInputChange}
                  placeholder='¿Qué tendencias ves en tu industria?'
                  required
                />
              </FormSection>
            )}

            {/* Sección 3: Sobre el Cliente Ideal */}
            {currentSection === 3 && (
              <FormSection
                title='Sobre el Cliente Ideal'
                number={3}
                totalSections={TOTAL_SECTIONS}
                description='Perfil de tu cliente perfecto'
              >
                <FormField
                  label='Perfil Demográfico'
                  name='perfilDemografico'
                  type='textarea'
                  value={formData.perfilDemografico}
                  onChange={handleInputChange}
                  placeholder='Edad, género, ubicación, ingresos, educación...'
                  required
                />
                <FormField
                  label='¿Dónde se Encuentran?'
                  name='dondeSeEncuentran'
                  type='textarea'
                  value={formData.dondeSeEncuentran}
                  onChange={handleInputChange}
                  placeholder='Online/offline, qué plataformas, comunidades...'
                  required
                />
                <FormField
                  label='¿Cómo Toman Decisiones de Compra?'
                  name='comoTomaDecisiones'
                  type='textarea'
                  value={formData.comoTomaDecisiones}
                  onChange={handleInputChange}
                  placeholder='Proceso de decisión, criterios, influencias...'
                  required
                />
              </FormSection>
            )}

            {/* Sección 4: Sobre la Competencia */}
            {currentSection === 4 && (
              <FormSection
                title='Sobre la Competencia'
                number={4}
                totalSections={TOTAL_SECTIONS}
                description='Análisis competitivo'
              >
                <FormField
                  label='Competidores Principales (3-5)'
                  name='competidoresTop'
                  type='textarea'
                  value={formData.competidoresTop}
                  onChange={handleInputChange}
                  placeholder='Lista los nombres de tus competidores principales...'
                  required
                />
                <FormField
                  label='¿Qué Hacen Bien?'
                  name='queHacenBien'
                  type='textarea'
                  value={formData.queHacenBien}
                  onChange={handleInputChange}
                  placeholder='Fortalezas de la competencia...'
                  required
                />
                <FormField
                  label='¿Qué Hacen Mal?'
                  name='queHacenMal'
                  type='textarea'
                  value={formData.queHacenMal}
                  onChange={handleInputChange}
                  placeholder='Debilidades de la competencia...'
                  required
                />
                <FormField
                  label='¿Cómo Te Diferencias?'
                  name='diferenciacion'
                  type='textarea'
                  value={formData.diferenciacion}
                  onChange={handleInputChange}
                  placeholder='Tu propuesta única de valor...'
                  required
                />
              </FormSection>
            )}

            {/* Sección 5: Sobre Objetivos */}
            {currentSection === 5 && (
              <FormSection
                title='Sobre Objetivos'
                number={5}
                totalSections={TOTAL_SECTIONS}
                description='Define tus metas y KPIs'
              >
                <FormField
                  label='Plazo de Objetivos'
                  name='objetivosPlazo'
                  type='select'
                  value={formData.objetivosPlazo}
                  onChange={handleInputChange}
                  options={[
                    { value: '6-meses', label: '6 meses' },
                    { value: '1-ano', label: '1 año' },
                    { value: '2-anos', label: '2 años' },
                  ]}
                  required
                />
                <FormField
                  label='Clientes Nuevos a Obtener'
                  name='clientesNuevosObjetivo'
                  type='number'
                  value={formData.clientesNuevosObjetivo}
                  onChange={handleInputChange}
                  placeholder='Cantidad de clientes...'
                  required
                />
                <FormField
                  label='Ingresos Objetivo'
                  name='ingresosObjetivo'
                  value={formData.ingresosObjetivo}
                  onChange={handleInputChange}
                  placeholder='Ej: $50,000 mensuales'
                  required
                />
                <FormField
                  label='Otros Objetivos o KPIs'
                  name='otrosObjetivos'
                  type='textarea'
                  value={formData.otrosObjetivos}
                  onChange={handleInputChange}
                  placeholder='Otros indicadores clave a alcanzar...'
                  required
                />
              </FormSection>
            )}

            {/* Sección 6: Sobre los Dolores */}
            {currentSection === 6 && (
              <FormSection
                title='Sobre los Dolores y Retos'
                number={6}
                totalSections={TOTAL_SECTIONS}
                description='Desafíos y limitaciones actuales'
              >
                <FormField
                  label='Mayor Reto Actual'
                  name='mayorReto'
                  type='textarea'
                  value={formData.mayorReto}
                  onChange={handleInputChange}
                  placeholder='¿Cuál es tu principal desafío ahora?'
                  required
                />
                <FormField
                  label='¿Qué te Impide Crecer?'
                  name='queImpideCrecimiento'
                  type='textarea'
                  value={formData.queImpideCrecimiento}
                  onChange={handleInputChange}
                  placeholder='Obstáculos específicos para el crecimiento...'
                  required
                />
                <FormField
                  label='Budget Disponible'
                  name='budgetDisponible'
                  value={formData.budgetDisponible}
                  onChange={handleInputChange}
                  placeholder='Ej: $2,000 - $5,000 mensuales'
                  required
                />
                <FormField
                  label='Equipo Disponible para Ejecutar'
                  name='equipoDisponible'
                  type='textarea'
                  value={formData.equipoDisponible}
                  onChange={handleInputChange}
                  placeholder='Recursos humanos disponibles...'
                  required
                />
              </FormSection>
            )}

            {/* Sección 7: Contacto */}
            {currentSection === 7 && (
              <FormSection
                title='Información de Contacto'
                number={7}
                totalSections={TOTAL_SECTIONS}
                description='Cómo nos contactaremos contigo'
              >
                <FormField
                  label='Nombre de Contacto'
                  name='nombreContacto'
                  value={formData.nombreContacto}
                  onChange={handleInputChange}
                  placeholder='Tu nombre completo'
                  required
                />
                <FormField
                  label='Email'
                  name='emailContacto'
                  type='email'
                  value={formData.emailContacto}
                  onChange={handleInputChange}
                  placeholder='tu@email.com'
                  required
                />
                <FormField
                  label='Teléfono'
                  name='telefonoContacto'
                  type='tel'
                  value={formData.telefonoContacto}
                  onChange={handleInputChange}
                  placeholder='+1 (555) 000-0000'
                  required
                />
                <FormField
                  label='Mejor Forma de Contacto'
                  name='mejorFormaContacto'
                  type='select'
                  value={formData.mejorFormaContacto}
                  onChange={handleInputChange}
                  options={[
                    { value: 'whatsapp', label: 'WhatsApp' },
                    { value: 'email', label: 'Email' },
                    { value: 'telefono', label: 'Teléfono' },
                  ]}
                  required
                />
              </FormSection>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: '12px', paddingTop: '32px', marginTop: '48px' }}>
              <button
                type='button'
                onClick={handlePrev}
                disabled={currentSection === 1}
                style={{
                  flex: 1,
                  padding: '13px 22px',
                  backgroundColor: 'rgba(45,108,255,0.08)',
                  border: '1px solid var(--line)',
                  color: 'var(--ink)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: currentSection === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentSection === 1 ? 0.5 : 1,
                  transition: 'background 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease',
                }}
                onMouseEnter={(e) => !currentSection === 1 && (e.currentTarget.style.backgroundColor = 'rgba(45,108,255,0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(45,108,255,0.08)')}
                onMouseDown={(e) => currentSection !== 1 && (e.currentTarget.style.transform = 'translateY(1px)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                ← Anterior
              </button>

              {currentSection < TOTAL_SECTIONS ? (
                <button
                  type='button'
                  onClick={handleNext}
                  style={{
                    flex: 1,
                    padding: '13px 22px',
                    backgroundColor: 'var(--brand)',
                    color: '#fff',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 0,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(45,108,255,0.35)',
                    transition: 'background 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand)')}
                  onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
                  onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  type='submit'
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: '13px 22px',
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 0,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 6px 18px rgba(34,197,94,0.35)',
                    opacity: isLoading ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background 0.15s ease, box-shadow 0.15s ease, transform 0.08s ease',
                  }}
                  onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = 'var(--accent-ink)')}
                  onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = 'var(--accent)')}
                  onMouseDown={(e) => !isLoading && (e.currentTarget.style.transform = 'translateY(1px)')}
                  onMouseUp={(e) => !isLoading && (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {isLoading ? (
                    <>
                      <span style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '16px',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Brief'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        companName={successData.company}
        contactName={successData.contact}
        email={successData.email}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}

'use client';

import { useState } from 'react';
import FormField from '@/app/components/FormField';
import FormSection from '@/app/components/FormSection';
import SuccessModal from '@/app/components/SuccessModal';
import FormStepper from '@/app/components/FormStepper';

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

const FORM_STEPS = [
  { number: 1, label: 'Negocio' },
  { number: 2, label: 'Mercado' },
  { number: 3, label: 'Cliente' },
  { number: 4, label: 'Competencia' },
  { number: 5, label: 'Objetivos' },
  { number: 6, label: 'Dolores' },
  { number: 7, label: 'Contacto' },
];

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
      {/* Hero Section */}
      <section className='relative py-20 sm:py-24 bg-gradient-to-b from-[#0b1530] to-[#1a2847] overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-[#2d6cff]/5 rounded-full blur-3xl'></div>
          <div className='absolute -bottom-20 -left-40 w-80 h-80 bg-[#2d6cff]/5 rounded-full blur-3xl'></div>
        </div>

        <div className='relative max-w-4xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#2d6cff]/10 border border-[#2d6cff]/30 rounded-full'>
            <span className='inline-block w-2 h-2 bg-[#2d6cff] rounded-full'></span>
            <span className='text-sm font-semibold text-[#2d6cff]'>Estrategia personalizada para tu PyME</span>
          </div>

          <h1 className='text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight'>
            Tu Brief <em className='not-italic text-[#2d6cff]'>Estratégico</em>
          </h1>

          <p className='text-lg sm:text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed'>
            Responde 28 preguntas sobre tu negocio, mercado y objetivos. Nosotros generaremos 7 documentos estratégicos personalizados que te mostrarán exactamente por dónde empezar.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className='relative py-20 sm:py-28 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Form Header */}
          <div className='mb-16 sm:mb-20'>
            <p className='text-xs sm:text-sm font-bold text-[#2d6cff] uppercase tracking-widest mb-3'>Completa el formulario</p>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#0b1530] mb-4'>
              Generemos tu estrategia
            </h2>
            <p className='text-lg text-[#5b6678] max-w-2xl'>
              Tómate tu tiempo para responder con precisión. Mientras más información detallada proporciones, mejor será tu estrategia.
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className='mb-8 p-4 bg-red-50/50 border border-red-200 rounded-[12px] backdrop-blur-sm'>
              <p className='text-red-700 font-medium flex items-center gap-2'>
                <svg className='w-5 h-5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                </svg>
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
            {/* Form Stepper - Sidebar */}
            <aside className='w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-fit'>
              <FormStepper currentStep={currentSection} totalSteps={TOTAL_SECTIONS} steps={FORM_STEPS} />
            </aside>

            {/* Form Content - Main */}
            <main className='w-full lg:flex-1 space-y-16 sm:space-y-20'>

            {/* Sección 1: Sobre el Negocio */}
            {currentSection === 1 && (
              <FormSection
                title='Sobre el Negocio'
                number={1}
                totalSections={TOTAL_SECTIONS}
                description='Información general sobre tu empresa y operación'
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
                description='Información del mercado, tendencias y posicionamiento'
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
                description='Perfil demográfico y psicográfico de tu cliente perfecto'
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
                description='Análisis competitivo: fortalezas, debilidades y diferenciación'
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
                description='Define tus metas, KPIs y objetivos de crecimiento'
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
                description='Desafíos, limitaciones y recursos disponibles'
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
                description='Cómo nos contactaremos contigo para enviar tu brief'
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
              <div className='flex flex-col sm:flex-row gap-3 pt-8 mt-12 border-t-2 border-[#e4e9f1]'>
                <button
                  type='button'
                  onClick={handlePrev}
                  disabled={currentSection === 1}
                  className={`flex-1 px-6 py-3.5 font-semibold rounded-[12px] transition-all duration-200 flex items-center justify-center gap-2 ${
                    currentSection === 1
                      ? 'bg-[#f0f4f9] text-[#94a3b8] cursor-not-allowed border-2 border-[#e4e9f1]'
                      : 'bg-white border-2 border-[#e4e9f1] text-[#0b1530] hover:border-[#2d6cff] hover:bg-[#f8fafc] active:scale-95'
                  }`}
                >
                  <span>←</span> Anterior
                </button>

                {currentSection < TOTAL_SECTIONS ? (
                  <button
                    type='button'
                    onClick={handleNext}
                    className='flex-1 px-6 py-3.5 font-semibold rounded-[12px] bg-gradient-to-r from-[#2d6cff] to-[#1f4fd1] text-white transition-all duration-200 hover:shadow-lg hover:from-[#2460e8] hover:to-[#1840bb] active:scale-95 flex items-center justify-center gap-2'
                  >
                    Siguiente <span>→</span>
                  </button>
                ) : (
                  <button
                    type='submit'
                    disabled={isLoading}
                    className={`flex-1 px-6 py-3.5 font-semibold rounded-[12px] transition-all duration-200 flex items-center justify-center gap-2 ${
                      isLoading
                        ? 'bg-[#22c55e]/50 text-white cursor-not-allowed opacity-60'
                        : 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white hover:shadow-lg hover:from-[#20b854] hover:to-[#15933d] active:scale-95'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className='w-5 h-5 animate-spin' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span>✓</span> Enviar Brief
                      </>
                    )}
                  </button>
                )}
              </div>
            </main>
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

'use client';

interface Step {
  number: number;
  label: string;
}

interface FormStepperProps {
  currentStep: number;
  totalSteps: number;
  steps: Step[];
}

const defaultSteps: Step[] = [
  { number: 1, label: 'Negocio' },
  { number: 2, label: 'Mercado' },
  { number: 3, label: 'Cliente' },
  { number: 4, label: 'Competencia' },
  { number: 5, label: 'Objetivos' },
  { number: 6, label: 'Dolores' },
  { number: 7, label: 'Contacto' },
];

export default function FormStepper({
  currentStep,
  totalSteps,
  steps = defaultSteps,
}: FormStepperProps) {
  const currentStepLabel = steps.find((s) => s.number === currentStep)?.label || '';

  return (
    <>
      {/* Desktop: Vertical Stepper */}
      <div className="hidden md:block w-64">
        <ol className="list-none m-0 p-0">
          {steps.map((step, idx) => {
            const isDone = currentStep > step.number;
            const isActive = currentStep === step.number;
            const isPending = currentStep < step.number;

            return (
              <li key={step.number} className="flex">
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <span
                    className={`
                      flex items-center justify-center w-7 h-7 rounded-full
                      border-2 box-border transition-all duration-200
                      ${
                        isPending
                          ? 'border-line bg-white'
                          : isDone
                            ? 'border-brand bg-white text-brand'
                            : 'border-brand bg-brand text-white'
                      }
                    `}
                    style={
                      isActive
                        ? {
                            boxShadow: '0 0 0 4px rgba(45,108,255,0.18)',
                          }
                        : undefined
                    }
                  >
                    {isDone ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="7 12.5 10.5 16 17 9" />
                      </svg>
                    ) : isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                    ) : null}
                  </span>

                  {/* Connector (except last) */}
                  {idx < steps.length - 1 && (
                    <span
                      className="w-0.5 flex-1 min-h-[18px]"
                      style={{
                        margin: '4px 0',
                        background: isDone
                          ? '#2d6cff'
                          : 'repeating-linear-gradient(to bottom, #c9d3e5 0 4px, transparent 4px 8px)',
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <div className="pl-3.5 flex items-center">
                  <span
                    className={`
                      text-15 leading-4
                      ${
                        isPending
                          ? 'text-muted font-normal'
                          : 'text-ink font-semibold'
                      }
                    `}
                    style={{
                      paddingTop: '11px',
                      paddingBottom: idx < steps.length - 1 ? '26px' : '0',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: Horizontal Compact Stepper */}
      <div className="md:hidden mb-6">
        <div className="max-w-sm">
          <ol
            className="list-none m-0 p-0 flex items-center"
          >
            {steps.map((step, idx) => {
              const isDone = currentStep > step.number;
              const isActive = currentStep === step.number;

              return (
                <li
                  key={step.number}
                  className="flex items-center"
                  style={idx < steps.length - 1 ? { flex: '1 1 0' } : undefined}
                >
                  {/* Circle */}
                  <span
                    className={`
                      flex items-center justify-center w-6 h-6 rounded-full
                      border-2 flex-shrink-0 transition-all duration-200
                      ${
                        isDone
                          ? 'border-brand bg-white text-brand'
                          : isActive
                            ? 'border-brand bg-brand text-white'
                            : 'border-line bg-white'
                      }
                    `}
                    style={
                      isActive
                        ? {
                            boxShadow: '0 0 0 4px rgba(45,108,255,0.18)',
                          }
                        : undefined
                    }
                  >
                    {isDone ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <polyline points="7 12.5 10.5 16 17 9" />
                      </svg>
                    ) : isActive ? (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    ) : null}
                  </span>

                  {/* Connector (except last) */}
                  {idx < steps.length - 1 && (
                    <span
                      className="flex-1 min-w-3.5"
                      style={{
                        height: '1.5px',
                        margin: '0 6px',
                        background: isDone
                          ? '#2d6cff'
                          : 'repeating-linear-gradient(to right, #c9d3e5 0 4px, transparent 4px 8px)',
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ol>

          {/* Current Step Label */}
          <div className="mt-3.5 text-15 font-semibold text-ink">
            {currentStepLabel}
          </div>
        </div>
      </div>
    </>
  );
}

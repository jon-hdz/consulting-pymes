interface FormSectionProps {
  title: string;
  description?: string;
  number: number;
  totalSections: number;
  children: React.ReactNode;
}

export default function FormSection({
  title,
  description,
  number,
  totalSections,
  children,
}: FormSectionProps) {
  return (
    <div className='w-full animate-fade-in'>
      {/* Header */}
      <div className='mb-6'>
        {/* Decoration line */}
        <div className='h-1 w-12 bg-gradient-to-r from-brand to-brand-ink rounded-full mb-6' />

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6'>
          <div className='flex-1'>
            <h2 className='text-3xl sm:text-4xl font-bold text-ink mb-3 leading-heading letter-spacing-h2'>
              {number}. {title}
            </h2>
            {description && (
              <p className='text-muted text-15 leading-normal max-w-2xl'>
                {description}
              </p>
            )}
          </div>
          <span className='inline-flex text-12 font-semibold text-brand bg-chip px-4 py-2 rounded-pill whitespace-nowrap border border-brand/10'>
            {number} de {totalSections}
          </span>
        </div>
      </div>

      {/* Content container */}
      <div className='bg-white rounded-lg transition-all duration-200 px-5 sm:px-6 py-6'>
        <div className='grid grid-cols-1 gap-4'>
          {children}
        </div>
      </div>
    </div>
  );
}

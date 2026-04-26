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
        <div className='h-1 w-12 bg-gradient-to-r from-blue-600 to-slate-950 rounded-full mb-6' />

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6'>
          <div className='flex-1'>
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-950 mb-3 leading-tight'>
              {number}. {title}
            </h2>
            {description && (
              <p className='text-gray-600 text-base leading-normal max-w-2xl'>
                {description}
              </p>
            )}
          </div>
          <span className='inline-flex text-xs font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full whitespace-nowrap border border-blue-200'>
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

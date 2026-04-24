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
  const progressPercentage = (number / totalSections) * 100;

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-8'>
        {/* Decoration line */}
        <div className='h-1 w-12 bg-[#2d6cff] rounded-full mb-4' />

        <div className='flex justify-between items-start mb-4'>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold text-[#0b1530] mb-2'>
              {number}. {title}
            </h2>
            {description && <p className='text-[#5b6678] text-base leading-relaxed'>{description}</p>}
          </div>
          <span className='text-sm font-medium text-[#2d6cff] bg-[#eef3ff] px-3 py-1 rounded-full whitespace-nowrap ml-4'>
            {number} de {totalSections}
          </span>
        </div>

        {/* Enhanced progress bar */}
        <div className='mt-6'>
          <div className='h-3 bg-[#f0f4f9] rounded-full overflow-hidden shadow-sm'>
            <div
              className='h-full bg-gradient-to-r from-[#2d6cff] to-[#1f4fd1] transition-all duration-500 rounded-full'
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='bg-white p-8 rounded-[18px] border border-[#e4e9f1] shadow-sm hover:shadow-md transition-shadow duration-200'>
        {children}
      </div>
    </div>
  );
}

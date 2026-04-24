interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  minLength?: number;
  rows?: number;
  options?: { value: string; label: string }[];
}

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  minLength,
  rows = 4,
  options,
}: FormFieldProps) {
  const baseInputClasses =
    'w-full px-4 py-3 rounded-[14px] border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2d6cff] focus:ring-offset-0 focus:shadow-lg';
  const inputClasses = error
    ? `${baseInputClasses} border-red-500 bg-red-50 shadow-sm hover:shadow-md`
    : `${baseInputClasses} border-[#e4e9f1] bg-white shadow-sm hover:border-[#d0d8e4] hover:shadow-md`;

  return (
    <div className='mb-6'>
      <label htmlFor={name} className='block mb-2 font-semibold text-sm text-[#0b1530]'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          rows={rows}
          className={inputClasses}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
        >
          <option value=''>Selecciona una opción...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          className={inputClasses}
          required={required}
        />
      )}

      {error && (
        <p className='mt-2 text-sm font-medium text-red-600 flex items-center gap-1'>
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M18.001 13.001a1 1 0 00-1.414-1.414l-1.293 1.293V9.5a1 1 0 10-2 0v3.293l-1.293-1.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4zM2 9.5a1 1 0 012 0v3.293l1.293-1.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414l1.293 1.293V9.5z' clipRule='evenodd' />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

interface SuccessModalProps {
  isOpen: boolean;
  companName: string;
  contactName: string;
  email: string;
  onClose: () => void;
}

export default function SuccessModal({
  isOpen,
  companName,
  contactName,
  email,
  onClose,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in'>
      <div className='bg-white rounded-[18px] max-w-md w-full p-8 shadow-2xl animate-fade-in'>
        {/* Success icon with animation */}
        <div className='flex justify-center mb-8'>
          <div
            className='w-20 h-20 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center shadow-lg animate-scale-in'
            style={{
              animation: 'scaleIn 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <svg className='w-10 h-10 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className='text-center mb-8'>
          <h3 className='text-3xl font-bold text-[#0b1530] mb-3'>¡Brief Creado!</h3>
          <p className='text-[#5b6678] mb-8 leading-relaxed text-base'>
            Tu estrategia personalizada ha sido generada exitosamente.
          </p>

          <div className='bg-gradient-to-br from-[#f8fafc] to-[#f0f4f9] rounded-[14px] p-6 text-left space-y-4 border border-[#e4e9f1]'>
            <div className='pb-3 border-b border-[#e4e9f1] last:border-b-0 last:pb-0'>
              <p className='text-xs font-semibold text-[#2d6cff] uppercase tracking-wide mb-1'>Empresa</p>
              <p className='font-semibold text-[#0b1530] text-base'>{companName}</p>
            </div>
            <div className='pb-3 border-b border-[#e4e9f1] last:border-b-0 last:pb-0'>
              <p className='text-xs font-semibold text-[#2d6cff] uppercase tracking-wide mb-1'>Contacto</p>
              <p className='font-semibold text-[#0b1530] text-base'>{contactName}</p>
            </div>
            <div>
              <p className='text-xs font-semibold text-[#2d6cff] uppercase tracking-wide mb-1'>Email</p>
              <p className='font-semibold text-[#0b1530] text-base'>{email}</p>
            </div>
          </div>
        </div>

        {/* Info box */}
        <div className='bg-gradient-to-r from-blue-50 to-blue-100/50 border border-[#2d6cff]/20 rounded-[14px] p-4 mb-8'>
          <div className='flex gap-3'>
            <svg className='w-5 h-5 text-[#2d6cff] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z' clipRule='evenodd' />
            </svg>
            <p className='text-sm text-[#0b1530] leading-relaxed m-0'>
              Hemos creado una carpeta en Google Drive con 7 documentos estratégicos personalizados para tu negocio.
              Pronto te enviaremos el enlace de acceso.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className='w-full bg-gradient-to-r from-[#2d6cff] to-[#1f4fd1] text-white py-3 rounded-[14px] font-semibold hover:shadow-lg transition-all duration-200 active:scale-95'
        >
          Entendido
        </button>
      </div>
    </div>
  );
}

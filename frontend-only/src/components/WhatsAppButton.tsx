import { Phone } from 'lucide-react';

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
};

export default function WhatsAppButton({
  phoneNumber = '971553556787',
  message = 'Hello, I would like to inquire about your cybersecurity services.',
  position = 'bottom-right',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses[position]} z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300`}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-6 h-6 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.845 1.43l.8 3.16a3 3 0 01-.52 2.62l-.333.397a3 3 0 01-2.333 1.11l-.037.004A7.964 7.964 0 011 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8a7.964 7.964 0 01-1.493.144l-.037-.004a3 3 0 01-2.333-1.11l-.333-.397a3 3 0 01-.52-2.62l.8-3.16A2 2 0 019.372 1.5H12.5a3 3 0 013 3V4.5h3a3 3 0 013 3v3.75a3 3 0 01-3 3h-3V15a3 3 0 01-3 3h-6a3 3 0 01-3-3v-3.75a3 3 0 013-3h3V4.5H4.5a3 3 0 01-3 3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
}

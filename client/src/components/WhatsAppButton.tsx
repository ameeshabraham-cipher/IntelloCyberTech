import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+971553556787';
  const message = 'Hello, I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      title="Message on WhatsApp"
    >
      <div className="flex items-center">
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2 font-medium hidden md:inline">Chat with us</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
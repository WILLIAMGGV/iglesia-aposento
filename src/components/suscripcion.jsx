import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react';

const Suscripcion = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative h-auto min-h-[28rem] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 mb-12">
      {/* Fondo con imagen y gradiente */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920"
          alt="Newsletter background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffa302]/90 to-blue-900/90" />
      </div>

      {/* Contenido */}
      <div className="relative w-full max-w-2xl text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Mantente informado de nuestros eventos
        </h2>
        <p className="text-base sm:text-lg text-gray-200 mb-8">
          Suscríbete a nuestro boletín para recibir las últimas noticias de nuestros eventos.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="w-full sm:max-w-md px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#ffa302] focus:ring-2 focus:ring-[#ffa302] focus:outline-none transition-colors duration-200"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#ffa302] text-white font-medium hover:bg-[#121212] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa302] transition-colors duration-200"
          >
            {isSubscribed ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                ¡Suscrito!
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Suscribirse
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suscripcion;

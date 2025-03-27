import React, {useState} from 'react'
import {  Send, CheckCircle } from 'lucide-react';

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
    <>

      <div className="relative h-96 flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920"
            alt="Newsletter background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffa302]/90 to-blue-900/90" />
        </div>
        
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mantente informado de nuestros eventos
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Suscríbete a nuestro boletín para recibir las últimas actualizaciones y ofertas especiales.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="px-4 py-3 rounded-lg flex-1 max-w-md border-2 border-transparent focus:border-[#ffa302] focus:ring-2 focus:ring-[#ffa302] focus:outline-none transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#ffa302] text-white font-medium hover:bg-[#121212] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
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
    </>
  )
}

export default Suscripcion

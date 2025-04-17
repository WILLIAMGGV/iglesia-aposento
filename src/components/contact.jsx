import React, {useState} from 'react'
import { Calendar, Clock, MapPin, Send, CheckCircle, Mail, Phone, User, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [contactForm, setContactForm] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      if (email) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      }
    };
  
    const handleContactSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setContactForm(prev => ({
        ...prev,
        [name]: value
      }));
    };
  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bga-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contáctanos</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125513.38899875447!2d-71.7770441509008!3d10.556197596656304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8993babb1ac001%3A0x7fa2acf55507dbd9!2sSan%20Francisco%2C%204004%2C%20Zulia!5e0!3m2!1sen!2sve!4v1744911477254!5m2!1sen!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Iglesia"
                className="w-full h-full"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="0412-6515046"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Escribe tu petición o motivos de contacto..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      ¡Mensaje enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>San Francisco, Maracaibo, Venezuela</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>+58-4126515046</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>aposentoalto@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Contact

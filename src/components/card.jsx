import React from 'react'

const Card = () => {
  return (
    <div className="min-h-screen flex  justify-center">
      <div className="flex flex-col items-center max-w-md p-8  rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-gray-300">
          Aniversario #40
        </h2>
        <p align="justify" className="text-gray-600 text-lg">
        Asi fue nuestro Aniversario 36 Caminando en Fe, lleno de gloria, de milagros, de presencia...Gracias a todos los hijos de la casa que se sembraron de corazón para que esto fuera posible.
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          onClick={() => console.log('Button clicked')}
        >
          Ver mas
        </button>
      </div>
    </div>
  )
}

export default Card

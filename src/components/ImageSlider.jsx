import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg2.jpg?alt=media&token=a19a8985-b53d-41b6-ade1-6470e94b513f",
    title: "Imagen 1",
    description: "Esta es una descripción extendida de la imagen 1.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg3.jpg?alt=media&token=5dcc2956-ea6c-4887-8d91-4ebe0a286118",
    title: "Imagen 2",
    description: "Esta es una descripción extendida de la imagen 2.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg4.jpg?alt=media&token=72b23330-5258-4c0b-9b4c-e9661981ac7d",
    title: "Imagen 3",
    description: "Esta es una descripción extendida de la imagen 3.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg1.jpg?alt=media&token=522ba86e-9418-4e99-aa2a-0ba275a96423",
    title: "Imagen 4",
    description: "Esta es una descripción extendida de la imagen 4.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg1.jpg?alt=media&token=522ba86e-9418-4e99-aa2a-0ba275a96423",
    title: "Imagen 5",
    description: "Esta es una descripción extendida de la imagen 5.",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300); // tiempo para el fade-out
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = images[currentIndex];

  return (
    <div className="bg-gray-900  py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">{current.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{current.description}</p>
          </div>

          {/* Slider con transición */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-96">
            <img
              key={current.url} // fuerza re-render para aplicar transición
              src={current.url}
              alt={current.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

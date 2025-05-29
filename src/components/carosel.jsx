import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carosel = () => {
  const images = [
    {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg1.jpg?alt=media&token=522ba86e-9418-4e99-aa2a-0ba275a96423",
      title: "Nuestra Sede",
    },
    {
      id: 2,
      url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg2.jpg?alt=media&token=a19a8985-b53d-41b6-ade1-6470e94b513f",
      title: "Aniversario",
    },
    {
      id: 3,
      url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg3.jpg?alt=media&token=5dcc2956-ea6c-4887-8d91-4ebe0a286118",
      title: "Ministerio",
    },
    {
      id: 4,
      url: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Faniversario%2Fimg4.jpg?alt=media&token=72b23330-5258-4c0b-9b4c-e9661981ac7d",
      title: "Adoracion",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="w-full max-w-4xl space-y-4 flex flex-col sm:space-y-6">
        
        {/* Texto del slide */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-lg sm:text-2xl font-semibold">
            {images[selectedImage].title}
          </h2>
        </div>

        {/* Imagen principal con botones */}
        <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden group">
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="w-full h-full object-cover"
          />

          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 sm:p-3 rounded-full text-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 sm:p-3 rounded-full text-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
                selectedImage === index
                  ? "ring-2 ring-blue-500"
                  : "ring-1 ring-gray-700"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className={`w-full h-full object-cover transition-opacity duration-200 ${
                  selectedImage === index
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carosel;

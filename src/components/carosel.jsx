import React, {useState} from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Carosel = () => {

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1682687220742-aba19b51f36e",
      title: "Montañas al atardecer"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1682687221038-404670bd5121",
      title: "Lago cristalino"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1682687220015-4c96261ddd23",
      title: "Bosque verde"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      title: "Playa tropical"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };
   
  return (
    <>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 m-4">
      <div className="max-w-4xl w-full space-y-4">
        {/* Main Image Display */}
        <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden group">
          <img
            src={`${images[selectedImage].url}?auto=format&fit=crop&w=1600&h=900`}
            alt={images[selectedImage].title}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="text-white text-lg font-semibold">
              {images[selectedImage].title}
            </h2>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
                selectedImage === index
                  ? 'ring-2 ring-blue-500'
                  : 'ring-1 ring-gray-700'
              }`}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=400&h=225`}
                alt={image.title}
                className={`w-full h-full object-cover transition-opacity duration-200 ${
                  selectedImage === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Carosel


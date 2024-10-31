import React, { useState } from 'react';
import Image from 'next/image';

const Gallery2 = () => {
  const images = [
    { original: '/missions/missions-01.png', thumbnail: '/missions/missions-01.png' },
    { original: '/missions/missions-02.png', thumbnail: '/missions/missions-02.png' },
    { original: '/missions/missions-03.png', thumbnail: '/missions/missions-03.png' },
    { original: '/missions/missions-04.png', thumbnail: '/missions/missions-04.png' },
    { original: '/missions/missions-05.png', thumbnail: '/missions/missions-05.png' },
    { original: '/missions/coming-soon.png', thumbnail: '/missions/coming-soon.png' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].original);

  return (
    <div className='relative flex flex-col pt-[18px]'>
      {/* Otros elementos como el título y la imagen grande... */}
      
      {/* Imagen grande principal */}
      <div className="mb-4 hidden lg:block xl:hidden">
        <Image
          src={selectedImage}
          alt="Imagen grande"
          width={766}
          height={352}
          className="drop-shadow-lg"
        />
      </div>
      <div className="mb-4 hidden xl:block">
        <Image
          src={selectedImage}
          alt="Imagen grande"
          width={1203}
          height={553}
          className="drop-shadow-lg"
        />
      </div>

      {/* Galería de miniaturas debajo de la imagen grande */}
      <div className="flex flex-col gap-4 z-10">
        <div className="thumbnail-scroll overflow-y-auto lg:overflow-x-auto lg:overflow-y-hidden lg:max-w-full lg:w-[790px] xl:w-[1350px] lg:h-[155px]">
          <div className="flex flex-col lg:flex-row gap-[10px]">
            {images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image.original)} className="flex-shrink-0">
                <Image
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  width={283}
                  height={150}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .thumbnail-scroll {
          display: flex;
          flex-direction: column;
          cursor: pointer; /* Añadimos la manito */
        }
        @media (min-width: 1024px) {
          .thumbnail-scroll {
            flex-direction: row;
          }
        }
        .thumbnail-scroll::-webkit-scrollbar {
          width: 12px;
          height: 8px;
        }
        .thumbnail-scroll::-webkit-scrollbar-track {
          background: #888;
          border-radius: 10px;
        }
        .thumbnail-scroll::-webkit-scrollbar-thumb {
          background-color: #f1f1f1;
          border-radius: 10px;
        }
        .thumbnail-scroll::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Gallery2;

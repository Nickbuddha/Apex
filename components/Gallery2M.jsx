import React, { useState } from 'react';
import Image from 'next/image';

const Gallery2M = () => {
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
      

      {/* Imagen grande principal */}
      <div>
        <Image
          src={selectedImage}
          alt="Imagen grande"
          width={1203}
          height={553}
          className="drop-shadow-lg"
        />
      </div>

      {/* Galería de miniaturas debajo de la imagen grande */}
      <div className="flex flex-col lg:flex-row gap-4 mt-4 z-10 w-[170px] md:w-[309px]">
        <div className="thumbnail-scroll overflow-y-auto lg:overflow-x-auto lg:max-w-full ">
          <div className="flex flex-col max-h-[358px] lg:max-h-[150px] lg:flex-row gap-[10px] lg:gap-[10px] ml-[-136px] md:ml-0">
            {images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image.original)} className="flex-shrink-0">
                <Image
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  width={283}
                  height={150}
                  className="hover:scale-105 transition-transform duration-300 block"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .thumbnail-scroll {
          display: flex;
          flex-direction: column; /* Default to row for mobile */
        }
        @media (min-width: 1024px) {
          /* Estilos de escritorio */
          .thumbnail-scroll {
            flex-direction: row;
            overflow-y: auto;
            overflow-x: hidden;
          }
        }
        /* Estilo de barra de desplazamiento */
        .thumbnail-scroll::-webkit-scrollbar {
          width: 12px; /* Ancho de la barra */
          height: 8px; /* Altura de la barra en mobile */
        }
        .thumbnail-scroll::-webkit-scrollbar-track {
          background: #888; /* Color de fondo de la barra */
          border-radius: 10px;
        }
        .thumbnail-scroll::-webkit-scrollbar-thumb {
          background-color: #f1f1f1; /* Color de la barra de desplazamiento */
          border-radius: 10px;
        }
        .thumbnail-scroll::-webkit-scrollbar-thumb:hover {
          background: #555; /* Color de la barra en hover */
          thumbnail-scroll
        }
      `}</style>
    </div>
  );
};

export default Gallery2M;

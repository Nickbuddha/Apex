import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Gallery = () => {
  const images = [
    { original: '/hero/gallery-01.png', thumbnail: '/hero/gallery-01.png' },
    { original: '/hero/gallery-02.png', thumbnail: '/hero/gallery-02.png' },
    { original: '/hero/gallery-03.png', thumbnail: '/hero/gallery-03.png' },
    { original: '/hero/gallery-04.png', thumbnail: '/hero/gallery-04.png' },
    { original: '/hero/gallery-05.png', thumbnail: '/hero/gallery-05.png' },
    { original: '/hero/gallery-06.png', thumbnail: '/hero/gallery-06.png' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].original);

  return (
    <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}}
        className="relative flex flex-col lg:flex-row">
      {/* Imagen grande principal */}
      <div className="relative">
        <Image
          src={selectedImage}
          alt="Imagen grande"
          width={644}
          height={361}
          className="drop-shadow-lg hidden lg:block xl:hidden"
        />
        <Image
          src={selectedImage}
          alt="Imagen grande"
          width={844}
          height={561}
          className="drop-shadow-lg block lg:hidden xl:block"
        />

        {/* Imagen de texto sobre la imagen grande */}
        <div className="absolute bottom-[40px] right-[-40px] transform z-10 hidden lg:block xl:hidden">
          <Image
            src="/hero/text.png"
            width={300}
            height={60}
            alt="text"
            className="max-w-none"
          />
        </div>
        <div className="absolute bottom-[33px] left-1/2 transform z-10 hidden xl:block">
          <Image
            src="/hero/text.png"
            width={496}
            height={95}
            alt="text"
            className="max-w-none"
          />
        </div>
      </div>

      {/* Galería de miniaturas con scroll y barra personalizada */}
      <div className="flex flex-col lg:flex-row gap-4 mt-[12px] lg:mt-0  z-10">
        <div className="thumbnail-scroll lg:overflow-y-auto overflow-x-auto lg:flex-col flex-row gap-4 lg:max-h-[400px] max-w-full lg:max-w-[250px] px-[13px] h-[100px] lg:h-[210px] xl:h-[400px]">
          {images.map((image, index) => (
            <button key={index} onClick={() => setSelectedImage(image.original)}>
              <div className="lg:w-[95px] lg:h-[74px] xl:w-[170px] xl:h-[100px] w-[100px] h-[78px] overflow-hidden">
                <Image
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  width={150}
                  height={117}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .thumbnail-scroll {
          display: flex;
          flex-direction: row; /* Default to row for mobile */
        }
        @media (min-width: 1200px) {
          /* Estilos de escritorio */
          .thumbnail-scroll {
            flex-direction: column;
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
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
};

export default Gallery;

import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Tokenomics = () => {
  return (
    <section className='container pt-[49px] lg:pt-[77px] xl:pt-[188px] flex flex-col gap-[29px]'>
      {/* Título "TOKENOMICS" */}
      <div className="flex flex-col gap-[3px] lg:gap-[19px] lg:pt-[32px] lg:items-start">
        <h2 className='text-white text-[36px] lg:text-[72px] font-bold font-bebas'>TOKENOMICS</h2>
        <hr className='border-t-2 border-white w-full my-6 lg:pb-[48px] xl:pb-[140px]' />

        {/* Contenedor de imagen con posición relativa */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}} 
        className='self-center'>
          <div className="relative pt-[140px] mx-auto w-[357px] h-[153px] block md:hidden">
            {/* Imagen de Tokenomics */}
            <Image
              src="/tokenomics/tokenomics.png"
              alt="Tokenomics"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
  
            {/* Imagen de la aguja con animación de rotación */}
            <div className="absolute top-[31%] left-[44.5%] transform -translate-x-1/2 -translate-y-1/2 h-auto rotate-needle w-[35px]">
              <Image
                src="/tokenomics/agujam.png"
                alt="Aguja"
                layout="responsive"
                width={30} 
                height={30} 
                className="mx-auto"
              />
            </div>
          </div>
          <div className="relative pt-[140px] mx-auto w-[748px] h-[250px] hidden md:block lg:hidden">
            {/* Imagen de Tokenomics */}
            <Image
              src="/tokenomics/tokenomics.png"
              alt="Tokenomics"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
  
            {/* Imagen de la aguja con animación de rotación */}
            <div className="absolute top-[33%] left-[47.6%] transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-auto rotate-needle">
              <Image
                src="/tokenomics/aguja.png"
                alt="Aguja"
                layout="responsive"
                width={120} 
                height={857} 
                className="mx-auto"
              />
            </div>
          </div>
          <div className="relative pt-[140px] mx-auto w-[1048px] h-[451px] hidden lg:block xl:hidden">
            {/* Imagen de Tokenomics */}
            <Image
              src="/tokenomics/tokenomics.png"
              alt="Tokenomics"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
  
            {/* Imagen de la aguja con animación de rotación */}
            <div className="absolute top-[32%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-auto rotate-needle">
              <Image
                src="/tokenomics/aguja.png"
                alt="Aguja"
                layout="responsive"
                width={120} 
                height={857} 
                className="mx-auto"
              />
            </div>
          </div>
          <div className="relative pt-[140px] mx-auto w-[1645px] h-[857px] hidden xl:block">
            {/* Imagen de Tokenomics */}
            <Image
              src="/tokenomics/tokenomics.png"
              alt="Tokenomics"
              layout="fill"
              objectFit="contain"
              className="mx-auto"
            />
  
            {/* Imagen de la aguja con animación de rotación */}
            <div className="absolute top-[32%] left-[44%] transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-auto rotate-needle">
              <Image
                src="/tokenomics/aguja.png"
                alt="Aguja"
                layout="responsive"
                width={180} 
                height={1000} 
                className="mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        /* Animación personalizada para una aceleración al inicio y desaceleración al regreso */
        @keyframes rotateNeedle {
          0% {
            transform: rotate(-20deg);
          }
          30% {
            transform: rotate(210deg);
          }
          100% {
            transform: rotate(-20deg);
          }
        }

        /* Ajuste de la animación para hacerla más rápida al inicio y más lenta al regresar */
        .rotate-needle {
          animation: rotateNeedle 3s cubic-bezier(0.7, 0.2, 0.1, 1) infinite;
          transform-origin: 63% 28.5%; /* Eje de rotación ajustado */
        }
      `}</style>

      
      <Image
        src="/tokenomics/logos-binance.png"
        alt="Aguja"
        layout="responsive"
        width={343} 
        height={13} 
        className="mx-auto pt-[37px] lg:hidden"
      />
    </section>
  );
};

export default Tokenomics;

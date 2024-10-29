import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const Become = () => {
  return (
    <div className='flex flex-col bg-top bg-no-repeat bg-cover pt-[60px] lg:pt-[10px] xl:pt-0 pb-[100px] lg:pb-[200px] xl:pb-[220px]' id="about">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.1 }}
        className='container flex flex-col justify-center items-center'>
        
        {/* Reemplazamos el h2 con el video */}
        <video 
          className='w-full max-w-[1005px]' // Ajusta el tamaño según sea necesario
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/become/BECOMETHEMOSTWANTED.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        
        <h3 className='z-10 text-whiten text-[13px] md:text-[25px] lg:text-[30px] leading-[18px] md:leading-[30px] lg:leading-[44px] text-center w-[285px] md:w-[585px] lg:w-[845px] xl:w-[1327px] font-universo font-bold'>
          CHAOS is always right around the corner. And we.. my friend, weee are the next APEX generation that will take control of the situation.
        </h3>
      </motion.div>
    </div>
  );
}

export default Become;

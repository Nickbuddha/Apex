import Image from 'next/image';
import Gallery from './Gallery';
import SocialIcons from './SocialIcons'; // Importa los iconos de redes sociales
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Hero = () => {
  return (
    <section className='pt-[210px] lg:pt-[144px] xl:pt-[257px] flex flex-col lg:flex-row gap-[45px] lg:gap-0 xl:gap-[70px] lg:justify-around lg:pr-[100px]'>
      {/* Left Side - Gallery and Social Icons */}
      <div className="flex flex-col gap-[65px] lg:gap-[27px] xl:gap-[65px] mt-[-10px]">
        <Gallery />
        {/* Añadir SocialIcons debajo de la galería */}
        <div className="flex px-[20px] md:p-0 lg:pl-[79px] fixed z-20 top-28 justify-center lg:static lg:bottom-auto lg:justify-start">
          <SocialIcons />
        </div>
      </div>

      <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}} 
          className='flex lg:flex-row-reverse lg:gap-[8px] xl:gap-[77px] justify-center gap-[18px] relative'>
        <div className="absolute lg:hidden top-1/2 left-1/2 lg:left-auto lg:top-auto lg:right-[50%] transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
          <Image src="/hero/white-button.png" alt="button" width={28} height={28} className='block md:hidden' />
          <Image src="/hero/white-button.png" alt="button" width={50} height={50} className='hidden md:block' />
        </div>

        {/* Right Side - Wanted Level and Info */}
        <div className="flex flex-col pt-[38px] md:pt-[108px] lg:pt-[62px] lg:mt-0 gap-[334px] lg:justify-normal">
          <div className="bg-black rounded-lg">
            <p className="font-bold text-whiten text-[16px] md:text-[24px] lg:text-[22px] xl:text-[36px]">WANTED LEVEL</p>
            <div className="flex md:hidden mt-[8px] lg:mt-[20px] gap-[4px] lg:gap-[12px]"> 
              {/* Stars */}
              <Image src="/hero/star.png" alt="Star" width={14} height={14} />
              <Image src="/hero/star.png" alt="Star" width={14} height={14} />
              <Image src="/hero/star.png" alt="Star" width={14} height={14} />
              <Image src="/hero/wstar.png" alt="wStar" width={14} height={14} />
              <Image src="/hero/wstar.png" alt="wStar" width={14} height={14} />
            </div>
            <div className="hidden lg:flex xl:hidden mt-[8px] lg:mt-[20px] gap-[4px] lg:gap-[12px]"> 
              {/* Stars */}
              <Image src="/hero/star.png" alt="Star" width={22} height={22} />
              <Image src="/hero/star.png" alt="Star" width={22} height={22} />
              <Image src="/hero/star.png" alt="Star" width={22} height={22} />
              <Image src="/hero/wstar.png" alt="wStar" width={22} height={22} />
              <Image src="/hero/wstar.png" alt="wStar" width={22} height={22} />
            </div>
            <div className="hidden xl:flex mt-[20px] gap-[12px]"> 
              {/* Stars */}
              <Image src="/hero/star.png" alt="Star" width={31} height={33} />
              <Image src="/hero/star.png" alt="Star" width={31} height={33} />
              <Image src="/hero/star.png" alt="Star" width={31} height={33} />
              <Image src="/hero/wstar.png" alt="wStar" width={31} height={33} />
              <Image src="/hero/wstar.png" alt="wStar" width={31} height={33} />
            </div>
            <p className="block md:hidden pt-[17px] lg:pt-[41px] text-whiten w-[130px] lg:w-[272px] text-[8px] lg:text-[18px] leading-4 text-start">Too much chaos for ordinary people! What about you?</p>
            <p className="hidden md:block pt-[17px] lg:pt-[20px] xl:pt-[37px] text-whiten w-[228px] lg:w-[272px] text-[15px] leading-24 text-start">Embrace the chaos, be the most wanted. Join the Syndicate.</p>
            <p className="hidden lg:block pt-[17px] lg:pt-[10px] xl:pt-[34px] text-whiten w-[363px] lg:w-[272px] text-[15px] leading-24 text-start">Current wanted LEVEL: 3</p>
          </div>
        </div> 

        {/* MONKEY Image */}
        <div className='block md:hidden'>
          <video width={152} height={308} autoPlay muted loop>
            <source src="/hero/APEX-WALK-001.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className='hidden md:block lg:hidden'>
          <video width={304} height={616} autoPlay muted loop>
            <source src="/hero/APEX-WALK-001.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className='hidden lg:block xl:hidden'>
          <video width={280} height={650} autoPlay muted loop>
            <source src="/hero/APEX-WALK-001.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className='hidden xl:block'>
          <video width={360} height={730} autoPlay muted loop>
            <source src="/hero/APEX-WALK-001.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;

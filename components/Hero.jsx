import Image from 'next/image';
import Gallery from './Gallery';
import SocialIcons from './SocialIcons'; // Importa los iconos de redes sociales
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className='pt-[125px] lg:pt-[144px] xl:pt-[257px] flex flex-col lg:flex-row gap-[45px] lg:gap-0 xl:gap-[70px] lg:pr-[100px]'>
      {/* Left Side - Gallery and Social Icons */}
      <div className="flex flex-col lg:flex-col-reverse gap-[34px] lg:gap-[27px] xl:gap-[65px] mt-[-10px]">
        {/* Añadir SocialIcons debajo de la galería */}
        <div className="flex px-[20px] md:p-0 pl-0 lg:pl-[79px] z-20 top-28 lg:static lg:bottom-auto justify-start">
          <SocialIcons />
        </div>
        <Gallery />
      </div>

      <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}} 
          className='flex lg:flex-row-reverse lg:gap-[8px] xl:gap-[77px] justify-center relative'>
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
            <p className="pt-[17px] lg:pt-[20px] xl:pt-[37px] text-whiten w-[228px] lg:w-[272px] text-[15px] leading-24 text-start universo-fon">Embrace the chaos, be the most wanted. Join the Syndicate.</p>
            <p className="pt-[17px] lg:pt-[10px] xl:pt-[34px] text-[#FFCB45]  lg:w-[272px] text-[15px] leading-24 text-start universo-font">Current wanted LEVEL: 3</p>
          </div>
        </div> 

        {/* MONKEY GIF */}
        <div className='block md:hidden'>
          <Image src="/hero/walkSeq.gif" alt="Monkey GIF" width={152} height={308} className="object-cover" />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Image src="/hero/walkSeq.gif" alt="Monkey GIF" width={304} height={616} className="object-cover" />
        </div>
        <div className='hidden lg:block xl:hidden'>
          <Image src="/hero/walkSeq.gif" alt="Monkey GIF" width={280} height={650} className="object-cover" />
        </div>
        <div className='hidden xl:block'>
          <Image src="/hero/walkSeq.gif" alt="Monkey GIF" width={360} height={730} className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

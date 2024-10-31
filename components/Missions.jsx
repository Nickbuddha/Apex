import Image from 'next/image';
import Link from 'next/link';
import Gallery from './Gallery2';
import GalleryM from './Gallery2M';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Missions = () => {
  return (
    <section className='pt-[118px] lg:pt-[188px] flex flex-col gap-[29px]' id='missions'>
      {/* Título "MISSIONS BOARD" */}
      <div className="container flex flex-col gap-[3px] lg:gap-[19px] lg:pt-[32px] lg:items-start">
        <h2 className='text-whiten text-[36px] lg:text-[72px] font-bold font-bebas'><span className='text-red'>MISSIONS</span> BOARD</h2>
        <hr className='border-t-2 border-white w-full my-4' />
        <div className='flex gap-[18px] lg:gap-[39px]'>
          <Link href=''>
            <button className='text-black uppercase drop-shadow-lg justify-center text-[12px] lg:text-[20px] lg:leading-[19px] bg-white font-sans font-bold py-[6px] lg:py-[10px] px-[22px] flex items-center hover:scale-105 transition duration-300 ease-in-out '>
              PROGRESS
            </button>
          </Link>
          <Link href='' className='relative'>
            <button className='text-white uppercase drop-shadow-lg justify-center text-[12px] lg:text-[20px] lg:leading-[19px] font-sans py-[6px] lg:py-[10px] px-[22px]] flex items-center hover:scale-105 transition duration-300 ease-in-out group'>
              COMPLETED
              {/* Tooltip */}
              <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Coming Soon
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Contenedor para Gallery y Wanted Level */}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}} 
      className="relative lg:container flex flex-col lg:flex-row ">
        {/* Izquierda - Galería */}
        <div className="lg:flex flex-col gap-[65px] hidden ">
          <Gallery className="hidden lg:block" />
        </div>
        <div className="flex flex-col gap-[65px] lg:hidden">
          <GalleryM />
        </div>

        {/* Derecha - Wanted Level */}
        <div className="flex flex-col pt-[23px] md:pt-[216px] lg:pt-[68px] w-[400px] lg:top-0 absolute bottom-[12rem] right-3 lg:right-[-190px] xl:right-[-124px] lg:relative">
          <div className='ml-[226px] md:ml-[52px] lg:ml-[-130px]'>
            <p className="text-white text-[14px] md:text-[20px] lg:text-[24px] universo-font">REWARDS:</p>
              {/* Estrellas */}
            <div className="flex mt-[20px] gap-[8px] md:gap-[12px] items-center"> 
              <Image src="/missions/lock.png" alt="Star" width={20} height={20} className="w-5 h-5 md:w-5 md:h-5"/>
              <p className="text-white text-[11px] md:text-[16px] lg:text-[20px] universo-font">Mission Locked</p>
            </div>
            <div className="flex mt-[20px] gap-[8px] md:gap-[12px] items-center"> 
              <Image src="/missions/monkey.png" alt="Star" width={20} height={20} className="w-5 h-5 md:w-5 md:h-5"/>
              <p className="text-white text-[11px] md:text-[16px] lg:text-[20px] universo-font">Coming Soon</p>
            </div>
              {/* Estrellas */}
            {/* <div className="flex mt-[20px] gap-[8px] md:gap-[12px] items-center"> 
              <Image src="/missions/Star.png" alt="Star" width={20} height={20} className="w-5 h-5 md:w-7 md:h-7"/>
              <p className="text-white text-[11px] md:text-[16px] lg:text-[20px]">1 WANTED LEVEL</p>
            </div> */}
              {/* Estrellas */}
            {/* <div className="flex gap-[8px] md:gap-[12px] items-center"> 
              <Image src="/missions/binco.png" alt="Star" width={20} height={20} className="w-5 h-5 md:w-7 md:h-7"/>
              <p className="text-white text-[11px] md:text-[16px] lg:text-[20px]">Exclusive Clothing Asset</p>
            </div> */}
            {/* <Image src="/missions/white-pufferm.png" alt="Star" width={184} height={205} className='mt-[21px] block lg:hidden' />
            <Image src="/missions/white-puffer.png" alt="Star" width={283} height={283} className='mt-[21px] hidden lg:block' /> */}
          </div>
        </div>
      </motion.div>
  </section>
  );
};

export default Missions;

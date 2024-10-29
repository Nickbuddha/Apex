import Link from 'next/link';
import Carousel from './Carousel';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const YourApex = () => {
  return (
    <section className='container pt-[11px] flex flex-col lg:flex lg:flex-row lg:justify-center lg:gap-2 xl:gap-[76px] lg:pr-[60px]' id="create">
      {/* Left Side */}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
      className="flex flex-col gap-[19px] pt-[32px]">
        <h2 className='text-whiten text-[24px] lg:text-[40px] xl:text-[62px] font-black font-integral'><span className='text-red'>CREATE</span> YOUR APEX</h2>
        <p className="text-whiten text-[11px] lg:text-[20px] xl:text-[30px] w-[233px] lg:w-[400px] xl:w-[622px] font-integral uppercase font-semibold leading-4 lg:leading-[44px]">
          Create your own APEX and start shaping the future of digital ownership and city control.
        </p>
        <Link href='' target="_blank" className='relative'>
              <button className='text-whiten uppercase drop-shadow-lg justify-center lg:text-[26px] xl:text-[36px] lg:leading-[66px] bg-red hover:bg-redh font-integral font-black py-2 px-10 lg:py-0 xl:py-2 lg:px-8 xl:px-16  flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px] group'>
                  create
                  {/* Tooltip */}
                  <div className='absolute top-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[10px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
              </button>
          </Link>
      </motion.div>
    
      {/* Right Side - Wanted Level and Info */}
      <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}} 
          className='flex flex-col lg:flex-row-reverse gap-[19px]'>
        <div className="flex flex-col lg:pt-[109px] lg:mt-0 gap-[334px] pt-[25px]">
            <p className="text-whiten text-[30px] lg:leading-[44px]  font-bebas font-normal lg:font-black text-right lg:text-left">Try some<br/> default outfits</p>
        </div> 
  
        {/* MONKEY slider */}
        <Carousel />
      </motion.div> 
  </section>
  )
}

export default YourApex
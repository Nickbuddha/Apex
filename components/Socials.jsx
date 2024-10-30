import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Socials = () => {
  return (
    <section className='bg-socials bg-center bg-no-repeat bg-cover pt-[60px] pb-[186px] lg:pb-[333px] flex flex-col gap-[29px]'>
      <div className='container'>
        {/* Título "TOKENOMICS" */}
        <div className="flex flex-col gap-[3px] lg:gap-[19px] lg:pt-[32px]">
          <div className='flex justify-around'>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.1}} 
            className='flex flex-col gap-[60px] xl:gap-[118px] items-center'>
                <Image src="/socials/social.png" width={578} height={319} alt="" />
              {/* BOTONES XL*/}
              <div className='flex flex-col lg:flex-row gap-[42px]'>
                <div className='flex flex-col gap-[42px]'>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-black rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/dexscreener.png" width={256} height={60} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-[#29A9EB] rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/telegram.png" width={191} height={26} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-black rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/twiter.png" width={256} height={60} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                </div>
                <div className='flex flex-col gap-[42px]'>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-[#2969FE] rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/coinmarket.png" width={256} height={60} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-[#8AC63F] rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/gecko.png" width={256} height={60} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                  <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                    <button className='bg-[#FEFEFE] rounded-[40px] group w-[290px] h-[60px] flex items-center justify-center shadow-xl'>
                      <Image src="/socials/dextools.png" width={256} height={60} alt="" />
                      {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Listings = () => {
  return (
    <section className='container pt-[49px] lg:pt-[77px] xl:pt-[188px] flex flex-col gap-[29px] pb-[171px]'>
      {/* Título "TOKENOMICS" */}
      <div className="flex flex-col gap-[3px] lg:gap-[19px] lg:pt-[32px]">
        <h2 className='text-white text-[36px] lg:text-[72px] font-bold font-bebas'>LISTINGS</h2>
        <hr className='border-t-2 border-white w-full my-6 lg:pb-[48px] xl:pb-[140px]' />
        <p className='md:hidden mb-[50px] lg:mb-0 text-white text-[18px] lg:text-[20px] leading-[38px] xl:text-[32px] font-black integral-font'>MAJOR EXCHANGES WHERE APEX WILL BE LISTED</p>
        <div className='flex justify-around'>

          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}} 
          className='flex flex-col gap-[60px] xl:gap-[118px] items-center'>
            <p className='hidden md:block text-white text-[24px] lg:text-[20px] leading-[38px] xl:text-[32px] font-black integral-font'>MAJOR EXCHANGES WHERE APEX WILL BE LISTED</p>
            {/* BOTONES Lg*/}
            <div className='flex flex-col md:flex-row lg:flex-col gap-[51px] xl:hidden'>
              <div className='flex flex-col lg:flex-row gap-[42px]'>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/gecko.png" width={124} height={20} alt="" />
                    {/* Tooltip */}
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      Coming Soon
                    </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>COINGECKO</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/marketcap.png" width={124} height={20} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>COINMARKETCAP</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/jupiter.png" width={124} height={20} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>JUPITER</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/bitmart.png" width={124} height={20} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>BITMART</h2>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row gap-[42px]'>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/lbank.png" width={124} height={20} alt="" className='py-2 px-4 xl:py-6 xl:px-4' />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>LBANK</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/mexglobal.png" width={124} height={20} alt="" className='py-2 px-4 xl:py-6 xl:px-4' />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>MEXC Global</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/xtcom.png" width={124} height={20} alt="" className='py-2 px-4 xl:py-6 xl:px-4' />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>XT.com</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[180px] h-[60px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/digifinex.png" width={124} height={20} alt="" className='py-2 px-4 xl:py-6 xl:px-4' />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>DIGIFINEX</h2>
                </div>
              </div>
            </div>
            {/* BOTONES XL*/}
            <div className='xl:flex flex-col gap-[51px] hidden'>
              <div className='flex gap-[42px]'>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/gecko.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>COINGECKO</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/marketcap.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>COINMARKETCAP</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/jupiter.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>JUPITER</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/bitmart.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>BITMART</h2>
                </div>
              </div>
              <div className='flex gap-[42px]'>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/lbank.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>LBANK</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/mexglobal.png" width={224} height={39} alt="" />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>MEXC Global</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/xtcom.png" width={224} height={39} alt=""  />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>XT.com</h2>
                </div>
                <div className='flex flex-col transform transition-transform duration-500 hover:translate-y-[-12px] relative'>
                  <button className='bg-grey hover:bg-white rounded-[30px] group w-[224px] h-[84px] flex items-center justify-center shadow-xl'>
                    <Image src="/listings/digifinex.png" width={224} height={39} alt=""  />
                    {/* Tooltip */}
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 uppercase mb-2 w-max px-2 py-1 text-[8px] font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Coming Soon
                  </div>
                  </button>
                  <h2 className='text-white text-[15px] font-semibold text-center universo-font'>DIGIFINEX</h2>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}}
          className='flex items-center justify-center'>
            <div className='w-[150px] h-[320px] md:hidden flex items-center justify-center'>
              <Image
                src="/listings/monkey-listings.png"
                alt="monkey-listings"
                layout="responsive"
                width={280} 
                height={500} 
                className="mx-auto pt-[37px]"
              />
            </div>
            <div className='w-[200px] h-[420px] hidden md:flex xl:hidden  items-center justify-center'>
              <Image
                src="/listings/monkey-listings.png"
                alt="monkey-listings"
                layout="responsive"
                width={315} 
                height={575} 
                className="mx-auto pt-[37px]"
              />
            </div>
            <div className='w-[415px] h-[675px] hidden xl:block'>
              <Image
                src="/listings/monkey-listings.png"
                alt="monkey-listings"
                layout="responsive"
                width={415} 
                height={675} 
                className="mx-auto pt-[37px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Listings;

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const Roadmap = () => {
  const scrollStyle = {
    overflowY: 'auto',
    scrollbarWidth: 'none', // Para Firefox
    WebkitOverflowScrolling: 'touch', // Para permitir el desplazamiento en dispositivos táctiles
    display: 'block', // Asegúrate de que el contenedor esté visible
  };

  return (
    <section>
      <div className='container pt-[108px] lg:pt-[130px] xl:pt-[188px] flex flex-col gap-[29px]' id="roadmap">
        {/* Título "MISSIONS BOARD" */}
        <div className="flex flex-col gap-[3px] lg:gap-[19px] lg:pt-[32px] lg:items-start">
          <h2 className='text-red text-[36px] lg:text-[72px] font-bold font-bebas'>ROADMAP</h2>
          <hr className='border-t-2 border-white w-full my-4' />
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.1}} 
            className="pt-[77px] hidden lg:flex xl:hidden justify-center w-full relative">
            <Image src="/roadmap/roadmap.png" alt="Star" width={918} height={519} />
            <div className='flex flex-col gap-[16px]' style={{ ...scrollStyle, position: 'absolute', top: '140px', right: '223px', zIndex: 10, height: '380px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px'  }}>
              <Image src="/roadmap/road.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road1.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road2.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road3.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road4.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road5.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road6.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road7.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road8.png" alt="Star" width={380} height={74} />
              <Image src="/roadmap/road9.png" alt="Star" width={380} height={74} />
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.1}} 
            className="pt-[77px] hidden xl:flex justify-center w-full relative">
            <Image src="/roadmap/roadmap.png" alt="Star" width={1441} height={815} />
            <div className='absolute top-[170px] right-[273px] xxl:right-[623px] h-[680px]' style={{ ...scrollStyle, padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Image src="/roadmap/road.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road1.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road2.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road3.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road4.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road5.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road6.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road7.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road8.png" alt="Star" width={663} height={74} />
              <Image src="/roadmap/road9.png" alt="Star" width={663} height={74} />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}}
        className='relative block md:hidden'>
        <Image src="/roadmap/roadmap.png" alt="Star" width={423} height={239} className='pt-[21px] w-full' />
        <div className='flex flex-col gap-[16px]' style={{ ...scrollStyle, position: 'absolute', top: '40px', left: '42%', zIndex: 10, height: '200px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Image src="/roadmap/road.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road1.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road2.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road3.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road4.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road5.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road6.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road7.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road8.png" alt="Star" width={180} height={40} />
          <Image src="/roadmap/road9.png" alt="Star" width={180} height={40} />
        </div>
      </motion.div>
      <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}}
        className='relative hidden md:block lg:hidden'>
        <Image src="/roadmap/roadmap.png" alt="Star" width={423} height={239} className='pt-[21px] w-full' />
        <div style={{ ...scrollStyle, position: 'absolute', top: '70px', left: '42%', zIndex: 10, height: '400px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Image src="/roadmap/road.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road1.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road2.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road3.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road4.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road5.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road6.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road7.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road8.png" alt="Star" width={400} height={40} />
          <Image src="/roadmap/road9.png" alt="Star" width={400} height={40} />
        </div>
      </motion.div>
    </section>
  );
};

export default Roadmap;

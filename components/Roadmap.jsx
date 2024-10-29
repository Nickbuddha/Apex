import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Roadmap = () => {
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
          className="pt-[77px] hidden lg:flex xl:hidden justify-center w-full">
            <Image src="/roadmap/roadmap.png" alt="Star" width={918} height={519} />
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.1}} 
          className="pt-[77px] hidden xl:flex justify-center w-full">
            <Image src="/roadmap/roadmap.png" alt="Star" width={1441} height={815} />
          </motion.div>
        </div>
      </div>
      <motion.div 
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}><Image src="/roadmap/roadmap.png" alt="Star" width={423} height={239} className='pt-[21px] block lg:hidden w-full' /></motion.div>
    </section>
  );
};

export default Roadmap;
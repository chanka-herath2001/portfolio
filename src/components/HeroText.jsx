import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";



const HeroText = () => {
    const words = ["Secure", "Modern","Scalable" ];
    const variants = {
        hidden: {opacity:0, x:-50},
        visible:{opacity:1, x:0},    
    };
  return (
    <div className='z-10 mt-20 md:mt-40 md:text-left rounded-3xl bg-clip-text'>
    {/* Desktop View */}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1 className="text-5xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}>Where Ideas Meet Engineering,</motion.h1>
        <div className="flex flex-col items-start">
            <motion.p className="text-4xl font-medium text-neutral-50" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}>I transform concepts into products<br/> bridging imagination and technology to<br/> build experiences that are,</motion.p>
            <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.5}}>
                <FlipWords className="font-black text-white text-8xl " words={words} />
            </motion.div>
            {/* <motion.p className="text-4xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.7}}>Web Solutions</motion.p> */}
        </div>
      </div>
    {/* Mobile View */}
    <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}>Hi, I'm Chanka</motion.p>
        <div>
            <motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}>Building</motion.p>
            <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.5}}><FlipWords className="font-bold text-white text-7xl " words={words} /></motion.div>
            <motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.7}}>Web Applications</motion.p>
        </div>
    </div>
    </div>
  )
}

export default HeroText

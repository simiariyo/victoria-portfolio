import { motion } from "framer-motion";

import { styles } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { ComputersCanvas } from "./canvas";
import { flipped_image } from "../assets";
// import { CompCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 bg-clip-text text-transparent">Victoria</span>
          </h1>
          <p className="mt-5 text-secondary text-[24px]">Front-End Developer</p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop quality user interfaces <br className='sm:block hidden' /> and React applications.
          </p>
          <a href="#contact" className="mt-5 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Contact Me
            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </a>
        </div>
      <img src={flipped_image} alt='banner' className='md:object-contain rounded-full w-1/2 h-3/4 sm:block hidden' />
      </div>
      
      {/* <ComputersCanvas /> */}
      {/* <CompCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
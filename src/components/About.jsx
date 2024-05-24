import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { contact, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>About Me.</h2>
      </motion.div>
      <motion.div variants={textVariant()} className="mt-10 mb-10 flex flex-wrap gap-20 justify-center">
      {contact.map((contact, index) => (
          <div key={contact.title} index={index}
          className="flex flex-wrap gap-2">
            <img
          src={contact.icon}
          alt='contact'
          className='w-8 h-8 object-contain'
          />
        <div>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {contact.title}
        </h3>
        <p>{contact.text}</p>
        </div>
          </div>
          
        ))}
        
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px] text-justify'
      >
       I am a passionate front-end developer with 3 years of experience, 
       I have created engaging user interfaces and delivered 
       outstanding web applications. I have mastered and used, HTML, 
       CSS, JavaScript, and React to build valuable projects ranging 
       from small business websites to large-scale enterprise 
       applications. I pay close attention to details, 
       and my ability to collaborate with cross-functional teams 
       makes me an asset to any project. 
       I am committed to staying up-to-date with industry trends and 
       best practices to deliver innovative and value-driven solutions.  
      Let's work together to bring your ideas to life!
      </motion.p>
      <motion.a
        href="/victoria_resume.pdf"
        download="victoria_resume.pdf"
        variants={fadeIn("", "", 0.1, 1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-5 mx-auto inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition "
      >
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Download My CV
      </motion.a>
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
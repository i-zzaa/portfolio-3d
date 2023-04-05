import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../util/motion';
import { SectionWrapper } from '../hoc';
import { ServicesType } from '../types/contants';

const ServiceCard = ({ index = 0, title, icon }: ServicesType) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </motion.p>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão geral</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou desenvolvedora de software com experiência em TypeScript e JavaScript e experiência em
        estruturas como React, Node.js, Angular.js, Vue.js. Aprendo rápido e colaboro de perto com
        os clientes para criar soluções eficientes, escaláveis e fáceis de usar que resolvem
        problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service: ServicesType, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

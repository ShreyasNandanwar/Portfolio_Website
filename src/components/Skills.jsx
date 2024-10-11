import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/Skills'; // Make sure this path is correct

const SkillItem = ({ name, proficiency, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'
  >
    <h3 className='text-lg font-roboto font-semibold mb-2'>{name}</h3>
    <div className='mb-2'>
      <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
      <p className='text-sm font-playfair text-gray-700 dark:text-gray-200'>
        Proficiency: {proficiency}%
      </p>
    </div>
    <p className='font-playfair text-sm text-gray-700 dark:text-gray-300'>{description}</p>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <div className='mb-8'>
    <h3 className='text-2xl font-bold mb-4 font-roboto'>
      {title}
    </h3>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = ({ id }) => {
  return (
    <section id="skills" className='py-20'>
      <h2 className='text-3xl font-bold font-roboto mb-4 text-center'>
        My Skills
      </h2>
      
      <div className='space-y-12 mt-4'>
        <SkillCategory title="Frontend" skills={skills.frontend} />
        <SkillCategory title="Backend" skills={skills.backend} />
        <SkillCategory title="Others" skills={skills.others} />
      </div>
    </section>
  );
};

export default Skills;
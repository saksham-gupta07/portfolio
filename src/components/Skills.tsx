import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { resumeData } from '../data/resumeData';
import type { Skill } from '../types';

// Define skill categories
const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'backend', label: 'Backend' },
  { id: 'Languages', label: 'Languages' },
  { id: 'DataBase', label: 'DataBase' },
  { id: 'Cloud', label: 'Cloud' },
  { id: 'ai', label: 'Artificial Intelligence' },
  { id: 'Devops', label: 'Devops' },
  { id: 'Big Data', label: 'Big Data' },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-primary-500"
          style={{ width: '0%' }}
          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredSkills = resumeData.skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title pb-2">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            I've worked with a variety of technologies and tools throughout my career.
            Here's a comprehensive overview of my technical proficiency.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
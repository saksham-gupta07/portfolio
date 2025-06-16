import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <>
      <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title pb-2">Work Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
              My professional journey in data science and software development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
  className="relative flex flex-col items-start"
>
  <div className="absolute left-0 transform h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
  
  {resumeData.experience.map((exp, index) => (
    <motion.div 
      key={index}
      variants={itemVariants}
      className="relative mb-12 pl-12 flex items-start"
    >
      <div className="absolute left-0 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
      
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {exp.startDate} – {exp.endDate || 'Present'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium">
          <span>{exp.company}</span>
          <span className="text-gray-400 dark:text-gray-500">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mt-2">
          {exp.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>

      <section id="education" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title pb-2">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
              My academic background and professional certifications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                      <div className="text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.startDate} – {edu.endDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-4 mt-1">
                      <MapPin size={16} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{edu.location}</span>
                  </div>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience;
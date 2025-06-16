import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Award, Briefcase, GraduationCap, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import * as Icons from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title pb-2">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Nice to meet you
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>{resumeData.aboutMe}</p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2+ Years in Development</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">B.S. in Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-5"
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
                Personal Information
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 dark:text-gray-300">{resumeData.location}</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a 
                    href={`mailto:${resumeData.email}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition"
                  >
                    {resumeData.email}
                  </a>
                </li>
                
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a 
                    href={`tel:${resumeData.phone}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition"
                  >
                    {resumeData.phone}
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {resumeData.socials.map((social) => {
                    const Icon = Icons[social.icon as keyof typeof Icons];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition"
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="#" 
                className="btn btn-primary w-full flex items-center justify-center space-x-2"
                onClick={(e) => e.preventDefault()}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import * as Icons from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-primary-500 rounded-full mb-8 hover:bg-primary-600 transition-colors duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              {resumeData.name}<span className="text-primary-500">.</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              {resumeData.title} specializing in building exceptional digital experiences.
            </p>
            
            <div className="flex justify-center space-x-5 mb-8">
              {resumeData.socials.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-800 mb-6"></div>
          
          <div className="text-gray-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
            <p className="mt-1">Designed and built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
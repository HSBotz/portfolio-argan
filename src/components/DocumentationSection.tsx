'use client';

import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaBook, FaGlobe, FaMap, FaComment, FaLayerGroup, FaFilter } from 'react-icons/fa';

export default function DocumentationSection() {
  const { ref } = useInView();
  const { t } = useLanguage();

  const docSections = [
    {
      title: t('docs.overview.title'),
      description: t('docs.overview.description'),
      icon: <FaBook className="text-blue-400" />
    },
    {
      title: t('docs.navigation.title'),
      description: t('docs.navigation.description'),
      icon: <FaMap className="text-green-400" />
    },
    {
      title: t('docs.language.title'),
      description: t('docs.language.description'),
      icon: <FaGlobe className="text-purple-400" />
    },
    {
      title: t('docs.sections.title'),
      description: (
        <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2">
          <li>{t('docs.sections.home')}</li>
          <li>{t('docs.sections.about')}</li>
          <li>{t('docs.sections.skills')}</li>
          <li>{t('docs.sections.projects')}</li>
          <li>{t('docs.sections.contact')}</li>
        </ul>
      ),
      icon: <FaLayerGroup className="text-orange-400" />
    },
    {
      title: t('docs.contact.title'),
      description: t('docs.contact.description'),
      icon: <FaComment className="text-pink-400" />
    },
    {
      title: t('docs.projects.title'),
      description: t('docs.projects.description'),
      icon: <FaFilter className="text-cyan-400" />
    }
  ];

  return (
    <section id="docs" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('docs.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('docs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {docSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#1e293b] border border-white/5 rounded-lg p-6 hover:border-blue-500/30 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0f172a] rounded-lg text-2xl">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">{section.title}</h3>
                  {typeof section.description === 'string' ? (
                    <p className="text-gray-400">{section.description}</p>
                  ) : (
                    section.description
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#1e293b] border border-white/5 rounded-lg text-center">
          <p className="text-gray-400">
            {t('contact.workDetail')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mt-4"
          >
            {t('contact.title')}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 
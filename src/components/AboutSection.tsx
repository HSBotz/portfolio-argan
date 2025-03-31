'use client';

import { useInView } from 'react-intersection-observer';
import { FaCode, FaGamepad, FaEdit, FaVideo, FaRobot } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { ref } = useInView();
  const { t } = useLanguage();

  const skills = [
    { 
      icon: <FaCode />, 
      label: t('about.programming'), 
      description: t('about.programming.desc'), 
      color: 'blue' 
    },
    { 
      icon: <FaRobot />, 
      label: t('about.chatbot'), 
      description: t('about.chatbot.desc'), 
      color: 'cyan' 
    },
    { 
      icon: <FaGamepad />, 
      label: t('about.gaming'), 
      description: t('about.gaming.desc'), 
      color: 'green' 
    },
    { 
      icon: <FaVideo />, 
      label: t('about.content'), 
      description: t('about.content.desc'), 
      color: 'orange' 
    },
    { 
      icon: <FaEdit />, 
      label: t('about.editing'), 
      description: t('about.editing.desc'), 
      color: 'purple' 
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <Image 
                  src="/image/argan.JPG" 
                  alt="Argan Profile" 
                  width={500} 
                  height={375} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500/30 -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              <span dangerouslySetInnerHTML={{ 
                __html: t('about.intro')
                  .replace('multi-talented digital creator', '<span class="text-blue-400">multi-talented digital creator</span>')
              }}/>
            </h3>
            <p className="text-gray-300 mb-6">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 bg-[#1e293b] rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className={`text-${item.color}-400 text-xl mb-2`}>{item.icon}</div>
                  <h4 className="font-medium text-white mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
            >
              {t('about.cta')}
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
      </div>
    </section>
  );
} 
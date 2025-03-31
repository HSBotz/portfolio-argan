'use client';

import { motion } from 'framer-motion';
import { FaCode, FaGamepad, FaTiktok, FaVideo } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

// Separate component for particles to render only on client-side
const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    top: string;
    left: string;
    width: string;
    height: string;
    color: string;
    animation: string;
    delay: string;
  }>>([]);
  
  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 5 + 1}px`,
      height: `${Math.random() * 5 + 1}px`,
      color: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#10b981' : '#f97316',
      animation: `float ${Math.random() * 10 + 5}s linear infinite`,
      delay: `${Math.random() * 5}s`,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.width,
            height: particle.height,
            backgroundColor: particle.color,
            animation: particle.animation,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] -z-10"></div>
      
      {/* Client-side rendered particles */}
      <BackgroundParticles />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-xl md:text-2xl font-medium text-blue-400">{t('hero.hello')}</h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4">
              <span className="gradient-text">Argan</span>
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-4 sm:mb-6">
              {t('hero.tagline')}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-medium transition-transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              {t('hero.contactMe')}
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-medium transition-all hover:bg-blue-500/10 text-sm sm:text-base"
            >
              {t('hero.seeMyWork')}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] flex items-center justify-center">
            {/* Central circle */}
            <div className="absolute w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float">
              <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/image/argan.JPG" 
                  alt="Argan Profile" 
                  width={384} 
                  height={384} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating skill icons */}
            <motion.div
              variants={iconContainerVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0"
            >
              <motion.div
                variants={iconVariants}
                className="absolute top-0 left-1/2 -translate-x-1/2 p-3 sm:p-4 lg:p-5 bg-[#1e293b] rounded-full shadow-lg border border-blue-500/30"
              >
                <FaCode className="text-blue-400 text-xl sm:text-2xl lg:text-3xl" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-3 sm:p-4 lg:p-5 bg-[#1e293b] rounded-full shadow-lg border border-green-500/30"
              >
                <FaGamepad className="text-green-400 text-xl sm:text-2xl lg:text-3xl" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 sm:p-4 lg:p-5 bg-[#1e293b] rounded-full shadow-lg border border-orange-500/30"
              >
                <FaTiktok className="text-orange-400 text-xl sm:text-2xl lg:text-3xl" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="absolute top-1/2 left-0 -translate-y-1/2 p-3 sm:p-4 lg:p-5 bg-[#1e293b] rounded-full shadow-lg border border-purple-500/30"
              >
                <FaVideo className="text-purple-400 text-xl sm:text-2xl lg:text-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
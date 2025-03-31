'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGamepad, FaVideo, FaEdit } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

type ProjectCategory = 'all' | 'development' | 'gaming' | 'video' | 'design';

// Define type for project links
type ProjectLinks = {
  demo: string;
  github?: string;
};

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Next.js, and a headless CMS.',
    image: '/image/project-ecommerce.jpg',
    category: 'development',
    tags: ['React', 'Next.js', 'TypeScript', 'API Integration'],
    links: {
      demo: 'https://67j16dvoyqsb.trickle.host/',
    } as ProjectLinks,
    icon: <FaCode />,
    color: 'blue',
    gradient: 'from-blue-500/20 to-blue-700/20',
  },
  {
    id: 2,
    title: 'Gaming Stream Overlay',
    description: 'Custom dynamic overlays for Twitch streams with real-time statistics and alerts.',
    image: '/image/project-stream.jpg',
    category: 'gaming',
    tags: ['OBS', 'Stream Design', 'Animation'],
    links: {
      demo: 'https://wdflat.com/product/lion-king/',
    } as ProjectLinks,
    icon: <FaGamepad />,
    color: 'green',
    gradient: 'from-green-500/20 to-green-700/20',
  },
  {
    id: 3,
    title: 'Viral TikTok Series',
    description: 'A series of tech tutorial TikToks that amassed over 1M views, showcasing coding tips and tricks.',
    image: '/image/project-tiktok.jpg',
    category: 'video',
    tags: ['TikTok', 'Content Creation', 'Editing'],
    links: {
      demo: 'https://portfolio-syin.vercel.app/',
    } as ProjectLinks,
    icon: <FaVideo />,
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-700/20',
  },
  {
    id: 4,
    title: 'Portfolio Website Template',
    description: 'A customizable portfolio template designed for developers and creative professionals.',
    image: '/image/project-portfolio.jpg',
    category: 'design',
    tags: ['UI/UX', 'Figma', 'Responsive Design'],
    links: {
      demo: 'https://7u9m3cwgb5ej.trickle.host/',
    } as ProjectLinks,
    icon: <FaEdit />,
    color: 'purple',
    gradient: 'from-purple-500/20 to-purple-700/20',
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'A productivity app to manage tasks, projects, and team collaboration.',
    image: '/image/project-taskapp.jpg',
    category: 'development',
    tags: ['React', 'Firebase', 'Redux'],
    links: {
      demo: 'https://www.instagram.com/alcateambot_/',
    } as ProjectLinks,
    icon: <FaCode />,
    color: 'blue',
    gradient: 'from-blue-600/20 to-indigo-500/20',
  },
  {
    id: 6,
    title: 'AI Chatbot Development',
    description: 'An intelligent conversational AI chatbot built with advanced NLP capabilities for customer service and support.',
    image: '/image/State-of-Chatbots.jpg',
    category: 'development',
    tags: ['Bot Whatsapp', 'Bot Telegram', 'Bot Line', 'Bot Discord'],
    links: {
      demo: 'https://whatsapp.com/channel/0029Va9xchgDDmFNoKjsNJ2K',
    } as ProjectLinks,
    icon: <FaCode />,
    color: 'blue',
    gradient: 'from-blue-600/20 to-purple-500/20',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { id: 'all', label: t('projects.viewAll'), icon: null },
    { id: 'development', label: t('about.programming'), icon: <FaCode /> },
    { id: 'gaming', label: t('about.gaming'), icon: <FaGamepad /> },
    { id: 'video', label: t('about.content'), icon: <FaVideo /> },
    { id: 'design', label: t('about.editing'), icon: <FaEdit /> },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#273549]'
              }`}
            >
              {category.icon && <span>{category.icon}</span>}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all group"
            >
              {/* Project Image Container */}
              <div className="h-48 relative overflow-hidden">
                {/* Gradient overlay for continuity with design */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 z-10`}></div>
                
                {/* Project image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className={`text-5xl text-white`}>
                    {project.icon}
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <a 
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#0f172a] rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {t('projects.viewProject')}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
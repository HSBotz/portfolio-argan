'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, FaGamepad, FaTiktok, FaYoutube, 
  FaEdit, FaReact, FaNodeJs, FaPhp, 
  FaFigma, FaPlaystation, FaSteam, FaInstagram,
  FaRobot, FaWhatsapp, FaTelegram, FaDiscord
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, 
  SiTailwindcss, SiAdobepremierepro, SiAdobephotoshop, 
  SiAdobeaftereffects, SiAdobeillustrator,
  SiDialogflow, SiRasa, SiOpenai, SiLine
} from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

type SkillTab = 'programming' | 'gaming' | 'content' | 'editing' | 'chatbot';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillTab>('programming');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const tabs = [
    { id: 'programming', label: t('about.programming'), icon: <FaCode /> },
    { id: 'chatbot', label: t('about.chatbot'), icon: <FaRobot /> },
    { id: 'gaming', label: t('about.gaming'), icon: <FaGamepad /> },
    { id: 'content', label: t('about.content'), icon: <FaTiktok /> },
    { id: 'editing', label: t('about.editing'), icon: <FaEdit /> },
  ];

  const skills = {
    programming: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      { name: 'React', icon: <FaReact />, level: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
      { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 95 },
      { name: 'PHP', icon: <FaPhp />, level: 75 },
      { name: 'UI/UX Design', icon: <FaFigma />, level: 80 },
    ],
    chatbot: [
      { name: 'WhatsApp Bot', icon: <FaWhatsapp />, level: 95 },
      { name: 'Telegram Bot', icon: <FaTelegram />, level: 90 },
      { name: 'Line Bot', icon: <SiLine />, level: 78 },
      { name: 'Discord Bot', icon: <FaDiscord />, level: 85 },
      { name: 'Dialogflow', icon: <SiDialogflow />, level: 80 },
      { name: 'OpenAI API', icon: <SiOpenai />, level: 92 },
      { name: 'NLP Integration', icon: <FaRobot />, level: 88 },
      { name: 'Rasa Framework', icon: <SiRasa />, level: 78 },
      { name: 'Chatbot Analytics', icon: <FaCode />, level: 85 },
    ],
    gaming: [
      { name: 'PC Gaming', icon: <FaSteam />, level: 95 },
      { name: 'PlayStation', icon: <FaPlaystation />, level: 90 },
      { name: 'FPS Games', icon: <FaGamepad />, level: 95 },
      { name: 'Strategy Games', icon: <FaGamepad />, level: 85 },
      { name: 'Game Streaming', icon: <FaTiktok />, level: 90 },
      { name: 'Commentary', icon: <FaYoutube />, level: 85 },
    ],
    content: [
      { name: 'TikTok Content', icon: <FaTiktok />, level: 90 },
      { name: 'Social Media', icon: <FaYoutube />, level: 85 },
      { name: 'Instagram Content', icon: <FaInstagram />, level: 90 },
      { name: 'Content Strategy', icon: <FaYoutube />, level: 80 },
    ],
    editing: [
      { name: 'Premiere Pro', icon: <SiAdobepremierepro />, level: 95 },
      { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 90 },
      { name: 'After Effects', icon: <SiAdobeaftereffects />, level: 85 },
      { name: 'Illustrator', icon: <SiAdobeillustrator />, level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SkillTab)}
              className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#273549]'
              }`}
            >
              <span className="text-base sm:text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#1e293b] border border-white/5 rounded-lg p-6 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              <div className="text-3xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{skill.name}</h3>
              <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Beginner</span>
                <span className="text-xs font-medium text-blue-400">{skill.level}%</span>
                <span className="text-xs text-gray-400">Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
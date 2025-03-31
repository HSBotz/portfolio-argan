'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'id';

// Context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.docs': 'Docs',
    
    // Hero Section
    'hero.hello': 'Hello, I\'m',
    'hero.tagline': 'I turn ideas into digital reality',
    'hero.description': 'Passionate about creating exceptional digital experiences through coding, gaming, streaming, and content creation.',
    'hero.contactMe': 'Contact Me',
    'hero.seeMyWork': 'See My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Discover who I am, what I do, and why I\'m passionate about my work',
    'about.intro': 'I\'m a multi-talented digital creator',
    'about.description': 'With a passion for technology and creativity, I blend the worlds of programming, gaming, content creation, chatbot development, and editing to create unique digital experiences. My journey in the digital space has equipped me with a diverse skill set that allows me to approach projects from multiple perspectives.',
    'about.programming': 'Programming',
    'about.programming.desc': 'Creating elegant solutions through code',
    'about.chatbot': 'Chatbot Dev',
    'about.chatbot.desc': 'Building intelligent conversational bots',
    'about.gaming': 'Gaming',
    'about.gaming.desc': 'Passionate gamer and streamer',
    'about.content': 'Content Creation',
    'about.content.desc': 'TikTok and video content creator',
    'about.editing': 'Editing',
    'about.editing.desc': 'Professional photo and video editing',
    'about.cta': 'Let\'s work together',
    
    // Skills Section
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and abilities I\'ve been working with',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'Check out some of my recent work',
    'projects.viewProject': 'View Project',
    'projects.viewAll': 'View All Projects',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind or want to collaborate? Feel free to reach out. I\'m always open to new opportunities and challenges.',
    'contact.formTitle': 'Send Me a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.selectSubject': 'Select a subject',
    'contact.projectInquiry': 'Project Inquiry',
    'contact.collaboration': 'Collaboration',
    'contact.gaming': 'Gaming Partnership',
    'contact.other': 'Other',
    'contact.message': 'Your Message',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.success': 'Message Ready for WhatsApp!',
    'contact.successDetail': 'Your message has been prepared for WhatsApp. If WhatsApp doesn\'t open automatically, please check your popup blocker.',
    'contact.sendAnother': 'Send Another Message',
    'contact.info': 'Contact Information',
    'contact.email.label': 'Email',
    'contact.followMe': 'Follow Me',
    'contact.workTogether': 'Let\'s Create Something Amazing Together',
    'contact.workDetail': 'Whether you need a developer, a gamer, a content creator, or an editor, I\'m here to help turn your vision into reality. Let\'s connect and discuss your project!',

    // Documentation Section
    'docs.title': 'Documentation',
    'docs.subtitle': 'Learn how to use this portfolio website',
    'docs.overview.title': 'Website Overview',
    'docs.overview.description': 'Welcome to my portfolio website! This site showcases my skills, projects, and services across multiple domains including programming, chatbot development, gaming, content creation, and editing.',
    'docs.navigation.title': 'Navigation Guide',
    'docs.navigation.description': 'You can navigate through different sections using the menu at the top of the page. On mobile devices, tap the menu icon to view navigation options.',
    'docs.language.title': 'Language Settings',
    'docs.language.description': 'This website is available in English and Indonesian. You can switch between languages using the language toggle in the top menu.',
    'docs.sections.title': 'Website Sections',
    'docs.sections.home': 'Home: The main landing page with a quick overview',
    'docs.sections.about': 'About: Information about me, my background, and skills',
    'docs.sections.skills': 'Skills: Detailed breakdown of my technical and creative abilities',
    'docs.sections.projects': 'Projects: Showcase of my recent work across different domains',
    'docs.sections.contact': 'Contact: Form to get in touch directly through WhatsApp',
    'docs.contact.title': 'Contact Features',
    'docs.contact.description': 'The contact form sends messages directly to my WhatsApp. Fill in your information, and after clicking "Send Message," WhatsApp will open with your message ready to send.',
    'docs.projects.title': 'Viewing Projects',
    'docs.projects.description': 'You can filter projects by category using the buttons above the project grid. Click on a project to view more details or visit the live version.',

    // Footer Section
    'footer.rights': 'All rights reserved.',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    'nav.docs': 'Dokumentasi',
    
    // Hero Section
    'hero.hello': 'Halo, Saya',
    'hero.tagline': 'Saya mengubah ide menjadi realitas digital',
    'hero.description': 'Bersemangat menciptakan pengalaman digital luar biasa melalui coding, gaming, streaming, dan pembuatan konten.',
    'hero.contactMe': 'Hubungi Saya',
    'hero.seeMyWork': 'Lihat Karya Saya',
    
    // About Section
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Kenali siapa saya, apa yang saya lakukan, dan mengapa saya bersemangat dengan pekerjaan saya',
    'about.intro': 'Saya seorang kreator digital multi-talenta',
    'about.description': 'Dengan hasrat pada teknologi dan kreativitas, saya memadukan dunia pemrograman, gaming, pembuatan konten, pengembangan chatbot, dan editing untuk menciptakan pengalaman digital yang unik. Perjalanan saya di dunia digital telah melengkapi saya dengan beragam keterampilan yang memungkinkan saya mendekati proyek dari berbagai perspektif.',
    'about.programming': 'Pemrograman',
    'about.programming.desc': 'Menciptakan solusi elegan melalui kode',
    'about.chatbot': 'Pengembangan Chatbot',
    'about.chatbot.desc': 'Membangun bot percakapan yang cerdas',
    'about.gaming': 'Gaming',
    'about.gaming.desc': 'Gamer dan streamer yang bersemangat',
    'about.content': 'Pembuatan Konten',
    'about.content.desc': 'Kreator konten TikTok dan video',
    'about.editing': 'Editing',
    'about.editing.desc': 'Editing foto dan video profesional',
    'about.cta': 'Mari bekerja sama',
    
    // Skills Section
    'skills.title': 'Keahlian Saya',
    'skills.subtitle': 'Teknologi dan kemampuan yang telah saya kuasai',
    
    // Projects Section
    'projects.title': 'Proyek Saya',
    'projects.subtitle': 'Lihat beberapa karya terbaru saya',
    'projects.viewProject': 'Lihat Proyek',
    'projects.viewAll': 'Lihat Semua Proyek',
    
    // Contact Section
    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Punya proyek dalam pikiran atau ingin berkolaborasi? Jangan ragu untuk menghubungi. Saya selalu terbuka untuk peluang dan tantangan baru.',
    'contact.formTitle': 'Kirim Pesan',
    'contact.name': 'Nama Anda',
    'contact.email': 'Email Anda',
    'contact.subject': 'Subjek',
    'contact.selectSubject': 'Pilih subjek',
    'contact.projectInquiry': 'Pertanyaan Proyek',
    'contact.collaboration': 'Kolaborasi',
    'contact.gaming': 'Kemitraan Gaming',
    'contact.other': 'Lainnya',
    'contact.message': 'Pesan Anda',
    'contact.sending': 'Mengirim...',
    'contact.send': 'Kirim Pesan',
    'contact.success': 'Pesan Siap untuk WhatsApp!',
    'contact.successDetail': 'Pesan Anda telah disiapkan untuk WhatsApp. Jika WhatsApp tidak terbuka secara otomatis, silakan periksa pemblokir popup Anda.',
    'contact.sendAnother': 'Kirim Pesan Lain',
    'contact.info': 'Informasi Kontak',
    'contact.email.label': 'Email',
    'contact.followMe': 'Ikuti Saya',
    'contact.workTogether': 'Mari Ciptakan Sesuatu yang Luar Biasa Bersama',
    'contact.workDetail': 'Baik Anda membutuhkan developer, gamer, kreator konten, atau editor, saya siap membantu mewujudkan visi Anda menjadi kenyataan. Mari terhubung dan diskusikan proyek Anda!',

    // Documentation Section
    'docs.title': 'Dokumentasi',
    'docs.subtitle': 'Pelajari cara menggunakan website portfolio ini',
    'docs.overview.title': 'Ringkasan Website',
    'docs.overview.description': 'Selamat datang di website portfolio saya! Situs ini menampilkan keterampilan, proyek, dan layanan saya di berbagai bidang termasuk pemrograman, pengembangan chatbot, gaming, pembuatan konten, dan editing.',
    'docs.navigation.title': 'Panduan Navigasi',
    'docs.navigation.description': 'Anda dapat menavigasi melalui berbagai bagian menggunakan menu di bagian atas halaman. Pada perangkat mobile, ketuk ikon menu untuk melihat opsi navigasi.',
    'docs.language.title': 'Pengaturan Bahasa',
    'docs.language.description': 'Website ini tersedia dalam bahasa Inggris dan Indonesia. Anda dapat beralih antara bahasa menggunakan toggle bahasa di menu atas.',
    'docs.sections.title': 'Bagian Website',
    'docs.sections.home': 'Beranda: Halaman utama dengan gambaran singkat',
    'docs.sections.about': 'Tentang: Informasi tentang saya, latar belakang, dan keahlian saya',
    'docs.sections.skills': 'Keahlian: Perincian detail kemampuan teknis dan kreatif saya',
    'docs.sections.projects': 'Proyek: Pertunjukan karya terbaru saya di berbagai bidang',
    'docs.sections.contact': 'Kontak: Formulir untuk menghubungi saya langsung melalui WhatsApp',
    'docs.contact.title': 'Fitur Kontak',
    'docs.contact.description': 'Formulir kontak mengirim pesan langsung ke WhatsApp saya. Isi informasi Anda, dan setelah mengklik "Kirim Pesan," WhatsApp akan terbuka dengan pesan Anda siap untuk dikirim.',
    'docs.projects.title': 'Melihat Proyek',
    'docs.projects.description': 'Anda dapat memfilter proyek berdasarkan kategori menggunakan tombol di atas grid proyek. Klik pada proyek untuk melihat detail lebih lanjut atau kunjungi versi langsung.',

    // Footer Section
    'footer.rights': 'Semua hak dilindungi undang-undang.',
  }
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext); 
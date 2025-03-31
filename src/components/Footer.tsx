'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaTiktok, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<null | 'success' | 'error'>(null);
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'terms'>(null);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/HSBotz", label: "GitHub" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@wukssy113?", label: "TikTok" },
    { icon: FaWhatsapp, href: "https://www.whatsapp.com/channel/0029Vb1apTp9cDDfHfSCkQ2l", label: "WhatsApp" },
    { icon: FaInstagram, href: "https://instagram.com/gibranmvr._", label: "Instagram" }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Docs', href: '#docs' },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Di sini Anda bisa menambahkan kode untuk mengirim email ke API atau server Anda
      // Contoh saja, anggap sudah sukses setelah timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sukses
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status setelah 3 detik
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    } catch {
      setSubscribeStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (type: 'privacy' | 'terms') => {
    setActiveModal(type);
    // Mencegah scrolling pada body ketika modal terbuka
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    // Mengaktifkan kembali scrolling pada body
    document.body.style.overflow = 'auto';
  };

  // Handler untuk menutup modal jika user menekan tombol Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0c1524] to-[#0f172a] py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl bg-blue-500/20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl bg-purple-500/10 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="#hero" className="inline-block">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-2xl font-bold">
                  Argan Portfolio
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('Creating digital experiences with passion and precision. Bringing innovation and creativity to every project.') || 'Creating digital experiences with passion and precision. Bringing innovation and creativity to every project.'}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-1">
              {t('Quick Links') || 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-1">
              {t('Contact') || 'Contact'}
            </h3>
            <div className="text-gray-400 space-y-3">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 mt-1" />
                <span>gibranperon@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span>Ternate, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-blue-500 after:mt-1">
              {t('Stay Updated') || 'Stay Updated'}
            </h3>
            <p className="text-gray-400 text-sm">
              {t('Newsletter Desc') || 'Subscribe to my newsletter for updates on new projects and tech insights.'}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 text-white rounded-lg p-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className={`mt-2 sm:mt-0 sm:ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-4 py-2 font-medium text-sm whitespace-nowrap ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting 
                  ? t('subscribing') || 'Subscribing...' 
                  : t('subscribe') || 'Subscribe'}
              </motion.button>
            </form>
            
            {subscribeStatus === 'success' && (
              <div className="text-green-400 text-sm mt-2 animate-fadeIn">
                {t('subscribeSuccess') || 'Thank you for subscribing!'}
              </div>
            )}
            
            {subscribeStatus === 'error' && (
              <div className="text-red-400 text-sm mt-2 animate-fadeIn">
                {t('subscribeError') || 'Please enter a valid email address.'}
              </div>
            )}
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Alcateambot-Corp. {t('footer.rights') || 'All rights reserved.'}
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <button 
                onClick={() => openModal('privacy')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openModal('terms')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </button>
              <Link href="https://instagram.com/alcateambot_" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                AlcaCorp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Privacy Policy */}
      {activeModal === 'privacy' && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <motion.div 
            className="bg-[#0f172a] border border-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex justify-between items-center border-b border-gray-800 p-4">
              <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6 text-gray-300 space-y-4">
              <h3 className="text-lg font-semibold text-white">1. Informasi yang Kami Kumpulkan</h3>
              <p>Ketika Anda berinteraksi dengan website kami, kami mungkin mengumpulkan informasi berikut:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Informasi pribadi yang Anda berikan secara sukarela seperti nama, alamat email, atau nomor telepon.</li>
                <li>Informasi penggunaan seperti halaman yang Anda kunjungi, waktu yang Anda habiskan di website, dan interaksi Anda dengan konten.</li>
                <li>Informasi teknis seperti alamat IP, browser, dan sistem operasi yang Anda gunakan.</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">2. Bagaimana Kami Menggunakan Informasi Anda</h3>
              <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Menyediakan, memelihara, dan meningkatkan layanan kami.</li>
                <li>Mengirim komunikasi yang Anda minta, seperti newsletter atau pemberitahuan.</li>
                <li>Menganalisis tren penggunaan untuk meningkatkan pengalaman pengguna.</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">3. Perlindungan Data</h3>
              <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">4. Cookies</h3>
              <p>Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Anda dapat mengatur browser Anda untuk menolak cookies, namun ini mungkin memengaruhi fungsionalitas website.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">5. Perubahan pada Kebijakan Privasi</h3>
              <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini.</p>
              
              <p className="mt-6">Terakhir diperbarui: {currentYear}</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal for Terms of Service */}
      {activeModal === 'terms' && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <motion.div 
            className="bg-[#0f172a] border border-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex justify-between items-center border-b border-gray-800 p-4">
              <h2 className="text-xl font-bold text-white">Terms of Service</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6 text-gray-300 space-y-4">
              <h3 className="text-lg font-semibold text-white">1. Penggunaan Website</h3>
              <p>Dengan mengakses website ini, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, Anda tidak boleh menggunakan website ini.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">2. Hak Kekayaan Intelektual</h3>
              <p>Semua konten yang tersedia di website ini, termasuk teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, dan kompilasi data, adalah milik Argan Portfolio dan dilindungi oleh hukum kekayaan intelektual.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">3. Batasan Tanggung Jawab</h3>
              <p>Website ini disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan apa pun, baik tersurat maupun tersirat. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan website ini.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">4. Tautan ke Website Lain</h3>
              <p>Website kami mungkin berisi tautan ke website pihak ketiga. Kami tidak bertanggung jawab atas konten atau praktik privasi website tersebut.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">5. Perubahan pada Syarat dan Ketentuan</h3>
              <p>Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif segera setelah diposting di website.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">6. Hukum yang Berlaku</h3>
              <p>Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui forum hukum yang sesuai di Indonesia.</p>
              
              <p className="mt-6">Terakhir diperbarui: {currentYear}</p>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
}
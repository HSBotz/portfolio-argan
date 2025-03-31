'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaInstagram, FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { ref } = useInView();
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Format message for WhatsApp
    const whatsappMessage = `*New Portfolio Message*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6281312118214?text=${encodedMessage}`;

    // Delay slightly to show the sending animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 800);
  };
  const socialLinks = [
    { platform: 'GitHub', icon: <FaGithub />, url: 'https://github.com/HSBotz', color: 'hover:text-white' },
    { platform: 'TikTok', icon: <FaTiktok />, url: 'https://www.tiktok.com/@wukssy113?', color: 'hover:text-pink-400' },
    { platform: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/gibranmvr._', color: 'hover:text-pink-600' },
    { platform: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@Argan-MD', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="bg-[#121212] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.formTitle')}</h3>
              
              {submitted ? (
                <div
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 mx-auto text-green-400 mb-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('contact.success')}</h4>
                  <p className="text-gray-300">{t('contact.successDetail')}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.subject')}</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t('contact.selectSubject')}</option>
                      <option value="project">{t('contact.projectInquiry')}</option>
                      <option value="collaboration">{t('contact.collaboration')}</option>
                      <option value="gaming">{t('contact.gaming')}</option>
                      <option value="other">{t('contact.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  {error && (
                    <div className="text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white font-medium transition-all ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg 
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                          >
                            <circle 
                              className="opacity-25" 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="4"
                            ></circle>
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t('contact.sending')}
                        </span>
                      ) : t('contact.send')}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.info')}</h3>
                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#1e293b] rounded-lg text-blue-400">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{t('contact.email.label')}</h4>
                      <p className="text-gray-400">gibranperon@gmail.com</p>
                      <p className="text-gray-400">alcateambot@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">{t('contact.followMe')}</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-[#1e293b] rounded-lg text-gray-400 text-xl transition-colors ${link.color}`}
                      aria-label={`Follow me on ${link.platform}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-2">{t('contact.workTogether')}</h4>
                <p className="text-gray-400">
                  {t('contact.workDetail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { TbMessageDots, TbSend } from 'react-icons/tb';
import { MdOutlineAccessTime } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useI18n } from '../../locales';
import axios from 'axios';

function Contact() {
    const t = useI18n();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subjet: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit form with axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('https://contact-api-virid.vercel.app/contact', formData);
            if (response.status === 200) {
                setSubmitStatus('success');
                setTimeout(() => {
                    setSubmitStatus('');
                }, 3000);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subjet: "",
                    message: ""
                })
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.log(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    const contactInfo = [
        {
            icon: <FaPhone className="w-5 h-5" />,
            title: t("contact.infos.phone"),
            value: "+221 77 095 75 60",
            link: "tel:+22177095750",
            color: "text-green-500"
        },
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            title: "Email",
            value: "youssoutraore22@yahoo.com",
            link: "mailto:youssoutraore22@yahoo.com",
            color: "text-blue-500"
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5" />,
            title: t("contact.infos.location"),
            value: "Dakar, Sénégal",
            link: "#",
            color: "text-red-500"
        },
        {
            icon: <MdOutlineAccessTime className="w-5 h-5" />,
            title: t("contact.infos.availability.title"),
            value: t("contact.infos.availability.status"),
            link: "#",
            color: "text-purple-500"
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, name: "LinkedIn", color: "hover:bg-blue-600", url: "#" },
        { icon: <FaInstagram />, name: "Instagram", color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500", url: "#" },
        { icon: <FaFacebook />, name: "Facebook", color: "hover:bg-blue-700", url: "#" },
        { icon: <FaWhatsapp />, name: "WhatsApp", color: "hover:bg-green-500", url: "https://wa.me/22177095750" },
        { icon: <FaTelegram />, name: "Telegram", color: "hover:bg-blue-500", url: "#" }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* En-tête de section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
                        {t("contact.banner")}
                    </span>
                    <h2 className="text-4xl uppercase md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        {t("contact.title")}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("contact.description")}
                    </p>
                </div>
                <div className='grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto'>
                    {/* Colonne de gauche : Informations de contact */}
                    <div className='lg:col-span-2'>
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 h-full'>
                            <div className='mb-8' data-aos="fade-right">
                                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                                    {t("contact.subtitle1")}
                                </h3>
                                <div className='flex items-center gap-2 text-blue-600 mb-4'>
                                    <span className='text-lg font-semibold'>{t("contact.text1")}</span>
                                    <TbMessageDots className='w-6 h-6' />
                                </div>
                                <p className='text-gray-600 leading-relaxed'>
                                    {t("contact.text4")}
                                </p>
                            </div>

                            {/* Informations de contact */}
                            <div className='space-y-2 mb-8' data-aos="fade-right" data-aos-delay="200">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className='flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md group'
                                    >
                                        <div className={`${info.color} bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-800 text-sm'>{info.title}</h4>
                                            <p className='text-gray-600 text-sm'>{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Réseaux sociaux */}
                            <div data-aos="fade-right" data-aos-delay="400">
                                <h4 className='font-semibold text-gray-800 mb-4 uppercase tracking-wide text-sm'>
                                    {t("contact.infos.follow")}
                                </h4>
                                <div className='flex gap-3'>
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:text-white transform hover:scale-110 hover:rotate-12 ${social.color}`}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite : Formulaire de contact */}
                    <div className='lg:col-span-3'>
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20'>
                            <div className='mb-8' data-aos="fade-left">
                                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                                    {t("contact.subtitle2")}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {t("contact.text2")} {t("contact.text3")}
                                </p>
                            </div>

                            {/* Message de statut */}
                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-xl ${submitStatus === 'success'
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                    {submitStatus === 'success' ?
                                        '✅ Message envoyé avec succès ! Je vous répondrai bientôt.' :
                                        '❌ Erreur lors de l\'envoi. Veuillez réessayer.'
                                    }
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className='space-y-6' data-aos="fade-left" data-aos-delay="200">
                                {/* Ligne 1 : Nom et Email */}
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div className='group'>
                                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                            {t("contact.label1")} <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none"
                                            placeholder={t("contact.placeholder.name")}
                                        />
                                    </div>
                                    <div className='group'>
                                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                            {t("contact.label2")} <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none"
                                            placeholder={t('contact.placeholder.email')}
                                        />
                                    </div>
                                </div>

                                {/* Ligne 2 : Téléphone et Sujet */}
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div className='group'>
                                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                            {t("contact.label3")}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none"
                                            placeholder={t("contact.placeholder.phone")}
                                        />
                                    </div>
                                    <div className='group'>
                                        <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                            {t("contact.label4")} <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="subjet"
                                            value={formData.subjet}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none"
                                            placeholder= {t("contact.placeholder.subject")}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className='group'>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        {t("contact.label5")} <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        required
                                        className='w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none resize-none'
                                        placeholder={t("contact.placeholder.message")}
                                    />
                                </div>

                                {/* Bouton d'envoi */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                            w-full md:w-auto inline-flex items-center justify-center px-8 py-4 
                                            bg-gradient-to-r from-blue-600 to-purple-600 
                                            text-white font-semibold rounded-xl
                                            hover:from-blue-700 hover:to-purple-700
                                            transform hover:-translate-y-1 hover:shadow-xl
                                            transition-all duration-300
                                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                                        `}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                {t("contact.button")}
                                                <TbSend className='ml-2 w-5 h-5' />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Section appel à l'action */}
                <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-bold mb-4">{t('contact.cardInfos.text1')}</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {t('contact.cardInfos.text2')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/221770957560"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            <FaWhatsapp className="mr-2" />
                            {t("contact.cardInfos.whatsapp")}
                        </a>
                        <a
                            href="mailto:youssoutraore22@yahoo.com"
                            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaEnvelope className="mr-2" />
                            {t("contact.cardInfos.email")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
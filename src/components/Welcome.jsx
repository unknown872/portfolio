import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Typed from "typed.js";
import { useI18n, useScopedI18n } from '../../locales';
import { FaWhatsapp, FaDownload, FaPlay, FaArrowDown } from 'react-icons/fa';
import { MdWavingHand } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Accueil() {
    const t = useI18n();
    const typedRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        
        // Animation d'apparition progressive
        setTimeout(() => setIsVisible(true), 500);

        // Configuration de Typed.js
        const options = {
            strings: [
                t("accueil.presentation"),
                t("accueil.subtitle"),
                t("accueil.typed.freelancer")
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        };

        if (typedRef.current) {
            const typed = new Typed(typedRef.current, options);
            return () => typed.destroy();
        }
    }, [t]);

    const scrollToNext = () => {
        const nextSection = document.querySelector('#skills, #services');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='accueil' className="relative w-full min-h-screen overflow-hidden">
            {/* Image de fond avec parallaxe */}
            <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-[url('/landing-image.webp')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
                
                {/* Overlay avec dégradé moderne */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/40"></div>
                
                {/* Éléments décoratifs animés */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full min-h-screen flex items-center">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Colonne de gauche - Contenu textuel */}
                        <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {/* Badge de salutation */}
                            <div 
                                data-aos="fade-right" 
                                data-aos-delay="200"
                                className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white font-medium'
                            >
                                <MdWavingHand className="text-yellow-400 animate-bounce" />
                                <span>{t("accueil.presentation")}</span>
                            </div>

                            {/* Titre principal avec animation */}
                            <div data-aos="fade-right" data-aos-delay="400">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    <span className="block text-white mb-2">Je suis</span>
                                    <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        Youssou TRAORE
                                    </span>
                                </h1>
                                
                                {/* Texte animé avec Typed.js */}
                                <div className="mt-6 h-16 flex items-center">
                                    <span className="text-2xl md:text-3xl font-semibold text-gray-300">
                                        <span ref={typedRef}></span>
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div data-aos="fade-right" data-aos-delay="600">
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    {t("accueil.subtitle")}
                                </p>
                            </div>

                            {/* Statistiques rapides */}
                            <div data-aos="fade-right" data-aos-delay="800" className="grid grid-cols-3 gap-6 py-6">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-400">3+</div>
                                    <div className="text-sm text-gray-400">Ans d'expérience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-purple-400">50+</div>
                                    <div className="text-sm text-gray-400">Projets réalisés</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-pink-400">100%</div>
                                    <div className="text-sm text-gray-400">Satisfaction</div>
                                </div>
                            </div>

                            {/* Boutons d'action */}
                            <div data-aos="fade-right" data-aos-delay="1000" className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://wa.me/221770957560"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex align-center items-center justify-center px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <FaWhatsapp className="mr-2 text-xl" />
                                    <span className="flex text-sm">{t("accueil.contact")}</span>
                                    <BsArrowRightShort className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                
                                <a
                                    href="/cv-tra.pdf"
                                    download
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                                >
                                    <FaDownload className="mr-2" />
                                    {t("accueil.download")}
                                    <BsArrowRightShort className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>

                            {/* Technologies principales */}
                            <div data-aos="fade-right" data-aos-delay="1200" className="pt-8">
                                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Technologies principales</p>
                                <div className="flex flex-wrap gap-3">
                                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Colonne de droite - Élément visuel ou image de profil */}
                        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div data-aos="fade-left" data-aos-delay="1400" className="relative">
                                {/* Card flottante avec informations */}
                                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                                    <div className="text-center space-y-6">
                                        {/* Avatar ou logo */}
                                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                                            YT
                                        </div>
                                        
                                        {/* Informations rapides */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-white">Développeur Full-Stack</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Passionné par la création d'expériences numériques exceptionnelles
                                            </p>
                                            
                                            {/* Status en ligne */}
                                            <div className="flex items-center justify-center gap-2 text-green-400">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-sm">Disponible pour de nouveaux projets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Éléments décoratifs flottants */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/30 rounded-full blur-sm animate-float"></div>
                                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500/30 rounded-full blur-sm animate-float animation-delay-1000"></div>
                                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pink-500/40 rounded-full blur-sm animate-float animation-delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indicateur de scroll */}
            <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
                onClick={scrollToNext}
                data-aos="fade-up" 
                data-aos-delay="2000"
            >
                <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
                    <span className="text-sm mb-2">Découvrir plus</span>
                    <FaArrowDown className="text-xl" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
}

export default Accueil;
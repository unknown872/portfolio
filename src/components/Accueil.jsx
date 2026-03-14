import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Typed from "typed.js";
import { useI18n, useScopedI18n } from '../../locales';
import Landing from "/public/landing-image.webp";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Accueil() {
    const t = useI18n();
    const techno = ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.JS'];

    return (
        <section id="accueil" className="relative w-full min-h-screen bg-black overflow-hidden mt-12 md:min-h-[90vh]">
            {/* Image de fond */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-[url('/landing-image.webp')] bg-cover bg-center bg-no-repeat bg-fixed"></div>

                {/* Overlay moderne */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/40 z-10"></div>

                {/* Éléments décoratifs animés */}
                <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
                    <div className="absolute top-10 left-5 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse opacity-70"></div>
                    <div className="absolute bottom-10 right-5 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500 opacity-70"></div>
                </div>
            </div>

            {/* Contenu principal */}
            <div
                data-aos="fade-right"
                className="relative z-30 flex flex-col justify-center py-16 sm:py-20 md:py-24 px-6 sm:px-10 lg:px-16 min-h-screen md:min-h-[80vh]"
            >
                <div className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-16 justify-start items-center sm:items-start">

                    {/* Bloc Texte */}
                    <div className="text-white text-center sm:text-left w-full lg:max-w-2xl">

                        {/* Présentation — INCHANGÉ */}
                        <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-blue-400 bg-opacity-80 text-black rounded-md p-4 w-56 sm:w-64 mx-auto sm:mx-0 shadow-lg mb-6">
                            <span className="font-merriweather text-sm sm:text-base">
                                {t("accueil.presentation")}
                            </span>
                        </div>

                        {/* Titre */}
                        <div className="h-20 flex justify-center sm:justify-start items-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 via-pink-700 to-blue-500 bg-clip-text text-transparent font-poppins">
                                <span className="typing"></span>
                            </h1>
                        </div>

                        {/* Sous-titre */}
                        <p className="mt-6 text-base sm:text-lg capitalize leading-relaxed">
                            {t("accueil.subtitle")}
                        </p>

                        {/* ═══════════════════════════════════════════
                            BOUTONS CTA — Glassmorphism dark + icônes
                            ═══════════════════════════════════════════ */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            {/* Bouton Contact — primaire, accent violet */}
                            <a
                                href="https://wa.me/221770957560"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-500"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(139, 92, 246, 0.35))',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(168, 85, 247, 0.35)',
                                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                }}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, {
                                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(139, 92, 246, 0.5))',
                                        borderColor: 'rgba(168, 85, 247, 0.5)',
                                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 8px 24px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                                        transform: 'translateY(-2px)',
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    Object.assign(e.currentTarget.style, {
                                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(139, 92, 246, 0.35))',
                                        borderColor: 'rgba(168, 85, 247, 0.35)',
                                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(0)',
                                    });
                                }}
                            >
                                {/* Shine sweep au hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 58%, transparent 65%)',
                                    }}
                                />
                                <FaWhatsapp className="w-[18px] h-[18px] relative z-10 transition-transform duration-300 group-hover:scale-110" />
                                <span className="relative z-10">{t("accueil.contact")}</span>
                                <FiArrowUpRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>

                            {/* Bouton CV — secondaire, accent rose */}
                            <a
                                href="/cv-tra.pdf"
                                download
                                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-500"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(236, 72, 153, 0.3)',
                                    boxShadow: '0 0 16px rgba(236, 72, 153, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                                }}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, {
                                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.28))',
                                        borderColor: 'rgba(236, 72, 153, 0.45)',
                                        boxShadow: '0 0 28px rgba(236, 72, 153, 0.2), 0 8px 24px rgba(236, 72, 153, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(-2px)',
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    Object.assign(e.currentTarget.style, {
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderColor: 'rgba(236, 72, 153, 0.3)',
                                        boxShadow: '0 0 16px rgba(236, 72, 153, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                                        transform: 'translateY(0)',
                                    });
                                }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.05) 42%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 58%, transparent 65%)',
                                    }}
                                />
                                <FiDownload className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
                                <span className="relative z-10">{t("accueil.download")}</span>
                            </a>
                        </div>

                        {/* Technologies principales */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="1200"
                            className="pt-10 sm:pt-12"
                        >
                            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                                Technologies principales
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                {techno.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-100 hover:bg-white/10 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accueil;
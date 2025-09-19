import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Typed from "typed.js";
import { useI18n, useScopedI18n } from '../../locales';
import Landing from "/public/landing-image.webp";

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

                        {/* Présentation */}
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

                        {/* Boutons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            <a
                                href="https://wa.me/221770957560"
                                className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-purple-500 hover:bg-purple-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("accueil.contact")}
                            </a>
                            <a
                                href="/cv-tra.pdf"
                                download
                                className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-pink-500 hover:bg-pink-600 transition"
                            >
                                {t("accueil.download")}
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
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Typed from "typed.js";
import { useI18n, useScopedI18n } from '../../locales';

function Accueil() {
    const t = useI18n();

    return (
        <section id='accueil' className="w-full mt-12 h-screen md:h-full bg-black">
            {/* Image de fond */}
            <div className="w-full lg:h-[35rem] h-full  bg-[url('https://img.freepik.com/photos-gratuite/vue-arriere-du-programmeur-travaillant-toute-nuit_1098-18697.jpg?t=st=1738359063~exp=1738362663~hmac=434bd5380bdada8d91eb18851e94cc890a644a885d83849a059a4b3ebba6cb46&w=900')] bg-cover bg-center bg-no-repeat">
                {/* Contenu de la section */}
                <div data-aos="fade-right" className="w-full h-[35rem] relative flex flex-col justify-end md:pb-24 lg:pb-32">
                    <div className="lg:px-16 px-8 flex sm:flex-row flex-col-reverse gap-6 justify-start">
                        {/* Texte à gauche */}
                        <div className="sm:text-left text-center text-white lg:space-y-6 space-y-16">
                            {/* Bloc de présentation */}
                            <div className='bg-gradient-to-r from-rose-400 via-pink-500 to-blue-400 text-center text-black bg-opacity-75 rounded-md p-4 w-[15rem] mx-auto sm:mx-0'>
                                <span className="font-merriweather">{t("accueil.presentation")}</span>
                            </div>
                            {/* Titre avec animation de texte */}
                            <div className='mt-4 h-20 flex md:justify-start justify-center items-center'>
                                <h1 className="text-5xl">
                                    <span className="typing font-semibold bg-gradient-to-r from-rose-500 via-pink-700 to-blue-500 bg-clip-text text-transparent text-5xl font-poppins libre-baskerville-bold text-green-500 mt-2"></span>
                                </h1>
                            </div>
                            {/* Description */}
                            <div>
                                <p className="text-lg capitalize">
                                    {t("accueil.subtitle")}
                                </p>
                                {/* Boutons */}
                                <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
                                    <a href="#contact"  className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-purple-500 hover:bg-purple-600 transition ease-in-out delay-150">
                                        {t("accueil.contact")}
                                    </a>
                                    <a href="/cv-tra.pdf" download className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-pink-500 hover:bg-pink-600 transition ease-in-out delay-150">
                                        {t("accueil.download")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accueil;
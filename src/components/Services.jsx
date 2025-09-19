import React, { useEffect } from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useI18n } from '../../locales';

function Services() {
    const t = useI18n();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }, []);

    const services = [
        {
            icon: FaLaptopCode,
            title: t("services.web.webDev.title"),
            description: t("services.web.webDev.description"),
            gradient: "from-blue-500 to-purple-600",
            delay: 0
        },
        {
            icon: TbDeviceMobileCode,
            title: t("services.web.mobileDev.title"),
            description: t("services.web.mobileDev.description"),
            gradient: "from-purple-500 to-pink-600",
            delay: 200
        },
        {
            icon: MdOutlineScreenSearchDesktop,
            title: t("services.web.optimisation.title"),
            description: t("services.web.optimisation.description"),
            gradient: "from-pink-500 to-red-500",
            delay: 400
        }
    ];

    return (
        <section id="services" className='py-20 w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden'>
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* Titre de section */}
                <div className='text-center mb-16'>
                    <div data-aos="fade-up" className="inline-block">
                        <span className='text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block'>
                            {t('services.banner')}
                        </span>
                        <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
                            {t("services.title")}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* Version Desktop - Layout en grille moderne */}
                <div className='hidden md:block'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={service.delay}
                                    className='group relative'
                                >
                                    {/* Card principale */}
                                    <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full'>
                                        {/* Icône avec fond dégradé */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <IconComponent className='text-2xl text-white' />
                                        </div>
                                        
                                        {/* Contenu */}
                                        <h3 className='text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                                            {service.title}
                                        </h3>
                                        <p className='text-gray-600 leading-relaxed text-sm'>
                                            {service.description}
                                        </p>

                                        {/* Effet de survol */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                    </div>

                                    {/* Indicateur de connexion */}
                                    {index < services.length - 1 && (
                                        <div className='hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300'></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Version Mobile - Layout en colonne avec timeline */}
                <div className='block md:hidden'>
                    <div className='relative'>
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
                        
                        <div className='space-y-12'>
                            {services.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={index}
                                        data-aos="fade-left"
                                        data-aos-delay={service.delay}
                                        className='relative flex items-start space-x-6'
                                    >
                                        {/* Timeline dot avec icône */}
                                        <div className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg z-10`}>
                                            <IconComponent className='text-xl text-white' />
                                        </div>

                                        {/* Contenu de la card */}
                                        <div className='flex-1 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 ml-2'>
                                            <h3 className='text-lg font-bold text-gray-800 mb-3'>
                                                {service.title}
                                            </h3>
                                            <p className='text-gray-600 text-sm leading-relaxed'>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
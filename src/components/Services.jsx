import React, { useEffect } from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    useEffect(() => {
        AOS.init();

    }, []);
    return (
        <section id="services" className=' py-20 w-full h-auto bg-gradient-to-bl from-20% to-80% from-blue-100 to-white'>
            <div className='relative flex justify-center mb-20'>
                <h2 data-aos="fade-right" className='text-3xl font-serif bg-gradient-to-r w-[20rem] from-pink-500 to-blue-500 bg-clip-text text-transparent text-green-500 font-bold text-center'>SERVICES</h2>
            </div>
            {/* Version desktop */}
            <div className='hidden md:flex justify-center relative pb-28 '>
                <div className='absolute gap-20 flex flex-col items-center'>
                    <div data-aos="fade-down" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <FaLaptopCode className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' />
                        <div data-aos="flip-left" className='absolute -top-2 lg:-left-[30rem] lg:w-[30rem] lg:pr-6 -left-[22rem] w-[20rem] pr-2 space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>Développement Web</h3>
                            <p className='text-sm text-gray-500'>Le développement web est essentiel pour créer des applications interactives et des sites web modernes. Nous utilisons des technologies de pointe telles que React, Next.js, et Tailwind CSS, associées à des bases de données comme MySQL et PostgreSQL pour créer des solutions performantes et évolutives adaptées aux besoins de chaque client.</p>
                        </div>
                    </div>
                    <div data-aos="fade-rght" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <TbDeviceMobileCode className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 lg:-right-[32rem] lg:w-[30rem] -right-[22rem] w-[20rem] lg:pl-4 pl-2 space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>Développement Mobile</h3>
                            <p className='text-sm text-gray-500'>La création d'applications mobiles est un secteur clé pour atteindre un large public. Nous développons des applications performantes et fluides pour Android et iOS en utilisant des technologies comme React Native pour garantir une expérience utilisateur optimale sur toutes les plateformes.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <MdOutlineScreenSearchDesktop className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' data-aos="flip-right" />
                        <div data-aos="flip-left" className='absolute -top-2 lg:-left-[30rem] lg:w-[30rem] lg:pr-6 -left-[22rem] w-[20rem] pr-2 space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>Optimisation des moteurs de recherche</h3>
                            <p className='text-sm text-gray-500'>L'optimisation pour les moteurs de recherche (SEO) est cruciale pour améliorer la visibilité d'un site web sur les moteurs de recherche. Nous appliquons les meilleures pratiques SEO pour maximiser la performance de votre site, en optimisant le contenu, les mots-clés, la structure des pages et en améliorant l'autorité du domaine pour atteindre un meilleur classement.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1 h-[30rem] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
            </div>
            {/* Version mobile */}
            <div className='block md:hidden relative h-[35rem] px-6 overflow-hidden'>
                <div className='absolute z-10 gap-28 flex flex-col items-center'>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <FaLaptopCode className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[18rem] w-[18rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>Développement Web</h3>
                            <p className='text-sm text-gray-500'>Le développement web est clé pour créer des applications et sites modernes. Nous utilisons des technologies comme React, Next.js, Tailwind CSS, et des bases de données comme MySQL et PostgreSQL pour des solutions performantes et évolutives.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <TbDeviceMobileCode className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[18rem] w-[18rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>Développement Mobile</h3>
                            <p className='text-sm text-gray-500'>La création d'applications mobiles est cruciale pour toucher un large public. Nous développons des applications performantes pour Android et iOS avec React Native, garantissant une expérience optimale.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <MdOutlineScreenSearchDesktop className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[18rem] w-[18rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>Optimisation des moteurs de recherche</h3>
                            <p className='text-sm text-gray-500'>Le SEO est essentiel pour améliorer la visibilité d'un site. Nous appliquons les meilleures pratiques pour optimiser le contenu, les mots-clés, la structure des pages et l'autorité du domaine, afin d'améliorer le classement.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[4rem] w-1 h-[30rem] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
            </div>
        </section>
    )
}

export default Services
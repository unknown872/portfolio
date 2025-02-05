import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLaptopCode, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { TbMessageDots } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className='py-20 bg-gradient-to-br from-20% to-80% from-blue-100 to-white' id='contact'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row gap-8'>
                    {/* Colonne de gauche : Informations de contact */}
                    <div className='w-full md:w-1/2 lg:px-8'>
                        <div className='space-y-4'>
                            <h3
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                className='uppercase text-xl w-[20rem] bg-gradient-to-r from-pink-500 to-blue-600 font-semibold bg-clip-text text-transparent'
                            >
                                Vous voulez me contacter ?
                            </h3>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                className='flex items-center gap-2 text-blue-950 uppercase'
                            >
                                <span className='text-lg font-semibold'>Entrez en contact</span>
                                <TbMessageDots className='w-6 h-6' />
                            </div>
                            <div className='flex flex-col md:flex-row gap-8 pt-6'>
                                <div
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                    className='w-full md:w-1/2 space-y-2'
                                >
                                    <h3 className='uppercase font-semibold text-blue-950'>Contact</h3>
                                    <div className='space-y-2'>
                                        <p className='text-gray-500'>+221 77 095 75 60</p>
                                        <p className='text-gray-500'>youssoutraore22@yahoo.com</p>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                    className='w-full md:w-1/2 space-y-2'
                                >
                                    <h3 className='uppercase font-semibold text-blue-950'>SOCIAL media</h3>
                                    <div className='flex space-x-2'>
                                        <FaLinkedin className='text-gray-500  w-6 h-6 cursor-pointer' />
                                        <FaInstagram className='text-gray-500 w-6 h-6 cursor-pointer' />
                                        <FaFacebook className='text-gray-500 w-6 h-6 cursor-pointer' />
                                        <FaWhatsapp className='text-gray-500 w-6 h-6 cursor-pointer' />
                                        <FaTelegram className='text-gray-500 w-6 h-6 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite : Formulaire de contact */}
                    <div className='w-full md:w-1/2 lg:px-8'>
                        <div className='space-y-4'>
                            <h3
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                className='uppercase font-semibold text-xl text-blue-950'
                            >
                                Formulaire de contact
                            </h3>
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <p className='text-gray-500'>Envoyez-moi un message</p>
                                <p className='text-gray-500'>Je vous répondrai le plus rapidement possible</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="3000" className='mt-6'>
                                <form className='flex flex-col space-y-4'>
                                    <div className='flex flex-col space-y-2'>
                                        <label className='text-gray-500'>Prénom & Nom</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border-gray-400 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <label className='text-gray-500'>Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-3 py-2 border-gray-400 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <label className='text-gray-500'>Objet</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border-gray-400 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <label className='text-gray-500'>Message</label>
                                        <textarea
                                            rows={4}
                                            className='w-full border-gray-400 px-2 py-1 border focus:border-indigo-600 shadow-sm rounded-lg'
                                        />
                                    </div>
                                    <div>
                                        <button className='bg-gradient-to-r from-pink-500 to-blue-400 text-white px-4 py-2 rounded-lg'>
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
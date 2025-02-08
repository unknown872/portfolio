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
        AOS.init();

    }, []);

    return (
        <section id="services" className=' py-20 w-full h-auto bg-gradient-to-bl from-20% to-80% from-blue-100 to-white'>
            <div className='relative flex justify-center mb-20'>
                <h2 data-aos="fade-right" className='text-3xl font-serif bg-gradient-to-r w-[20rem] from-pink-500 to-blue-500 bg-clip-text text-transparent text-green-500 font-bold text-center'>SERVICES</h2>
            </div>
            {/* Version desktop */}
            <div className='hidden md:flex justify-center relative pb-28 '>
                <div className='absolute gap-20 flex flex-col justify-center items-center'>
                    <div data-aos="fade-down" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <FaLaptopCode className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' />
                        <div data-aos="flip-left" className='absolute -top-2 -left-[20rem] w-[20rem] xl:-left-[30rem] xl:w-[30rem] pr-6 space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>{t("services.web.webDev.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.web.webDev.description")}</p>
                        </div>
                    </div>
                    <div data-aos="fade-rght" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <TbDeviceMobileCode className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[22rem] w-[20rem] xl:-right-[32rem] xl:w-[30rem] pl-4 space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>{t("services.web.mobileDev.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.web.mobileDev.description")}</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-32 h-32 rounded-full border-blue-400'>
                        <MdOutlineScreenSearchDesktop className='text-4xl text-blue-500 absolute top-10 left-[2.69rem]' data-aos="flip-right" />
                        <div data-aos="flip-left" className='absolute -top-2 xl:-left-[30rem] xl:w-[30rem] pr-6 -left-[20rem] w-[20rem] space-y-2'>
                            <h3 className='text-xl text-blue-500 font-bold'>{t("services.web.optimisation.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.web.optimisation.description")}</p>
                        </div>
                    </div>
                </div>
                <div className="w-1 h-[30rem] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
            </div>
            {/* Version mobile */}
            <div className='block md:hidden relative h-[40rem] px-6 overflow-hidden'>
                <div className='absolute z-10 gap-32 flex flex-col items-center'>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <FaLaptopCode className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[16rem] w-[16rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>{t("services.mobile.webDev.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.mobile.webDev.description")}</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <TbDeviceMobileCode className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[16rem] w-[16rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>{t("services.mobile.mobileDev.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.mobile.mobileDev.description")}</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='relative bg-white flex flex-col gap-2 border-4 w-20 h-20 rounded-full border-blue-400'>
                        <MdOutlineScreenSearchDesktop className='text-4xl text-blue-500 absolute top-5 left-[1.2rem]' data-aos="flip-left" />
                        <div data-aos="flip-right" className='absolute -top-2 -right-[16rem] w-[16rem] px-4 space-y-2'>
                            <h3 className='text-lg text-blue-500 font-bold'>{t("services.mobile.optimisation.title")}</h3>
                            <p className='text-sm text-gray-500'>{t("services.mobile.optimisation.description")}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[4rem] w-1 h-[30rem] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
            </div>
        </section>
    )
}

export default Services
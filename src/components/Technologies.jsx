import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaNpm, FaDatabase, FaNode, FaSql } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiJquery, SiTailwindcss, SiFigma, SiCanva, SiPostgresql, SiPrisma, SiMongodb, SiMysql } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useI18n } from '../../locales';

const techIcons = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
    { icon: <SiJquery className="text-blue-500" />, name: "jQuery" },
    { icon: <SiTailwindcss className="text-teal-500" />, name: "TailwindCSS" },
    { icon: <FaReact className="text-blue-400" />, name: "React Native" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    {icon: <FaNode className="text-green-500" />, name: "Node.js"},
    { icon: <FaNodeJs className="text-green-500" />, name: "Express.js" },
    { icon: <FaDatabase className="text-green-500" />, name: "SQL" },
    { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
    {icon: <SiMysql className="text-blue-500" />, name: "MySQL"},
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <FaNpm className="text-red-500" />, name: "NPM" },
    { icon: <SiPrisma className="text-blue-500" />, name: "Prisma" },
    { icon: <SiFigma className="text-purple-500" />, name: "Figma" },
    { icon: <SiCanva className="text-blue-400" />, name: "Canva" }

];

function Technologies() {
    const t = useI18n();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        
    }, []);

    return (
        <section className='py-20 bg-gradient-to-br from-20% to-80% from-blue-100 to-white' id='skills'>
            <div className='relative flex flex-col items-center justify-center mb-14 space-y-4' data-aos="fade-right">
                <h2 className='text-3xl font-serif bg-gradient-to-r w-[20rem] from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold text-center uppercase'>Skills</h2>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">{t("technologies.subtitle")}</p>
            </div>
            <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0">
                <div className="flex flex-wrap justify-center gap-8">
                    {techIcons.map((tech, index) => (
                        <div className="w-24 h-24 flex flex-col hover:bg-slate-100 cursor-default hover:-translate-y-5 hover:transition-all duration-700 items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg" data-aos="fade-down" data-aos-delay={index * 100} key={index} >
                            <div className="text-4xl">{tech.icon}</div>
                            <span className="text-xs mt-2 dark:text-white text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies;

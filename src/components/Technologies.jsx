import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaNpm, FaDatabase, FaNode, FaSql } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiJquery, SiTailwindcss, SiFigma, SiCanva, SiPostgresql, SiPrisma, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useI18n } from '../../locales';

const techCategories = {
    all: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML", level: 90, color: "orange" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", level: 85, color: "blue" },
        { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", level: 88, color: "yellow" },
        { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", level: 82, color: "blue" },
        { icon: <FaReact className="text-blue-400" />, name: "React", level: 90, color: "cyan" },
        { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js", level: 85, color: "gray" },
        { icon: <SiJquery className="text-blue-500" />, name: "jQuery", level: 75, color: "blue" },
        { icon: <SiTailwindcss className="text-teal-500" />, name: "TailwindCSS", level: 92, color: "teal" },
        { icon: <FaNode className="text-green-500" />, name: "Node.js", level: 85, color: "green" },
        { icon: <FaNodeJs className="text-green-500" />, name: "Express.js", level: 80, color: "green" },
        { icon: <FaDatabase className="text-green-500" />, name: "SQL", level: 78, color: "green" },
        { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL", level: 82, color: "blue" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL", level: 80, color: "blue" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", level: 75, color: "green" },
        { icon: <SiPrisma className="text-blue-500" />, name: "Prisma", level: 85, color: "blue" },
        { icon: <FaReact className="text-blue-400" />, name: "React Native", level: 80, color: "cyan" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git", level: 88, color: "red" },
        { icon: <FaNpm className="text-red-500" />, name: "NPM", level: 85, color: "red" },
        { icon: <SiFigma className="text-purple-500" />, name: "Figma", level: 80, color: "purple" },
        { icon: <SiCanva className="text-blue-400" />, name: "Canva", level: 75, color: "cyan" },
        { icon: <SiDocker className="text-blue-400" />, name: "Docker", level: 75, color: "cyan" }
    ],
    frontend: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML", level: 90, color: "orange" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", level: 85, color: "blue" },
        { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", level: 88, color: "yellow" },
        { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", level: 82, color: "blue" },
        { icon: <FaReact className="text-blue-400" />, name: "React", level: 90, color: "cyan" },
        { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js", level: 85, color: "gray" },
        { icon: <SiJquery className="text-blue-500" />, name: "jQuery", level: 75, color: "blue" },
        { icon: <SiTailwindcss className="text-teal-500" />, name: "TailwindCSS", level: 92, color: "teal" },
    ],
    mobile: [
        { icon: <FaReact className="text-blue-400" />, name: "React Native", level: 80, color: "cyan" },
    ],
    backend: [
        { icon: <FaNode className="text-green-500" />, name: "Node.js", level: 85, color: "green" },
        { icon: <FaNodeJs className="text-green-500" />, name: "Express.js", level: 80, color: "green" },
        { icon: <FaDatabase className="text-green-500" />, name: "SQL", level: 78, color: "green" },
        { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL", level: 82, color: "blue" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL", level: 80, color: "blue" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", level: 75, color: "green" },
        { icon: <SiPrisma className="text-blue-500" />, name: "Prisma", level: 85, color: "blue" },
    ],
    tools: [
        { icon: <FaGitAlt className="text-red-500" />, name: "Git", level: 88, color: "red" },
        { icon: <FaNpm className="text-red-500" />, name: "NPM", level: 85, color: "red" },
        { icon: <SiFigma className="text-purple-500" />, name: "Figma", level: 80, color: "purple" },
        { icon: <SiCanva className="text-blue-400" />, name: "Canva", level: 75, color: "cyan" },
        { icon: <SiDocker className="text-blue-400" />, name: "Docker", level: 75, color: "cyan" }

    ],
};

const categoryTitles = {
    all: "Toutes",
    frontend: "Frontend",
    mobile: "Mobile",
    backend: "Backend",
    tools: "Outils"
};

function Technologies() {
    const t = useI18n();
    categoryTitles.all = t("technologies.all");
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredTech, setHoveredTech] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }, []);

    const getColorClasses = (color, isActive = false) => {
        const colors = {
            orange: isActive ? 'bg-orange-500 text-white' : 'text-orange-500 border-orange-200 hover:bg-orange-50',
            blue: isActive ? 'bg-blue-500 text-white' : 'text-blue-500 border-blue-200 hover:bg-blue-50',
            yellow: isActive ? 'bg-yellow-500 text-white' : 'text-yellow-500 border-yellow-200 hover:bg-yellow-50',
            cyan: isActive ? 'bg-cyan-500 text-white' : 'text-cyan-500 border-cyan-200 hover:bg-cyan-50',
            gray: isActive ? 'bg-gray-500 text-white' : 'text-gray-700 border-gray-200 hover:bg-gray-50',
            teal: isActive ? 'bg-teal-500 text-white' : 'text-teal-500 border-teal-200 hover:bg-teal-50',
            green: isActive ? 'bg-green-500 text-white' : 'text-green-500 border-green-200 hover:bg-green-50',
            red: isActive ? 'bg-red-500 text-white' : 'text-red-500 border-red-200 hover:bg-red-50',
            purple: isActive ? 'bg-purple-500 text-white' : 'text-purple-500 border-purple-200 hover:bg-purple-50',
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className='py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden' id='skills'>
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* En-tête de section */}
                <div className='text-center mb-16' data-aos="fade-up">
                    <span className='text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block'>
                        {t("technologies.banner")}
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
                        {t('technologies.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("technologies.subtitle")}
                    </p>
                </div>

                {/* Onglets de catégories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
                    {Object.keys(techCategories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-white/70 text-gray-600 border border-gray-200 hover:bg-white hover:shadow-md'
                                }`}
                        >
                            {categoryTitles[category]}
                        </button>
                    ))}
                </div>

                {/* Grille des technologies */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {techCategories[activeCategory].map((tech, index) => (
                            <div
                                key={`${activeCategory}-${index}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className="group relative"
                                onMouseEnter={() => setHoveredTech(`${activeCategory}-${index}`)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                {/* Card principale */}
                                <div className={`
                                    relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                                    shadow-lg border border-white/30 
                                    hover:shadow-2xl transition-all duration-500 
                                    hover:-translate-y-3 hover:rotate-1
                                    cursor-pointer h-32 flex flex-col items-center justify-center
                                    ${hoveredTech === `${activeCategory}-${index}` ? 'scale-105' : ''}
                                `}>
                                    {/* Icône */}
                                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>

                                    {/* Nom de la technologie */}
                                    <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                                        {tech.name}
                                    </span>

                                    {/* Barre de progression */}
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 delay-200`}
                                                style={{ width: `${tech.level}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Effet de survol avec niveau */}
                                    {hoveredTech === `${activeCategory}-${index}` && (
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
                                            {tech.level}%
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                                        </div>
                                    )}

                                    {/* Effet lumineux au survol */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(tech.color).includes('bg-') ? '' : 'from-blue-400/10 to-purple-400/10'} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section statistiques (optionnelle) */}
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                            <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
                            <div className="text-sm text-gray-600">Technologies</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                            <div className="text-2xl font-bold text-purple-600 mb-1">2+</div>
                            <div className="text-sm text-gray-600">Ans d'expérience</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                            <div className="text-2xl font-bold text-pink-600 mb-1">10+</div>
                            <div className="text-sm text-gray-600">Projets réalisés</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                            <div className="text-2xl font-bold text-teal-600 mb-1">100%</div>
                            <div className="text-sm text-gray-600">Satisfaction client</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies;
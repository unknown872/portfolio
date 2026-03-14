import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaNpm, FaDatabase, FaNode } from 'react-icons/fa';
import { SiTypescript, SiAstro, SiNextdotjs, SiJquery, SiTailwindcss, SiFigma, SiCanva, SiPostgresql, SiPrisma, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
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
        { icon: <SiAstro className="text-pink-600" />, name: "Astro", level: 85, color: "purple" },
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
        { icon: <SiAstro className="text-pink-600" />, name: "Astro", level: 85, color: "purple" },
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

// Couleur de la barre de progression selon la tech
const getProgressGradient = (color) => {
    const gradients = {
        orange: 'from-orange-400 to-orange-600',
        blue: 'from-blue-400 to-blue-600',
        yellow: 'from-yellow-400 to-amber-500',
        cyan: 'from-cyan-400 to-blue-500',
        gray: 'from-gray-400 to-gray-600',
        teal: 'from-teal-400 to-teal-600',
        green: 'from-green-400 to-emerald-600',
        red: 'from-red-400 to-red-600',
        purple: 'from-purple-400 to-purple-600',
    };
    return gradients[color] || gradients.blue;
};

// Couleur du ring glow au hover
const getGlowColor = (color) => {
    const glows = {
        orange: 'rgba(249, 115, 22, 0.25)',
        blue: 'rgba(59, 130, 246, 0.25)',
        yellow: 'rgba(234, 179, 8, 0.25)',
        cyan: 'rgba(34, 211, 238, 0.25)',
        gray: 'rgba(107, 114, 128, 0.2)',
        teal: 'rgba(20, 184, 166, 0.25)',
        green: 'rgba(34, 197, 94, 0.25)',
        red: 'rgba(239, 68, 68, 0.25)',
        purple: 'rgba(168, 85, 247, 0.25)',
    };
    return glows[color] || glows.blue;
};

function Technologies() {
    const t = useI18n();
    categoryTitles.all = t("technologies.all");
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredTech, setHoveredTech] = useState(null);
    const [animatedLevels, setAnimatedLevels] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }, []);

    // Relancer l'animation des barres à chaque changement de catégorie
    useEffect(() => {
        setAnimatedLevels(false);
        const timer = setTimeout(() => setAnimatedLevels(true), 100);
        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <section className='py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden' id='skills'>
            {/* Éléments décoratifs de fond — INCHANGÉS */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* En-tête de section — INCHANGÉ */}
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

                {/* ═══════════════════════════════════════════
                    ONGLETS RETOUCHÉS — Glassmorphism pill bar
                    ═══════════════════════════════════════════ */}
                <div className="flex justify-center mb-14" data-aos="fade-up" data-aos-delay="200">
                    <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
                        {Object.keys(techCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className="relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-400 outline-none"
                                style={{
                                    background: activeCategory === category
                                        ? 'linear-gradient(135deg, #2563eb, #7c3aed)'
                                        : 'transparent',
                                    color: activeCategory === category ? '#fff' : '#6b7280',
                                    boxShadow: activeCategory === category
                                        ? '0 4px 15px -3px rgba(99, 102, 241, 0.4)'
                                        : 'none',
                                    transform: activeCategory === category ? 'scale(1.02)' : 'scale(1)',
                                }}
                            >
                                {categoryTitles[category]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════════════════════════════
                    GRILLE RETOUCHÉE — Glassmorphism tech cards
                    ═══════════════════════════════════════════ */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                        {techCategories[activeCategory].map((tech, index) => {
                            const isHovered = hoveredTech === `${activeCategory}-${index}`;
                            return (
                                <div
                                    key={`${activeCategory}-${index}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 40}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredTech(`${activeCategory}-${index}`)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                >
                                    {/* Tooltip niveau */}
                                    <div
                                        className="absolute -top-11 left-1/2 z-20 flex flex-col items-center pointer-events-none transition-all duration-300"
                                        style={{
                                            transform: `translateX(-50%) ${isHovered ? 'translateY(0)' : 'translateY(6px)'}`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    >
                                        <div className="px-3 py-1.5 bg-gray-900/90 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-xl">
                                            {tech.level}%
                                        </div>
                                        <div className="w-2 h-2 bg-gray-900/90 rotate-45 -mt-1"></div>
                                    </div>

                                    {/* Card glassmorphism */}
                                    <div
                                        className="relative overflow-hidden rounded-2xl cursor-pointer flex flex-col items-center justify-center h-36 p-4 transition-all duration-500"
                                        style={{
                                            background: isHovered
                                                ? 'rgba(255, 255, 255, 0.65)'
                                                : 'rgba(255, 255, 255, 0.40)',
                                            backdropFilter: 'blur(16px)',
                                            WebkitBackdropFilter: 'blur(16px)',
                                            border: `1px solid ${isHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)'}`,
                                            boxShadow: isHovered
                                                ? `0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.5) inset, 0 0 30px ${getGlowColor(tech.color)}`
                                                : '0 8px 24px -8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.4) inset',
                                            transform: isHovered ? 'translateY(-8px) scale(1.04)' : 'translateY(0) scale(1)',
                                        }}
                                    >
                                        {/* Reflet lumineux en haut */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl pointer-events-none"
                                            style={{
                                                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
                                            }}
                                        />

                                        {/* Icône */}
                                        <div
                                            className="text-4xl mb-3 relative z-10 transition-all duration-500"
                                            style={{
                                                transform: isHovered ? 'scale(1.2) translateY(-2px)' : 'scale(1) translateY(0)',
                                                filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none',
                                            }}
                                        >
                                            {tech.icon}
                                        </div>

                                        {/* Nom */}
                                        <span
                                            className="text-xs font-semibold text-center leading-tight relative z-10 transition-colors duration-300"
                                            style={{ color: isHovered ? '#1f2937' : '#4b5563' }}
                                        >
                                            {tech.name}
                                        </span>

                                        {/* Barre de progression glassmorphism */}
                                        <div className="absolute bottom-3 left-3 right-3 z-10">
                                            <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden backdrop-blur-sm">
                                                <div
                                                    className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(tech.color)} transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: animatedLevels ? `${tech.level}%` : '0%',
                                                        transitionDelay: `${index * 50}ms`,
                                                        boxShadow: isHovered ? `0 0 8px ${getGlowColor(tech.color)}` : 'none',
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Glow coloré en arrière-plan au hover */}
                                        <div
                                            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at 50% 80%, ${getGlowColor(tech.color)}, transparent 70%)`,
                                                opacity: isHovered ? 1 : 0,
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ═══════════════════════════════════════════
                    STATISTIQUES RETOUCHÉES — Glassmorphism + compteurs
                    ═══════════════════════════════════════════ */}
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
                        {[
                            { value: "20+", label: "Technologies", gradient: "from-blue-500 to-blue-600" },
                            { value: "2+", label: "Ans d'expérience", gradient: "from-purple-500 to-purple-600" },
                            { value: "10+", label: "Projets réalisés", gradient: "from-pink-500 to-pink-600" },
                            { value: "100%", label: "Satisfaction client", gradient: "from-teal-500 to-teal-600" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="group/stat relative rounded-2xl p-6 cursor-default transition-all duration-500"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.45)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255, 255, 255, 0.35)',
                                    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4) inset',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.5) inset';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4) inset';
                                }}
                            >
                                {/* Reflet */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                                    }}
                                />
                                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 relative z-10`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 relative z-10">
                                    {stat.label}
                                </div>

                                {/* Ligne gradient en bas au hover */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r ${stat.gradient} transition-all duration-500 opacity-0 group-hover/stat:opacity-100`}
                                    style={{ transformOrigin: 'center' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;
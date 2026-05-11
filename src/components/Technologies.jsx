import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaNpm, FaDatabase, FaNode,
} from "react-icons/fa";
import {
    SiTypescript, SiAstro, SiNextdotjs, SiJquery, SiTailwindcss, SiFigma,
    SiCanva, SiPostgresql, SiPrisma, SiMongodb, SiMysql, SiDocker,
} from "react-icons/si";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const allTech = [
    { icon: FaHtml5, name: "HTML", category: "frontend", color: "#e34c26" },
    { icon: FaCss3Alt, name: "CSS", category: "frontend", color: "#1572b6" },
    { icon: FaJs, name: "JavaScript", category: "frontend", color: "#f7df1e", featured: true },
    { icon: SiTypescript, name: "TypeScript", category: "frontend", color: "#3178c6", featured: true },
    { icon: FaReact, name: "React", category: "frontend", color: "#61dafb", featured: true },
    { icon: SiNextdotjs, name: "Next.js", category: "frontend", color: "#ffffff", featured: true },
    { icon: SiAstro, name: "Astro", category: "frontend", color: "#ff5d01" },
    { icon: SiJquery, name: "jQuery", category: "frontend", color: "#0769ad" },
    { icon: SiTailwindcss, name: "TailwindCSS", category: "frontend", color: "#06b6d4", featured: true },
    { icon: FaReact, name: "React Native", category: "mobile", color: "#61dafb" },
    { icon: FaNode, name: "Node.js", category: "backend", color: "#68a063", featured: true },
    { icon: FaNodeJs, name: "Express.js", category: "backend", color: "#68a063" },
    { icon: FaDatabase, name: "SQL", category: "backend", color: "#4479a1" },
    { icon: SiPostgresql, name: "PostgreSQL", category: "backend", color: "#336791" },
    { icon: SiMysql, name: "MySQL", category: "backend", color: "#4479a1" },
    { icon: SiMongodb, name: "MongoDB", category: "backend", color: "#47a248" },
    { icon: SiPrisma, name: "Prisma", category: "backend", color: "#2d3748" },
    { icon: FaGitAlt, name: "Git", category: "tools", color: "#f05033" },
    { icon: FaNpm, name: "NPM", category: "tools", color: "#cb3837" },
    { icon: SiFigma, name: "Figma", category: "tools", color: "#a259ff" },
    { icon: SiCanva, name: "Canva", category: "tools", color: "#00c4cc" },
    { icon: SiDocker, name: "Docker", category: "tools", color: "#2496ed" },
];

// Les noms de fichiers restent en anglais (volontaire pour l'effet "code")
const CATEGORIES = [
    { id: "all", file: "Stack" },
    { id: "frontend", file: "frontend" },
    { id: "backend", file: "backend" },
    { id: "mobile", file: "mobile" },
    { id: "tools", file: "tools" },
];

function Technologies() {
    const t = useTranslations("technologies");
    const [activeCategory, setActiveCategory] = useState("all");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const filteredTech =
        activeCategory === "all" ? allTech : allTech.filter((tech) => tech.category === activeCategory);

    return (
        <section id="skills" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
                <Marquee techs={allTech} speed={60} direction="left" rowY="20%" />
                <Marquee techs={[...allTech].reverse()} speed={80} direction="right" rowY="55%" />
                <Marquee techs={allTech} speed={70} direction="left" rowY="85%" />
            </div>

            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_center,transparent_30%,#0a0a0f_85%)]" />

            <div
                className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)" }}
            />
            <div
                className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="h-px w-8 bg-violet-400/50" />
                        <span className="text-[10px] md:text-[11px] font-mono font-semibold text-violet-400 uppercase tracking-[0.25em]">
                            {t("banner")}
                        </span>
                        <span className="h-px w-8 bg-violet-400/50" />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                        <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                            {t("title")}
                        </span>
                    </h2>

                    <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10"
                >
                    <div className="max-w-3xl mx-auto rounded-t-xl bg-white/[0.02] border border-white/[0.06] border-b-0 overflow-hidden">
                        <div className="flex items-center overflow-x-auto scrollbar-hide">
                            {CATEGORIES.map((cat) => {
                                const isActive = activeCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={clsx(
                                            "relative flex items-center gap-2 px-8 py-4 text-[11px] font-mono transition-colors duration-200 whitespace-nowrap border-r border-white/[0.06]",
                                            isActive ? "text-white bg-white/[0.04]" : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                                        )}
                                    >
                                        <span>{cat.file}</span>

                                        {isActive && (
                                            <motion.span
                                                layoutId="active-tab-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                            <div className="flex-1 border-b border-white/[0.06] self-stretch" />
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[110px] md:auto-rows-[130px]"
                    >
                        {filteredTech.map((tech, index) => (
                            <TechCard
                                key={`${activeCategory}-${tech.name}`}
                                tech={tech}
                                index={index}
                                featuredLabel={t("featured")}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}

function TechCard({ tech, index, featuredLabel }) {
    const Icon = tech.icon;
    const cardRef = useRef(null);
    const isFeatured = tech.featured;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
            className={clsx("group", isFeatured && "sm:col-span-2")}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative w-full h-full p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col"
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), ${tech.color}15, transparent 60%)`,
                    }}
                />

                {isFeatured ? (
                    <div className="flex items-center gap-4 h-full">
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500 relative">
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ background: `${tech.color}30` }} />
                            <Icon className="relative w-6 h-6 md:w-7 md:h-7" style={{ color: tech.color }} />
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            <span className="text-sm md:text-base font-semibold text-white truncate">{tech.name}</span>
                            <span className="text-[9px] font-mono text-cyan-400/70 uppercase tracking-wider">{featuredLabel}</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" style={{ background: `${tech.color}40` }} />
                            <Icon className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-110" style={{ color: tech.color }} />
                        </div>
                        <span className="text-[11px] md:text-xs font-mono text-white/60 group-hover:text-white text-center transition-colors duration-300">
                            {tech.name}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

function Marquee({ techs, speed, direction, rowY }) {
    const duplicated = [...techs, ...techs];

    return (
        <div
            className="absolute left-0 right-0 flex gap-12 whitespace-nowrap"
            style={{ top: rowY, animation: `marquee-${direction} ${speed}s linear infinite` }}
        >
            {duplicated.map((tech, i) => {
                const Icon = tech.icon;
                return (
                    <div key={i} className="flex items-center gap-3 flex-shrink-0">
                        <Icon className="w-8 h-8" style={{ color: tech.color }} />
                        <span className="font-mono text-2xl text-white/60">{tech.name}</span>
                    </div>
                );
            })}
            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}

export default Technologies;
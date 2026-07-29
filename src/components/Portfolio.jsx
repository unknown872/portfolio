import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiPlus } from "react-icons/fi";
import { useTranslations } from "next-intl";
import clsx from "clsx";

// La structure des projets contient une clé i18n pour le titre
const PROJECTS = [
    { key: "afcl", image: "/mockup/afcl-pfl.png", tech: ["Astro", "TypeScript", "React", "Tailwind CSS", "WordPress"], link: "https://africtivistescitizenlab.org/", category: "Web" },
    { key: "acls", image: "/mockup/acls.png", tech: ["Astro", "TypeScript", "React", "Tailwind CSS", "WordPress"], link: "https://citizenlabsenegal.org/", category: "Web" },
    { key: "chatbot", image: "/mockup/chatbot-pfl.webp", tech: ["Next.js", "React", "Tailwind CSS"], link: "https://chatbotcitizenlab.vercel.app/", category: "Web" },
    { key: "quran-app", image: "/mockup/quran-app.webp", tech: ["React", "Tailwind CSS", "API Rest", "Mongoose", "MongoDB", "Node.JS", "Express.JS"], link: "https://quran-app-zeta-silk.vercel.app/", category: "Web" },
    { key: "cinetheque", image: "/mockup/cinetheque.webp", tech: ["React", "Tailwind CSS", "Mongoose", "MongoDB", "Node.JS", "Express.JS"], link: "https://cinetheque-lac.vercel.app/", category: "Web" },
    { key: "monvelo", image: "/mockup/monvelo-prfl.webp", tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "Supabase", "Node.JS"], link: "https://monvelo-frontend.vercel.app/", category: "E-Commerce" },
];

const INITIAL_VISIBLE = 6;

function Portfolio() {
    const t = useTranslations("portfolio");
    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE);

    return (
        <section id="portfolio" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "100px 100px",
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 30%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 30%, transparent 80%)",
                }}
            />

            <div
                className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)" }}
            />
            <div
                className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="h-px w-8 bg-cyan-400/50" />
                        <span className="text-[10px] md:text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-[0.25em]">
                            {t("banner")}
                        </span>
                        <span className="h-px w-8 bg-cyan-400/50" />
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={project.link}
                                project={project}
                                index={index}
                                isInView={isInView}
                                title={t(`projects.${project.key}`)}
                                viewProjectLabel={t("viewProject")}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {PROJECTS.length > INITIAL_VISIBLE && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col items-center mt-14 gap-4"
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.06] hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 backdrop-blur-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

                            <motion.div animate={{ rotate: showAll ? 45 : 0 }} transition={{ duration: 0.3 }} className="relative">
                                <FiPlus className="w-4 h-4 text-cyan-400" />
                            </motion.div>
                            <span className="relative">
                                {showAll
                                    ? t("showLess")
                                    : t("showMore", { count: PROJECTS.length - INITIAL_VISIBLE })}
                            </span>
                        </motion.button>

                        <a
                            href="https://github.com/unknown872?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/40 hover:text-white transition-colors duration-300"
                        >
                            <FiGithub className="w-3.5 h-3.5" />
                            <span>{t("allRepos")}</span>
                            <FiArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isInView, title, viewProjectLabel }) {
    const cardRef = useRef(null);
    const isFeatured = index === 0 || index === 5;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className={clsx("group block", isFeatured && "md:col-span-2 lg:col-span-2")}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative h-full rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                    style={{
                        background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.08), transparent 40%)`,
                    }}
                />

                <div className={clsx("relative overflow-hidden", isFeatured ? "h-72 md:h-96" : "h-56 md:h-64")}>
                    <Image
                        src={project.image}
                        alt={title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono font-semibold text-white/80 uppercase tracking-widest rounded-full">
                            {project.category}
                        </span>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400 text-[#0a0a0f] text-[11px] font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                            <FiExternalLink className="w-3 h-3" />
                            <span>{viewProjectLabel}</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 leading-tight flex items-start justify-between gap-3 group-hover:text-cyan-50 transition-colors duration-300">
                        <span className="line-clamp-2">{title}</span>
                        <FiArrowUpRight className="w-4 h-4 flex-shrink-0 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 text-[10px] font-mono text-white/50 bg-white/[0.03] border border-white/[0.06] rounded-md group-hover:text-white/70 group-hover:border-white/[0.1] transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

export default Portfolio;
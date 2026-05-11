import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const TECHNO = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js"];

function Accueil() {
    const t = useTranslations("accueil");
    const tCommon = useTranslations("common");
    const typedRef = useRef(null);

    useEffect(() => {
        if (!typedRef.current) return;
        const typed = new Typed(typedRef.current, {
            strings: [
                t("roles.fullstack"),
                t("roles.frontend"),
                t("roles.backend"),
                t("roles.specialist"),
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1800,
            loop: true,
            smartBackspace: true,
        });
        return () => typed.destroy();
    }, [t]);

    return (
        <section id="accueil" className="relative w-full min-h-screen bg-[#0a0a0f] overflow-hidden flex items-center">
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.20) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
                }}
            />

            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)" }}
            />

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)" }}
            />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 py-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                    }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                        </span>
                        <span className="text-[11px] font-mono font-medium text-white/70 uppercase tracking-wider">
                            {t("available")}
                        </span>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="text-sm md:text-base font-mono text-cyan-400/80 mb-4"
                    >
                        <span className="text-white/40">$</span> {t("greeting")}
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="mb-6 w-full flex items-center justify-center h-[88px] sm:h-[60px] md:h-[72px] lg:h-[88px]"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-center">
                            <span ref={typedRef} className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent" />
                            <span className="text-cyan-400 animate-pulse ml-1">_</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mb-10"
                    >
                        {t("subtitle")}
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <motion.a
                            href="https://wa.me/221770957560"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-[#0a0a0f] bg-gradient-to-br from-cyan-300 to-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-shadow duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            <FaWhatsapp className="w-[18px] h-[18px] relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            <span className="relative z-10">{t("contact")}</span>
                            <FiArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>

                        <motion.a
                            href="/001-Youssou-Traore.pdf"
                            download
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.06] hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-500 backdrop-blur-sm"
                        >
                            <FiDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-violet-400" />
                            <span>{t("download")}</span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
                        }}
                        className="w-full"
                    >
                        <div className="flex items-center justify-center gap-3 mb-5">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
                            <p className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-[0.2em]">
                                {t("techStack")}
                            </p>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
                        </div>

                        <div className="flex flex-wrap gap-2.5 justify-center">
                            {TECHNO.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                                    whileHover={{ y: -2 }}
                                    className="group relative px-4 py-1.5 text-xs font-mono text-white/70 bg-white/[0.03] border border-white/[0.08] rounded-full hover:border-cyan-500/40 hover:text-white hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
                                >
                                    <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative">{tech}</span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">
                        {tCommon("scroll")}
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Accueil;
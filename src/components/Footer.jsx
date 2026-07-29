import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { useTranslations } from "next-intl";

const SOCIAL_LINKS = [
    { href: "https://github.com/unknown872", icon: FiGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/youssou-traore-6696a0347", icon: FiLinkedin, label: "LinkedIn" },
    { href: "mailto:youssoutraore22@yahoo.com", icon: FiMail, label: "Email" },
];

function Footer() {
    const t = useTranslations("footer");
    const tCommon = useTranslations("common");
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-[#0a0a0f] border-t border-white/[0.06] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/[0.04] via-violet-500/[0.02] to-transparent blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto lg:px-16 px-6 py-10">
                <div className="flex justify-center mb-8">
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-cyan-500/30 transition-colors duration-300"
                        aria-label="Retour en haut"
                    >
                        <FiArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="text-[11px] font-mono font-medium text-white/60 group-hover:text-white uppercase tracking-wider">
                            {tCommon("top")}
                        </span>
                    </motion.button>
                </div>

                <div className="flex items-center justify-center gap-2 mb-8">
                    {SOCIAL_LINKS.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={social.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                whileHover={{ y: -3 }}
                                className="group relative p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-all duration-300" />
                                <Icon className="relative w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
                            </motion.a>
                        );
                    })}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-cyan-400/80">{"<"}</span>
                        <span className="text-white/70 font-medium">Youssou Traore</span>
                        <span className="text-violet-400/80">{"/>"}</span>
                    </div>

                    <p className="text-[11px] font-mono text-white/35 tracking-wide">
                        © {year} — {t("rights")}
                    </p>

                    <p className="text-[11px] font-mono text-white/35 tracking-wide hidden sm:block">
                        <span className="text-white/25">{t("builtWith")}</span>{" "}
                        <span className="text-cyan-400/60">Next.js</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGlobe, FiChevronDown } from "react-icons/fi";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useChangeLocale } from "@/hooks/useChangeLocale";
import enFlag from "../../public/en.webp";
import frFlag from "../../public/fr.webp";

const LANGUAGES = [
    { code: "en", flag: enFlag, label: "English", sub: "Anglais" },
    { code: "fr", flag: frFlag, label: "Français", sub: "French" },
];

const Header = () => {
    const t = useTranslations("header.nav");
    const tCommon = useTranslations("common");
    const { locale, changeLocale } = useChangeLocale();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const dropdownRef = useRef(null);

    const NAV_LINKS = [
        { id: "services", label: t("services") },
        { id: "skills", label: t("skills") },
        { id: "portfolio", label: t("portfolio") },
        { id: "contact", label: t("contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = document.querySelectorAll("section");
            const scrollCenter = window.scrollY + window.innerHeight / 2;
            let closest = "";
            let minDist = Infinity;
            sections.forEach((section) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const center = top + section.offsetHeight / 2;
                if (scrollCenter >= top && scrollCenter <= bottom) {
                    const dist = Math.abs(scrollCenter - center);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = section.id;
                    }
                }
            });
            if (closest) setActiveSection(closest);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsLangOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
                setIsLangOpen(false);
            }
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl backdrop-saturate-150",
                    scrolled
                        ? "bg-[#0a0a0f]/70 border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        : "bg-[#0a0a0f]/40 border-b border-white/[0.03]"
                )}
            >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                <div className="lg:px-16 px-4 flex items-center justify-between py-3">
                    <motion.a href="#accueil" className="relative z-10 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image src="/logo.webp" alt="Logo" width={64} height={64} className="rounded-full relative ring-1 ring-white/10 group-hover:ring-cyan-500/40 transition-all duration-300" />
                    </motion.a>

                    <motion.button
                        className="md:hidden relative z-10 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-cyan-500/30 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-5 relative flex items-center justify-center text-white">
                            <AnimatePresence mode="wait" initial={false}>
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="absolute">
                                        <FiX className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="absolute">
                                        <FiMenu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.button>

                    <div className="hidden md:flex items-center gap-3">
                        <nav className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={clsx(
                                            "relative px-5 py-2.5 text-[13px] font-medium tracking-wide rounded-xl transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
                                            isActive ? "text-white" : "text-white/55 hover:text-white"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-nav-bg"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-500/20"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            {isActive && <span className="text-cyan-400/80 font-mono text-[10px]">./</span>}
                                            {link.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={clsx(
                                    "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 border",
                                    isLangOpen ? "bg-white/[0.08] border-white/[0.12]" : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1]"
                                )}
                                aria-expanded={isLangOpen}
                                aria-haspopup="true"
                            >
                                <div className="w-6 h-4 rounded-sm overflow-hidden ring-1 ring-white/10">
                                    <Image src={locale === "en" ? enFlag : frFlag} alt={locale === "en" ? "English" : "Français"} width={24} height={16} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-mono font-medium text-white/70 uppercase">{locale}</span>
                                <motion.div animate={{ rotate: isLangOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <FiChevronDown className="w-3.5 h-3.5 text-white/50" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden z-50 bg-[#0f0f14]/95 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_20px_48px_rgba(0,0,0,0.5)]"
                                    >
                                        <div className="px-4 py-2.5 border-b border-white/[0.06]">
                                            <p className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                                                <FiGlobe className="w-3 h-3" />
                                                {tCommon("language")}
                                            </p>
                                        </div>
                                        <div className="py-1">
                                            {LANGUAGES.map((lang) => {
                                                const isSelected = locale === lang.code;
                                                return (
                                                    <button
                                                        key={lang.code}
                                                        onClick={() => {
                                                            changeLocale(lang.code);
                                                            setIsLangOpen(false);
                                                        }}
                                                        className={clsx(
                                                            "w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200",
                                                            isSelected ? "bg-cyan-500/10" : "hover:bg-white/[0.04]"
                                                        )}
                                                    >
                                                        <div className="w-7 h-5 rounded-sm overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                                                            <Image src={lang.flag} alt={lang.label} width={28} height={20} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="flex-1 text-left">
                                                            <p className="text-sm font-medium text-white/90">{lang.label}</p>
                                                            <p className="text-[10px] text-white/40 font-mono">{lang.sub}</p>
                                                        </div>
                                                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] flex-shrink-0" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-md"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ y: "-110%" }} animate={{ y: 0 }} exit={{ y: "-110%" }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.06] shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                                <a href="#accueil" onClick={() => setIsMenuOpen(false)}>
                                    <Image src="/logo.webp" alt="Logo" width={56} height={56} className="rounded-full ring-1 ring-white/10" />
                                </a>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors" aria-label="Close menu">
                                    <FiX className="w-5 h-5 text-white/70" />
                                </button>
                            </div>

                            <nav className="px-6 py-6">
                                <p className="text-[10px] font-mono font-semibold text-white/30 uppercase tracking-widest mb-3 px-1">
                                    {tCommon("navigation")}
                                </p>
                                <ul className="flex flex-col gap-2">
                                    {NAV_LINKS.map((link, index) => {
                                        const isActive = activeSection === link.id;
                                        return (
                                            <motion.li
                                                key={link.id}
                                                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.15 + index * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                            >
                                                <a
                                                    href={`#${link.id}`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className={clsx(
                                                        "flex items-center justify-between px-5 py-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-300",
                                                        isActive ? "text-white bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-500/20" : "text-white/55 border border-transparent hover:text-white hover:bg-white/[0.04]"
                                                    )}
                                                >
                                                    <span className="flex items-center gap-2">
                                                        <span className="font-mono text-[10px] text-cyan-400/60">0{index + 1}.</span>
                                                        {link.label}
                                                    </span>
                                                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />}
                                                </a>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <motion.div
                                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.45, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="px-6 py-6"
                            >
                                <p className="text-[10px] font-mono font-semibold text-white/30 uppercase tracking-widest mb-3 flex items-center gap-1.5 px-1">
                                    <FiGlobe className="w-3 h-3" />
                                    {tCommon("language")}
                                </p>
                                <div className="flex gap-3">
                                    {LANGUAGES.map((lang) => {
                                        const isSelected = locale === lang.code;
                                        return (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    changeLocale(lang.code);
                                                    setIsMenuOpen(false);
                                                }}
                                                className={clsx(
                                                    "flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl transition-all duration-300",
                                                    isSelected ? "bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-500/25 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]"
                                                )}
                                            >
                                                <div className="w-6 h-4 rounded-sm overflow-hidden ring-1 ring-white/10">
                                                    <Image src={lang.flag} alt={lang.label} width={24} height={16} className="w-full h-full object-cover" />
                                                </div>
                                                <span className={clsx("text-sm font-mono font-semibold", isSelected ? "text-white" : "text-white/45")}>
                                                    {lang.code.toUpperCase()}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
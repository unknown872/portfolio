import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiGlobe, FiChevronDown } from "react-icons/fi";
import { useI18n, useChangeLocale, useCurrentLocale } from '../../locales';
import enFlag from "../../public/en.webp";
import frFlag from "../../public/fr.webp";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const t = useI18n();
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const navLinks = [
        { id: "services", label: "Services" },
        { id: "skills", label: "Technologies" },
        { id: "portfolio", label: "Portfolio" },
        { id: "contact", label: "Contact" },
    ];

    // Scroll detection pour renforcer le glassmorphism
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Observer des sections visibles
    // Détection de la section active basée sur le scroll
    // Calcule quelle section est la plus proche du centre de l'écran
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollCenter = window.scrollY + window.innerHeight / 2;

            let closestSection = "";
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionCenter = sectionTop + section.offsetHeight / 2;

                // Vérifier que le centre du viewport est dans la section
                if (scrollCenter >= sectionTop && scrollCenter <= sectionBottom) {
                    const distance = Math.abs(scrollCenter - sectionCenter);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = section.id;
                    }
                }
            });

            if (closestSection) {
                setActiveSection(closestSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Appel initial
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fermer le dropdown en cliquant à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fermer le menu mobile en cliquant à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector(".mobile-menu");
            const hamburger = document.querySelector(".hamburger-button");
            if (menu && !menu.contains(event.target) && hamburger && !hamburger.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Bloquer le scroll quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled
                    ? 'rgba(0, 0, 0, 0.65)'
                    : 'rgba(0, 0, 0, 0.40)',
                backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
                WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
                borderBottom: scrolled
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.04)',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    : 'none',
            }}
        >
            <div className="lg:px-16 px-4 flex items-center justify-between py-3">
                {/* Logo — INCHANGÉ */}
                <a href="#accueil" className="text-3xl font-semibold font-serif relative z-10">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                </a>

                {/* Hamburger mobile — redessiné */}
                <button
                    className="md:hidden relative z-10 hamburger-button p-2 rounded-xl transition-all duration-300"
                    onClick={toggleMenu}
                    style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                >
                    <div className="w-6 h-6 relative flex items-center justify-center text-white">
                        <FiMenu
                            className="w-5 h-5 absolute transition-all duration-300"
                            style={{
                                opacity: isMenuOpen ? 0 : 1,
                                transform: isMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0) scale(1)',
                            }}
                        />
                        <FiX
                            className="w-5 h-5 absolute transition-all duration-300"
                            style={{
                                opacity: isMenuOpen ? 1 : 0,
                                transform: isMenuOpen ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0.5)',
                            }}
                        />
                    </div>
                </button>

                {/* ═══════════════════════════════════════════
                    NAV DESKTOP — Glassmorphism dark
                    ═══════════════════════════════════════════ */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Pill container glassmorphism */}
                    <nav
                        className="flex items-center gap-1 px-2 py-1.5 rounded-2xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
                        }}
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className="relative px-5 py-2.5 text-sm font-medium uppercase tracking-wide rounded-xl transition-all duration-400 outline-none"
                                    style={{
                                        color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                                        background: isActive
                                            ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3))'
                                            : 'transparent',
                                        boxShadow: isActive
                                            ? '0 0 20px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                            : 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {link.label}
                                    {/* Point indicateur actif */}
                                    {isActive && (
                                        <span
                                            className="absolute bottom-1 left-1/2 w-1 h-1 rounded-full"
                                            style={{
                                                transform: 'translateX(-50%)',
                                                background: '#ec4899',
                                                boxShadow: '0 0 6px rgba(236, 72, 153, 0.6)',
                                            }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Sélecteur de langue — Glassmorphism dark */}
                    <div className="relative ml-3" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-300 outline-none"
                            style={{
                                background: isOpen
                                    ? 'rgba(255, 255, 255, 0.12)'
                                    : 'rgba(255, 255, 255, 0.06)',
                                border: `1px solid ${isOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)'}`,
                                boxShadow: isOpen
                                    ? '0 8px 24px rgba(0, 0, 0, 0.2)'
                                    : 'none',
                            }}
                            onMouseEnter={(e) => {
                                if (!isOpen) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isOpen) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                }
                            }}
                        >
                            <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm">
                                <Image
                                    src={locale === 'en' ? enFlag : frFlag}
                                    alt={locale === 'en' ? "English" : "Français"}
                                    width={24}
                                    height={16}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs font-medium text-white/70 uppercase">
                                {locale}
                            </span>
                            <FiChevronDown
                                className="w-3.5 h-3.5 text-white/50 transition-transform duration-300"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                            />
                        </button>

                        {/* Dropdown glassmorphism dark */}
                        <div
                            className="absolute right-0 mt-2 w-52 rounded-xl overflow-hidden z-50 transition-all duration-300"
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.96)',
                                pointerEvents: isOpen ? 'auto' : 'none',
                                background: 'rgba(15, 15, 20, 0.85)',
                                backdropFilter: 'blur(24px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <div className="px-4 py-2.5 border-b border-white/5">
                                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                                    <FiGlobe className="w-3 h-3" />
                                    Langue
                                </p>
                            </div>
                            <div className="py-1">
                                {[
                                    { code: 'en', flag: enFlag, label: 'English', sub: 'Anglais' },
                                    { code: 'fr', flag: frFlag, label: 'Français', sub: 'French' },
                                ].map((lang) => {
                                    const isSelected = locale === lang.code;
                                    return (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLocale(lang.code);
                                                setIsOpen(false);
                                            }}
                                            className="w-full px-4 py-3 flex items-center gap-3 transition-all duration-200"
                                            style={{
                                                background: isSelected
                                                    ? 'rgba(236, 72, 153, 0.1)'
                                                    : 'transparent',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <div className="w-7 h-5 rounded-sm overflow-hidden shadow-sm flex-shrink-0">
                                                <Image
                                                    src={lang.flag}
                                                    alt={lang.label}
                                                    width={28}
                                                    height={20}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <p className="text-sm font-medium text-white/90">{lang.label}</p>
                                                <p className="text-[10px] text-white/40">{lang.sub}</p>
                                            </div>
                                            {isSelected && (
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{
                                                        background: '#ec4899',
                                                        boxShadow: '0 0 6px rgba(236, 72, 153, 0.5)',
                                                    }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════
                MENU MOBILE — Glassmorphism dark, fullscreen overlay
                ═══════════════════════════════════════════ */}

            {/* Overlay backdrop */}
            <div
                className="fixed inset-0 z-40 md:hidden transition-all duration-500"
                style={{
                    opacity: isMenuOpen ? 1 : 0,
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: isMenuOpen ? 'blur(8px)' : 'blur(0px)',
                }}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu panel */}
            <div
                className="fixed top-0 left-0 right-0 z-50 mobile-menu md:hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-110%)',
                    background: 'rgba(10, 10, 15, 0.92)',
                    backdropFilter: 'blur(32px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: isMenuOpen ? '0 24px 64px rgba(0, 0, 0, 0.5)' : 'none',
                }}
            >
                {/* Header du menu mobile avec bouton fermer */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                    <a href="#accueil" className="text-3xl font-semibold font-serif" onClick={() => setIsMenuOpen(false)}>
                        <Image
                            src="/logo.webp"
                            alt="Logo"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                    </a>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2.5 rounded-xl transition-all duration-300"
                        style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <FiX className="w-5 h-5 text-white/70" />
                    </button>
                </div>

                {/* Liens de navigation mobile */}
                <nav className="px-6 py-6">
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li
                                    key={link.id}
                                    style={{
                                        opacity: isMenuOpen ? 1 : 0,
                                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.06 + 0.15}s`,
                                    }}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between px-5 py-4 rounded-xl uppercase text-sm font-medium tracking-wide transition-all duration-300"
                                        style={{
                                            color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.55)',
                                            background: isActive
                                                ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))'
                                                : 'transparent',
                                            border: isActive
                                                ? '1px solid rgba(236, 72, 153, 0.15)'
                                                : '1px solid transparent',
                                        }}
                                    >
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{
                                                    background: '#ec4899',
                                                    boxShadow: '0 0 8px rgba(236, 72, 153, 0.5)',
                                                }}
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Séparateur */}
                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Sélecteur de langue mobile */}
                <div
                    className="px-6 py-6"
                    style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0.45s',
                    }}
                >
                    <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3 flex items-center gap-1.5 px-1">
                        <FiGlobe className="w-3 h-3" />
                        Langue
                    </p>
                    <div className="flex gap-3">
                        {[
                            { code: 'en', flag: enFlag, label: 'EN' },
                            { code: 'fr', flag: frFlag, label: 'FR' },
                        ].map((lang) => {
                            const isSelected = locale === lang.code;
                            return (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        changeLocale(lang.code);
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl transition-all duration-300"
                                    style={{
                                        background: isSelected
                                            ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))'
                                            : 'rgba(255, 255, 255, 0.04)',
                                        border: isSelected
                                            ? '1px solid rgba(236, 72, 153, 0.2)'
                                            : '1px solid rgba(255, 255, 255, 0.06)',
                                        boxShadow: isSelected
                                            ? '0 0 20px rgba(236, 72, 153, 0.1)'
                                            : 'none',
                                    }}
                                >
                                    <div className="w-6 h-4 rounded-sm overflow-hidden">
                                        <Image
                                            src={lang.flag}
                                            alt={lang.label}
                                            width={24}
                                            height={16}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: isSelected ? '#fff' : 'rgba(255, 255, 255, 0.45)' }}
                                    >
                                        {lang.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
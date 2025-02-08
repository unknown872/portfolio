import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from '../../locales';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    const t = useI18n();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Observer des sections visibles dans le viewport
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Récupérer l'ID de la section visible
                }
            });
        }, { threshold: 0.5 }); // 50% de la section visible

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Fermer le menu en cliquant à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector(".mobile-menu");
            const hamburger = document.querySelector(".hamburger-button");
            if (menu && !menu.contains(event.target) && !hamburger.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg bg-black/50 backdrop-blur-lg fixed w-full top-0 z-50">
            <div className="flex-1 flex justify-between items-center">
                <a href="#accueil" className="text-3xl font-semibold font-serif">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                </a>
                <button
                    className="md:hidden text-white focus:outline-none hamburger-button"
                    onClick={toggleMenu}
                >
                    <FiMenu className="w-6 h-6" />
                </button>
            </div>

            {/* Overlay pour le menu mobile */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Menu mobile avec effet de glissement du haut vers le bas */}
            <div
                className={`fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 mobile-menu ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}
            >
                <nav className="mt-16 p-4 border-b border-white/10">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a
                                className={`text-white uppercase hover:text-pink-500 block py-2 ${activeSection === "services" ? "text-pink-500" : ""}`}
                                href="#services"
                                onClick={toggleMenu}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className={`text-white uppercase hover:text-pink-500 block py-2 ${activeSection === "skills" ? "text-pink-500" : ""}`}
                                href="#skills"
                                onClick={toggleMenu}
                            >
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a
                                className={`text-white uppercase hover:text-pink-500 block py-2 ${activeSection === "portfolio" ? "text-pink-500" : ""}`}
                                href="#portfolio"
                                onClick={toggleMenu}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className={`text-white uppercase hover:text-pink-500 block py-2 ${activeSection === "contact" ? "text-pink-500" : ""}`}
                                href="#contact"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                        {/* Switcher de langue pour le menu mobile */}
                        <li>
                            <div className="flex items-center space-x-2 py-4">
                                <span className="text-sm uppercase text-white">{locale === 'en' ? 'EN' : 'FR'}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={locale === 'en'}
                                        onChange={() => changeLocale(locale === 'en' ? 'fr' : 'en')}
                                        className="sr-only"
                                    />
                                    <div className="w-11 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500">
                                        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${locale === 'en' ? 'translate-x-5' : ''}`}></div>
                                    </div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Menu pour les écrans plus larges */}
            <div className="hidden md:flex md:items-center md:w-auto w-full">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                        <li>
                            <a
                                className={`md:p-4 py-3 uppercase px-0 block hover:text-pink-500 ${activeSection === "services" ? "text-pink-500" : ""}`}
                                href="#services"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className={`md:p-4 py-3 uppercase px-0 block hover:text-pink-500 ${activeSection === "skills" ? "text-pink-500" : ""}`}
                                href="#skills"
                            >
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a
                                className={`md:p-4 py-3 uppercase px-0 block hover:text-pink-500 ${activeSection === "portfolio" ? "text-pink-500" : ""}`}
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className={`md:p-4 py-3 uppercase px-0 block hover:text-pink-500 md:mb-0 mb-2 ${activeSection === "contact" ? "text-pink-500" : ""}`}
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center space-x-2 ml-6">
                                <span className="text-sm uppercase">{locale === 'en' ? 'EN' : 'FR'}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={locale === 'en'}
                                        onChange={() => changeLocale(locale === 'en' ? 'fr' : 'en')}
                                        className="sr-only"
                                    />
                                    <div className="w-11 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500">
                                        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${locale === 'en' ? 'translate-x-5' : ''}`}></div>
                                    </div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
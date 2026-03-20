import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiEye, FiArrowUpRight } from 'react-icons/fi';
import { useI18n } from '../../locales';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  const t = useI18n();
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      offset: 100 
    });
  }, []);

  const projects = [
    { 
      title: t('portfolio.project11'), 
      image: '/mockup/senegal24.webp', 
      tech: ['HTML/CSS', 'Next.JS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Hygraph'], 
      link: 'https://senegal24.vercel.app/',
      category: 'WEB'
    },
    { 
      title: t('portfolio.project10'), 
      image: '/mockup/monvelo-prfl.webp', 
      tech: ['HTML/CSS', 'Next.JS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Prisma', 'Supabase'], 
      link: 'https://monvelo-frontend.vercel.app/',
      category: 'E-COMMERCE'
    },
    { 
      title: t('portfolio.project9'), 
      image: '/mockup/acls.png', 
      tech: ['HTML/CSS', 'Astro', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React.js', 'WordPress'], 
      link: 'https://citizenlabsenegal.org/',
      category: 'WEB'
    },
    { 
      title: t('portfolio.project8'), 
      image: '/mockup/afcl-pfl.png', 
      tech: ['HTML/CSS', 'Astro', 'JavaScript', 'Tailwind CSS', 'React.js', 'WordPress', 'TypeScript'], 
      link: 'https://africtivistescitizenlab.org/',
      category: 'WEB'
    },
    { 
      title: t('portfolio.project7'), 
      image: '/mockup/chatbot-pfl.webp', 
      tech: ['HTML/CSS', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React.js'], 
      link: 'https://chatbotcitizenlab.vercel.app/',
      category: 'WEB'
    },
    { 
      title: t('portfolio.project6'), 
      image: '/mockup/sylvie.webp', 
      tech: ['HTML/CSS', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React.js', 'PostgreSQL', 'Prisma'], 
      link: 'https://sylvie-app.vercel.app/',
      category: 'E-COMMERCE'
    },
    { 
      title: t('portfolio.project1'), 
      image: '/mockup/uptech.webp', 
      tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'React.js', 'Prisma'], 
      link: 'https://uptechnologie-corpororation.com/',
      category: 'WEB'
    },
    { 
      title: t('portfolio.project3'), 
      image: '/mockup/ibag-frame.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js', 'PostgreSQL', 'JavaScript', 'Prisma'], 
      link: 'https://ibag-couture.vercel.app/',
      category: 'E-COMMERCE'
    },
    { 
      title: t('portfolio.project2'), 
      image: '/mockup/djamo.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'React.js'], 
      link: 'https://djamo-landing.vercel.app/',
      category: 'LANDING'
    },
    { 
      title: t('portfolio.project4'), 
      image: '/mockup/ichiraku.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js'], 
      link: 'https://ichiraku-landing.vercel.app/',
      category: 'LANDING'
    },
    { 
      title: t('portfolio.project5'), 
      image: '/mockup/worlds_fever.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js'], 
      link: 'https://worlds-fever.vercel.app/',
      category: 'WEB'
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      'Next.js': 'bg-black/80 text-white',
      'React.js': 'bg-blue-500/80 text-white',
      'TypeScript': 'bg-blue-600/80 text-white',
      'JavaScript': 'bg-yellow-500/80 text-black',
      'Tailwind CSS': 'bg-teal-500/80 text-white',
      'PostgreSQL': 'bg-blue-700/80 text-white',
      'Prisma': 'bg-gray-700/80 text-white',
      'HTML/CSS': 'bg-orange-500/80 text-white',
      'Astro': 'bg-purple-600/80 text-white',
      'WordPress': 'bg-blue-800/80 text-white',
    };
    return colors[tech] || 'bg-gray-500/80 text-white';
  };

  // Layout pattern : première carte large, puis alternance
  const getCardLayout = (index) => {
    // Première carte : pleine largeur en 2 colonnes
    if (index === 0) return 'md:col-span-2 lg:col-span-2';
    // Les cartes 1 et 2 : normales
    if (index === 1 || index === 2) return 'md:col-span-1 lg:col-span-1';
    // Carte 6 : large
    if (index === 5) return 'md:col-span-2 lg:col-span-2';
    // Le reste : normal
    return 'md:col-span-1 lg:col-span-1';
  };

  const getImageHeight = (index) => {
    if (index === 0 || index === 5) return 'h-72 md:h-80';
    return 'h-56 md:h-64';
  };

  return (
    <section id="portfolio" className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Éléments décoratifs de fond — INCHANGÉS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête de section — INCHANGÉ */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
            {t('portfolio.banner')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            GRILLE RETOUCHÉE — Layout asymétrique + Glassmorphism
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${getCardLayout(index)}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transform: hoveredProject === index ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                boxShadow: hoveredProject === index
                  ? '0 25px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset'
                  : '0 8px 32px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
              }}
            >
              {/* Glassmorphism card background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl z-0" />

              {/* Image du projet */}
              <div className={`relative ${getImageHeight(index)} overflow-hidden`}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={400} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  style={{
                    transform: hoveredProject === index ? 'scale(1.08)' : 'scale(1)',
                    filter: hoveredProject === index ? 'brightness(0.85)' : 'brightness(1)',
                  }}
                />

                {/* Overlay glassmorphism au hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{
                    opacity: hoveredProject === index ? 1 : 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                    backdropFilter: hoveredProject === index ? 'blur(4px)' : 'blur(0px)',
                  }}
                >
                  <div
                    className="flex items-center gap-3 transition-all duration-500"
                    style={{
                      transform: hoveredProject === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                      opacity: hoveredProject === index ? 1 : 0,
                    }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white/25"
                    >
                      <FiEye className="w-4 h-4" />
                      Voir le projet
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full transition-all duration-300 hover:bg-white/40 hover:scale-110"
                    >
                      <FiArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Badge catégorie — glassmorphism */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-white/70 backdrop-blur-md uppercase text-gray-700 text-[10px] font-bold tracking-widest rounded-full border border-white/40">
                    {project.category}
                  </span>
                </div>

                {/* Ligne lumineuse en bas de l'image au hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-700"
                  style={{
                    transform: hoveredProject === index ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>

              {/* Contenu du projet — glassmorphism */}
              <div className="relative z-10 p-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors duration-300"
                >
                  <h3
                    className="text-lg font-bold text-gray-800 mb-3 leading-tight flex items-center gap-2 transition-all duration-300"
                    style={{
                      color: hoveredProject === index ? '#2563eb' : '#1f2937',
                    }}
                  >
                    {project.title}
                    <FiArrowUpRight
                      className="w-4 h-4 transition-all duration-300 flex-shrink-0"
                      style={{
                        transform: hoveredProject === index ? 'translate(2px, -2px)' : 'translate(0, 0)',
                        opacity: hoveredProject === index ? 1 : 0.4,
                      }}
                    />
                  </h3>
                </a>

                {/* Technologies — petites pills glassmorphism */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.filter((v, i, a) => a.indexOf(v) === i).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2.5 py-1 text-[10px] font-semibold rounded-full backdrop-blur-sm transition-all duration-300 ${getTechColor(tech)}`}
                      style={{
                        transform: hoveredProject === index ? 'translateY(0)' : 'translateY(0)',
                        opacity: hoveredProject === index ? 1 : 0.85,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            BOUTON GITHUB RETOUCHÉ — CTA glassmorphism
            ═══════════════════════════════════════════ */}
        <div className="flex justify-center mt-14" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://github.com/unknown872?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex items-center gap-3 px-7 py-3.5 bg-white/50 backdrop-blur-xl border border-white/40 rounded-full text-gray-700 font-medium transition-all duration-500 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
          >
            <FiGithub className="w-5 h-5 transition-transform duration-500 group-hover/btn:rotate-[360deg]" />
            <span className="text-sm">Voir tous mes projets</span>
            <FiArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />

            {/* Glow effect au hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 transition-all duration-500 group-hover/btn:from-blue-600/5 group-hover/btn:via-purple-600/5 group-hover/btn:to-pink-600/5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
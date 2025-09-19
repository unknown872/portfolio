import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
import { useI18n } from '../../locales';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  const t = useI18n();
  const [filter, setFilter] = useState('all');
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
      title: t('portfolio.project6'), 
      image: '/mockup/sylvie.webp', 
      tech: ['HTML/CSS', 'Next.js', "JavaScript", "Tailwind CSS", 'React.js', "PostgreSQL", 'Prisma'], 
      link: 'https://sylvie-app.vercel.app/',
      category: 'E-COMMERCE',
      description: "Site E-commerce pour une boutique de parfumerie"
    },{ 
      title: t('portfolio.project1'), 
      image: '/mockup/uptech.webp', 
      tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'React.js', 'Prisma', 'React.js'], 
      link: 'https://uptechnologie-corpororation.com/',
      category: 'WEB',
      description: "Plateforme technologique moderne avec architecture full-stack"
    },
    { 
      title: t('portfolio.project3'), 
      image: '/mockup/ibag-frame.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js', "PostgreSQL", 'JavaScript', 'Prisma', 'React.js'], 
      link: 'https://ibag-couture.vercel.app/',
      category: 'E-COMMERCE',
      description: "Site e-commerce pour marque de couture avec gestion complète"
    },
    { 
      title: t('portfolio.project2'), 
      image: '/mockup/djamo.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'React.js'], 
      link: 'https://djamo-landing.vercel.app/',
      category: 'landing',
      description: "Landing page moderne pour application fintech"
    },
    { 
      title: t('portfolio.project4'), 
      image: '/mockup/ichiraku.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js'], 
      link: 'https://ichiraku-landing.vercel.app/',
      category: 'landing',
      description: "Site vitrine pour restaurant avec design attractif"
    },
    { 
      title: t('portfolio.project5'), 
      image: '/mockup/worlds_fever.webp', 
      tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js'], 
      link: 'https://worlds-fever.vercel.app/',
      category: 'web',
      description: "Plateforme de divertissement avec interface immersive"
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      'Next.js': 'bg-black text-white',
      'React.js': 'bg-blue-500 text-white',
      'TypeScript': 'bg-blue-600 text-white',
      'JavaScript': 'bg-yellow-500 text-black',
      'Tailwind CSS': 'bg-teal-500 text-white',
      'PostgreSQL': 'bg-blue-700 text-white',
      'Prisma': 'bg-gray-700 text-white',
      'HTML/CSS': 'bg-orange-500 text-white'
    };
    return colors[tech] || 'bg-gray-500 text-white';
  };

  return (
    <section id="portfolio" className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête de section */}
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

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image du projet */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={256} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Overlay au survol */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                      <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <FiEye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Badge de catégorie */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 uppercase text-gray-800 text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-blue-600 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {project.title}
                  </h3>
                </a>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Indicateur de survol */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${
                hoveredProject === index ? 'w-full' : 'w-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bouton de navigation */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/unknown872?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
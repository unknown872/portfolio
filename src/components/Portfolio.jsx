import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  { title: "Site Vitrine de l'Entreprise Up-Tech", image: '/mockup/uptech.webp', tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'React.js', 'Prisma'], link: 'https://uptechnologie-corpororation.com/' },
  { title: "Clone de la page d'accueil Djamo", image: '/mockup/djamo.webp', tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'], link: 'https://djamo-landing.vercel.app/' },
  { title: 'Site E-Commerce pour une parfumerie', image: '/mockup/sylvie.webp', tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'React.js', 'JavaScript', 'Prisma'], link: '#' },
  { title: 'Ichiraku Ramen', image: '/mockup/ichiraku.webp', tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'Vercel'], link: 'https://ichiraku-landing.vercel.app/' },
  { title: 'Worlds Fever', image: '/mockup/worlds_fever.webp', tech: ['HTML/CSS', 'Next.js', 'Tailwind CSS', 'Vercel'], link: 'https://worlds-fever.vercel.app/' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-16 bg-gradient-to-bl from-20% to-80% from-blue-100 to-white'">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0">
        <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col items-center justify-center mb-14 space-y-4'>
          <h2 className="text-4xl font-serif font-semibold text-center bg-gradient-to-r w-[20rem] from-pink-500 to-blue-500 bg-clip-text text-transparent">Portfolio</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">Découvrez quelques-uns de mes projets réalisés.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay={index * 100} key={index} className="bg-white  dark:bg-gray-800 rounded-lg shadow-lg">
              <div className='relative h-60 bg-blue-500 overflow-hidden rounded-lg rounded-b-none'>
                <Image src={project.image} alt={project.title} width={400} height={400} className="object-fill hover:object-cover rounded-lg rounded-b-none h-60 w-full" />
                <a href={project.link} target="_blank">
                  <FiExternalLink className="absolute bottom-2 right-2 text-blue-950 hover:text-gray-700 w-6 h-6 cursor-pointer" />
                </a>
              </div>
              <div key={index} className='h-auto px-4'>
                <h3 className="text-lg font-semibold mt-4 text-center text-blue-950 dark:text-white">{project.title}</h3>
                <div className='px-2 py-4 space-y-2 space-x-2'>
                  {(project.tech || []).map((tech, techIndex) => (
                    <button key={techIndex} className="px-3 py-1 hover:bg-pink-500 text-pink-500 border border-pink-500 rounded-full hover:text-white">
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
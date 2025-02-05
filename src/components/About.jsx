import React from 'react'

function About() {
  return (
    <section
            id="about"
            className="w-full min-h-screen flex items-center bg-gray-100 dark:bg-black"
          >
            <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-10 pb-20 dark:text-white">
              <div className="flex flex-col gap-2 mb-2 md:mb-4">
                <h2 className="text-4xl font-serif font-semibold">
                  À Propos de Moi
                </h2>
                <span className="w-16 h-[4px] bg-green-500 rounded"></span>
                <span className="w-8 h-[4px] bg-green-500 rounded"></span>
              </div>

              <h4 className="capitalize text-xl font-semibold">
                Je suis
                <span className="text-green-500"> Youssou Traore</span>
              </h4>
              <p>
                Passionné par le développement web, j’aime concevoir des
                applications modernes et performantes. Mon expertise s'étend du
                frontend au backend, avec une maîtrise de technologies comme
                JavaScript, TypeScript, React, Next.js, Tailwind CSS et bien
                d’autres.
              </p>
              <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between font-semibold">
                      <span>JavaScript</span>
                      <span>80 %</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[80%] h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-full flex justify-between font-semibold">
                      <span>TypeScript</span>
                      <span>80 %</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[80%] h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-full flex justify-between font-semibold">
                      <span>Next.js</span>
                      <span>90 %</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[90%] h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between font-semibold">
                      <span>React</span>
                      <span>85 %</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[85%] h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between font-semibold">
                      <span>Tailwind CSS</span>
                      <span>90 %</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[90%] h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between font-semibold">
                    <span>React Native</span>
                    <span>80 %</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full">
                    <div className="w-[80%] h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default About
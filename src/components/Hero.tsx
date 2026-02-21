import React from 'react';
import { ArrowDown, Code, Database, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/images/rihab.png" 
                alt="Rihab Lenzeri"
                className="w-80 h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Rihab<span className="text-cyan-400">.</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
              Développeuse Full Stack
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Passionnée par le développement d'applications web et mobiles performantes et modernes. 
              Spécialisée en <span className="text-cyan-400 font-semibold">Angular</span>, 
              <span className="text-amber-400 font-semibold"> Spring Boot</span>, 
              <span className="text-blue-400 font-semibold"> MySQL</span> et 
              <span className="text-cyan-400 font-semibold"> Flutter</span>.
            </p>

            {/* Tech Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Code size={24} />
                <span>Frontend</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-400">
                <Database size={24} />
                <span>Backend</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Smartphone size={24} />
                <span>Mobile</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center font-medium"
              >
                Voir mes projets
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-center font-medium"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
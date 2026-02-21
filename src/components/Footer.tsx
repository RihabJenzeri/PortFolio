import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Rihab<span className="text-cyan-400">.</span>
            </div>
            <p className="text-gray-400 mb-4">
              Développeuse Full Stack passionnée, créatrice de solutions digitales innovantes et performantes.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Basée à Paris, France</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                Développement Web
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                Applications Mobile
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                Architecture Backend
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                Consulting Technique
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'React', 'Spring Boot', 'Flutter', 'MySQL', 'TypeScript', 'Java', 'Node.js'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-slate-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>et</span>
            <Code size={16} className="text-cyan-400" />
            <span>par Rihab Lenzeri</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Projets réalisés', value: '25+' },
    { icon: Users, label: 'Clients satisfaits', value: '15+' },
    { icon: Clock, label: "Années d'expérience", value: '3+' },
    { icon: Target, label: 'Taux de réussite', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">À propos de moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Développeuse Full Stack passionnée
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Je suis une développeuse Full Stack passionnée avec une expertise approfondie dans les technologies 
              modernes. Ma spécialisation couvre l'ensemble de la chaîne de développement, du frontend au backend, 
              en passant par les bases de données et le développement mobile.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mon approche se concentre sur la création d'applications performantes, évolutives et centrées sur 
              l'utilisateur. J'aime relever des défis techniques complexes et transformer des idées en solutions 
              digitales innovantes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-700">Développement d'applications web modernes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-gray-700">Architecture et développement backend</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Applications mobiles cross-platform</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Prête pour votre prochain projet ?</h3>
          <p className="text-cyan-100 mb-6">
            Collaborons ensemble pour donner vie à vos idées et créer des solutions digitales exceptionnelles.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            Démarrons un projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
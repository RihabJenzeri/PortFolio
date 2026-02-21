import React from 'react';
import { Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec Angular, Spring Boot et MySQL. Interface administrative, gestion des commandes, paiements sécurisés.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true,
      stats: { stars: 24, contributors: 3, commits: 156 }
    },
    {
      title: 'Task Management Mobile App',
      description: 'Application mobile de gestion de tâches développée avec Flutter. Synchronisation en temps réel et interface intuitive.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true,
      stats: { stars: 18, contributors: 2, commits: 89 }
    },
    {
      title: 'Restaurant Management System',
      description: 'Système de gestion pour restaurant avec commandes en ligne, gestion du stock et tableau de bord analytique.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 12, contributors: 1, commits: 67 }
    },
    {
      title: 'Real-time Chat Application',
      description: 'Application de chat en temps réel avec Angular et Spring WebSocket. Salles privées, notifications push.',
      technologies: ['Angular', 'Spring WebSocket', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 15, contributors: 2, commits: 94 }
    },
    {
      title: 'IoT Dashboard',
      description: 'Tableau de bord pour visualisation de données IoT en temps réel avec graphiques interactifs et alertes.',
      technologies: ['React', 'Spring Boot', 'InfluxDB'],
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 21, contributors: 3, commits: 112 }
    },
    {
      title: 'Learning Management System',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'AWS'],
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 33, contributors: 4, commits: 203 }
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Projets</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection de projets récents démontrant mes compétences techniques et ma créativité
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Projets Vedettes</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-slate-700">
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Star size={16} />
                        <span>{project.stats.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{project.stats.contributors}</span>
                      </span>
                      <span>{project.stats.commits} commits</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Autres Projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </span>
                    <span>{project.stats.commits} commits</span>
                  </div>

                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      className="flex-1 flex items-center justify-center px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Plus de projets sur GitHub</h3>
            <p className="text-gray-300 mb-6">
              Découvrez tous mes projets, contributions open source et expérimentations sur GitHub
            </p>
            <a 
              href="https://github.com/Rihablenzeri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              <Github size={20} className="mr-2" />
              Voir GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
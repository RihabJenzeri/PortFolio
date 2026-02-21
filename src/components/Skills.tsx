import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, color: 'from-red-500 to-pink-500' },
        { name: 'React', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-teal-400' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 92, color: 'from-green-500 to-emerald-500' },
        { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Java', level: 88, color: 'from-orange-500 to-amber-500' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-violet-500' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 88, color: 'from-blue-500 to-blue-600' },
        { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' },
      ],
    },
    {
      title: 'Mobile & Autres',
      skills: [
        { name: 'Flutter', level: 85, color: 'from-blue-400 to-cyan-400' },
        { name: 'Git', level: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-400 to-amber-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Compétences</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une expertise technique solide couvrant l'ensemble de la stack de développement moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Formation Continue</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Je reste constamment à jour avec les dernières technologies et meilleures pratiques du développement. 
            Ma passion pour l'apprentissage me pousse à explorer continuellement de nouveaux outils et frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
              Angular Certified
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
              Spring Professional
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
              AWS Cloud Practitioner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
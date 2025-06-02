import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "GameHub",
      description: "A comprehensive gaming platform built with React, Node.js, and MongoDB. Features include user authentication, game reviews, and a recommendation system.",
      image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/GhaniHussaini/gamehub",
      demo: "https://gamehub-demo.vercel.app"
    },
    {
      id: 2,
      title: "EduTrack",
      description: "Learning management system for educators with features for course creation, student tracking, and assessment management.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["Next.js", "Firebase", "TypeScript"],
      github: "https://github.com/GhaniHussaini/edutrack",
      demo: "https://edutrack-demo.vercel.app"
    },
    {
      id: 3,
      title: "TaskFlow Mobile",
      description: "A productivity app built with React Native that helps users manage tasks, set reminders, and track progress.",
      image: "https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React Native", "Redux", "Firebase"],
      github: "https://github.com/GhaniHussaini/taskflow-mobile",
      demo: "https://taskflow-demo.vercel.app"
    },
    {
      id: 4,
      title: "Portfolio V2",
      description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/GhaniHussaini/portfolio-v2",
      demo: "https://ghanihussaini.vercel.app"
    }
  ];
  
  const filters = ['all', 'React', 'Next.js', 'React Native', 'Firebase'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="section bg-card/50">
      <div className="container-custom mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-card text-foreground/80 hover:bg-primary/10'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card overflow-hidden group hover:transform hover:translate-y-[-5px]"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
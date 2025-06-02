import React, { useEffect, useRef } from 'react';
import SectionTitle from './common/SectionTitle';
import { Monitor, Server, Smartphone, Database, Cloud } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; color: string }[];
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('appear');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Monitor size={24} />,
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Tailwind CSS", color: "#38B2AC" },
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#000000" },
        { name: "Python", color: "#3776AB" },
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      skills: [
        { name: "React Native", color: "#61DAFB" },
        { name: "Flutter", color: "#02569B" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", color: "#47A248" },
        { name: "PostgreSQL", color: "#4169E1" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={24} />,
      skills: [
        { name: "Docker", color: "#2496ED" },
        { name: "AWS", color: "#FF9900" },
        { name: "Firebase", color: "#FFCA28" },
      ]
    },
  ];
  
  return (
    <section id="skills" className="section">
      <div className="container-custom mx-auto">
        <SectionTitle>My Skills</SectionTitle>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="card p-6 skill-item opacity-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-md bg-primary/10 text-primary">
                  {category.icon}
                </span>
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item opacity-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-foreground/70">Advanced</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${90 - skillIndex * 10}%`, 
                          backgroundColor: skill.color,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
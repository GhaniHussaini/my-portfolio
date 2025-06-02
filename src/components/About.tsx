import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Award, Code, Cpu, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-card/50">
      <div className="container-custom mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-foreground/80 mb-6">
              I'm a Full-Stack & Mobile Developer with a passion for building seamless, 
              high-performance applications. With expertise in both frontend and backend technologies,
              I create digital experiences that combine functionality with intuitive design.
            </p>
            <p className="text-foreground/80 mb-6">
              Currently, I'm focused on expanding my skills in cloud architecture and AI integration,
              while contributing to open-source projects that make a difference.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 p-2 rounded-md text-primary">
                  <Code size={20} />
                </span>
                <div>
                  <h3 className="font-medium">Top Contributor</h3>
                  <p className="text-sm text-foreground/70">Recognized for exceptional open-source contributions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-accent/10 p-2 rounded-md text-accent">
                  <Trophy size={20} />
                </span>
                <div>
                  <h3 className="font-medium">Hackathon Enthusiast</h3>
                  <p className="text-sm text-foreground/70">Regular participant in coding competitions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-secondary/10 p-2 rounded-md text-secondary">
                  <Cpu size={20} />
                </span>
                <div>
                  <h3 className="font-medium">20/100 Days of Code</h3>
                  <p className="text-sm text-foreground/70">Committed to continuous learning and improvement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 flex flex-col items-center justify-center text-center h-40">
              <h3 className="text-3xl font-bold gradient-text mb-2">3+</h3>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center justify-center text-center h-40">
              <h3 className="text-3xl font-bold gradient-text mb-2">15+</h3>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center justify-center text-center h-40">
              <h3 className="text-3xl font-bold gradient-text mb-2">5+</h3>
              <p className="text-foreground/70">Hackathons Won</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center justify-center text-center h-40">
              <h3 className="text-3xl font-bold gradient-text mb-2">500+</h3>
              <p className="text-foreground/70">Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
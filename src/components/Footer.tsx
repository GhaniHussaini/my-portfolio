import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10">
      <div className="container-custom mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Ghani Hussaini</h3>
            <p className="text-foreground/70 max-w-md">
              Full-Stack & Mobile Developer passionate about creating seamless digital experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/GhaniHussaini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full text-foreground/70 hover:text-primary transition-colors hover:transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ghanihussaini/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full text-foreground/70 hover:text-primary transition-colors hover:transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="https://twitter.com/ghanihussaini_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full text-foreground/70 hover:text-primary transition-colors hover:transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            
            <a 
              href="mailto:ghanihussaini.dev@example.com"
              className="p-3 bg-background rounded-full text-foreground/70 hover:text-primary transition-colors hover:transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">
            © {currentYear} Ghani Hussaini. All rights reserved.
          </p>
          
          <p className="text-sm text-foreground/70 flex items-center gap-1">
            Made with <Heart size={14} className="text-error" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
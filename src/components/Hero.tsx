import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const profileImageUrl = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const textRef = useRef<HTMLHeadingElement>(null);

  // Simple typewriter effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const text = "Full-Stack & Mobile Developer";
    let i = 0;
    let isDeleting = false;
    let txt = '';
    
    const type = () => {
      if (isDeleting && txt.length === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        setTimeout(type, 500);
      } else if (isDeleting) {
        txt = text.substring(0, txt.length - 1);
        if (textRef.current) textRef.current.textContent = txt;
        setTimeout(type, 50);
      } else if (txt === text) {
        isDeleting = true;
        setTimeout(type, 2000);
      } else {
        txt = text.substring(0, txt.length + 1);
        if (textRef.current) textRef.current.textContent = txt;
        setTimeout(type, 100);
      }
    };
    
    setTimeout(type, 1000);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="home" className="section min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="container-custom mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm sm:text-base font-medium text-primary mb-2 appear">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 appear delayed-1">
            <span className="gradient-text">Ghani Hussaini</span>
          </h1>
          <h2 ref={textRef} className="text-xl sm:text-2xl text-foreground/80 mb-6 h-8 appear delayed-2"></h2>
          <p className="text-foreground/70 mb-8 max-w-md appear delayed-3">
            A passionate developer with a focus on creating seamless, high-performance applications.
            I thrive on solving complex problems with elegant code and intuitive design.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 appear delayed-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6 appear delayed-5">
            <a href="https://github.com/GhaniHussaini" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ghanihussaini/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/ghanihussaini_" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:ghanihussaini.dev@example.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center appear">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"></div>
            <img 
              src={profileImageUrl} 
              alt="Ghani Hussaini" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
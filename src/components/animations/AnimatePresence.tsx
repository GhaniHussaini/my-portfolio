import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sections = entry.target.querySelectorAll('section');
            sections.forEach((section, index) => {
              setTimeout(() => {
                section.classList.add('appear');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: `${child.props.className || ''} opacity-0`,
            style: { ...child.props.style, animationDelay: `${index * 0.3}s` }
          });
        }
        return child;
      })}
    </div>
  );
};
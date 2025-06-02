import React from 'react';
import SectionTitle from './common/SectionTitle';
import { GitBranch, GitCommit, GitPullRequest, Star } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="section">
      <div className="container-custom mx-auto">
        <SectionTitle>GitHub Stats</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Contribution Activity</h3>
              <span className="p-1 rounded-full bg-success/10 text-success">
                <GitCommit size={16} />
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {Array.from({ length: 35 }).map((_, i) => {
                const intensity = Math.floor(Math.random() * 5);
                let bgClass = 'bg-gray-200 dark:bg-gray-700';
                
                if (intensity === 1) bgClass = 'bg-success/20';
                if (intensity === 2) bgClass = 'bg-success/40';
                if (intensity === 3) bgClass = 'bg-success/60';
                if (intensity === 4) bgClass = 'bg-success/80';
                
                return (
                  <div 
                    key={i} 
                    className={`w-full h-4 rounded-sm ${bgClass}`}
                    title={`${Math.floor(Math.random() * 10)} contributions`}
                  ></div>
                );
              })}
            </div>
            <p className="text-sm text-foreground/70">500+ contributions in the last year</p>
          </div>
          
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Language Distribution</h3>
              <span className="p-1 rounded-full bg-primary/10 text-primary">
                <Code size={16} />
              </span>
            </div>
            
            {[
              { name: 'JavaScript', percentage: 40, color: '#F7DF1E' },
              { name: 'TypeScript', percentage: 30, color: '#3178C6' },
              { name: 'Python', percentage: 15, color: '#3776AB' },
              { name: 'Dart', percentage: 10, color: '#0175C2' },
              { name: 'Other', percentage: 5, color: '#8B5CF6' },
            ].map(lang => (
              <div key={lang.name} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${lang.percentage}%`, 
                      backgroundColor: lang.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card p-6 lg:col-span-1 md:col-span-2">
            <h3 className="font-medium mb-4">GitHub Achievements</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-accent/10 text-accent">
                  <Star size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">300+ Stars</p>
                  <p className="text-xs text-foreground/70">Across all repositories</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-success/10 text-success">
                  <GitBranch size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">50+ Forks</p>
                  <p className="text-xs text-foreground/70">Community interest</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-primary/10 text-primary">
                  <GitPullRequest size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">100+ PRs</p>
                  <p className="text-xs text-foreground/70">Merged contributions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-secondary/10 text-secondary">
                  <Trophy size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium">Top Contributor</p>
                  <p className="text-xs text-foreground/70">Afghanistan Ranking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 flex flex-col items-center">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=GhaniHussaini&show_icons=true&count_private=true&theme=radical&hide=contribs,prs" 
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </div>
          
          <div className="card p-6 flex flex-col items-center">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=GhaniHussaini&layout=compact&theme=radical" 
              alt="Top Languages"
              className="w-full h-auto"
            />
          </div>
          
          <div className="card p-6 flex flex-col items-center">
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=GhaniHussaini&theme=radical" 
              alt="GitHub Streak"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Code: React.FC<{ size: number }> = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Trophy: React.FC<{ size: number }> = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export default Stats;
import React from 'react';
import { motion} from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, CircleDashed } from 'lucide-react'; 

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Completed' | 'In Progress';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
     
      whileHover={{ y: -10 }}
      className="group flex flex-col max-h-fit bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300"
    >
      {/* Image Header */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Modern Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm border
          ${project.status === 'Completed' 
            ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' 
            : 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30' 
          }`}>
          {project.status === 'Completed' ? <CheckCircle2 size={14} /> : <CircleDashed size={14} className="animate-spin-slow" />}
          {project.status}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow items-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-[#00CED1] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack - Self-Correcting Grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {project.tags.map((tag) => tag && (
            <span 
              key={tag} 
              className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-100 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - Pushed to bottom */}
        <div className="mt-auto pt-6 w-full flex justify-center gap-8 border-t border-slate-100 dark:border-slate-800">
          {project.liveUrl && (
            <motion.a 
              whileHover={{ scale: 1.2, color: '#00CED1' }}
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 dark:text-slate-500 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={24} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a 
              whileHover={{ scale: 1.2, color: '#00CED1' }}
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 dark:text-slate-500 transition-colors"
              title="Source Code"
            >
              <Github size={24} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
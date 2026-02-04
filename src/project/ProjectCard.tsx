
import { Github, ExternalLink } from 'lucide-react'; 

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
    <div className="dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-min">
     
      <div className="relative h-44 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm
          ${project.status === 'Completed' 
            ? 'bg-[#22C55E] text-white' // Green for completed
            : 'bg-[#FBBF24] text-slate-900' // Yellow for in progress
          }`}>
          {project.status === 'Completed' ? '✓ Completed' : '⌛ In Progress'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 px-4">
          {project.description}
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 text-slate-700 dark:text-slate-300 font-medium">
          {project.tags.map((tag) => (
            <span key={tag} className="text-lg">{tag}</span>
          ))}
        </div>


        <div className="mt-auto pt-6 w-full flex justify-center gap-6 border-t border-slate-50 dark:border-slate-800">
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-slate-600 hover:text-[#00CED1] transition-colors">
              <ExternalLink size={28} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-slate-600 hover:text-[#00CED1] transition-colors">
              <Github size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
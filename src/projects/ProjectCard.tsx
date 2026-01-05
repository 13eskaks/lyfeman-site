// src/projects/ProjectCard.tsx
interface ProjectCardProps {
  name: string;
  description?: string;
  onClick: () => void;
}

export default function ProjectCard({ name, description, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 border-2 border-gray-200 hover:border-blue-500 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="text-4xl">🤖</div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
      </div>
      
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      )}
      
      <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
        <span>Probar ahora</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}   
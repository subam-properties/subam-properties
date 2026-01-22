import { Project } from "@/types";
import { Badge, Card, CardContent, CardImage } from "@/components/ui";
import { formatPriceRange } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="group h-full">
      <div className="relative h-56">
        <CardImage
          src={project.heroImage}
          alt={project.name}
          className="h-full"
        />
        <div className="absolute top-4 left-4">
          <Badge status={project.status} />
        </div>
      </div>
      <CardContent>
        <div className="mb-2">
          <h3 className="text-xl font-heading font-bold text-primary-900 group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-primary-500 text-sm flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {project.location}, {project.city}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.configurations.map((config) => (
            <span
              key={config}
              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
            >
              {config}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-primary-100">
          <div>
            <p className="text-xs text-primary-500">Starting from</p>
            <p className="text-lg font-bold text-primary-900">
              {formatPriceRange(project.price.min, project.price.max)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

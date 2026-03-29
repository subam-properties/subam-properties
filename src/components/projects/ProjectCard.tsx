import { Project } from "@/types";
import { Badge, Card, CardContent, CardImage } from "@/components/ui";
import { formatPriceRange } from "@/lib/utils";
import { Link } from "@/router";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.city.toLowerCase()}/${project.slug}`} className="block h-full">
      <Card hover className="group h-full">
        {/* Mobile: compact image. Desktop: taller image with overlay */}
        <div className="relative h-44 sm:h-48 lg:h-56">
          <CardImage
            src={project.heroImage}
            alt={project.name}
            className="h-full"
          />
          <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
            <Badge status={project.status} />
          </div>
          {/* Desktop hover overlay */}
          <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300 hidden lg:block" />
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-accent rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2 hidden lg:flex">
            <svg className="w-5 h-5 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <CardContent className="p-4 lg:p-5">
          <div className="mb-2">
            <h3 className="text-lg lg:text-xl font-heading font-bold text-primary-900 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-primary-500 text-xs lg:text-sm flex items-center gap-1 mt-1">
              <svg
                className="w-3.5 h-3.5 lg:w-4 lg:h-4"
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

          <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
            {project.configurations.map((config) => (
              <span
                key={config}
                className="px-2 py-0.5 lg:py-1 bg-primary-50 text-primary-700 text-[10px] lg:text-xs rounded-md"
              >
                {config}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-primary-100">
            <div>
              <p className="text-[10px] lg:text-xs text-primary-500">Starting from</p>
              <p className="text-base lg:text-lg font-bold text-primary-900">
                {formatPriceRange(project.price.min, project.price.max)}
              </p>
            </div>
            {/* Mobile: small arrow. Desktop: "View Details" text */}
            <span className="text-accent text-xs font-semibold hidden lg:inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <svg className="w-5 h-5 text-accent lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

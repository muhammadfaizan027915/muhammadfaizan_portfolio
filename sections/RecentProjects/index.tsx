import ProjectCard from "@components/ProjectCard";
import projects from "@data/projects.json";

export default function RecentProjects() {
  return (
    <div id="projects" className="pt-16 md:pt-36 flex flex-col items-center gap-10">
      <h1 className="text-white font-bold text-center text-4xl lg:text-5xl max-w-96 md:max-w-full">
        A small collection of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h1>

      <div className="flex gap-6 lg:items-center lg:justify-center flex-wrap max-w-7xl px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            containerClasses="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]"
          />
        ))}
      </div>
    </div>
  );
}

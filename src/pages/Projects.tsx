import ProjectCard from "@/components/ProjectCard";
import ComingSoonCard, { ComingSoonCardWide } from "@/components/ComingSoonCard";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { FadeIn } from "@/components/helpers/FadeIn";

const Projects = () => {
  const navigate = useNavigate();
  const isEven = projects.length % 2 === 0;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/")}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> 返回首页
        </button>
      </FadeIn>
      <FadeIn
        delay={0.1}
        yOffset={15}
        duration={0.5}
        className="flex flex-col gap-2"
      >
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
          全部项目
        </h1>
        <p className="text-muted-foreground font-light text-lg">
          这里收录了我近期的作品、业余项目和实验性尝试。这些项目都从零搭建，注重代码清晰和使用体验。
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
        {projects.map((project, idx) => (
          <FadeIn key={project.name} delay={0.15 + idx * 0.05} yOffset={20}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
        {isEven ? (
          <FadeIn delay={0.15 + projects.length * 0.05} yOffset={20} className="col-span-1 sm:col-span-2">
            <ComingSoonCardWide />
          </FadeIn>
        ) : (
          <FadeIn delay={0.15 + projects.length * 0.05} yOffset={20}>
            <ComingSoonCard />
          </FadeIn>
        )}
      </div>
    </main>
  );
};

export default Projects;

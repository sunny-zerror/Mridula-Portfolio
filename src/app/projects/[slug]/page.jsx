import { projectsData } from "@/data/projects";
import ProjectDetail from "@/components/project/ProjectDetail";
import NextProjects from "@/components/project/NextProjects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetail project={project} />
      <NextProjects currentSlug={slug} />
    </>
  );
}

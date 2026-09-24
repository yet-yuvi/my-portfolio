import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-zinc-800 text-3xl font-bold mb-4">GitHub Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <div className="flex flex-wrap justify-center  gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;

import { useState } from 'react';

function ProjectCard({ project }) {
  const [likeCount, setLikeCount] = useState(0);

  const increaseLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
    console.log(`Like count for ${project.title}: ${likeCount}`);
  };

  return (
    <div className="w-86 border-2 border-white p-4 rounded-lg shadow-md flex flex-col justify-between bg-gray-200">
      <div className="flex justify-between items-start gap-2">
        <h3 className="min-w-0 flex-1 text-xl font-semibold mb-2 break-words">
          {project.title}
        </h3>
        <button
          className="flex-none whitespace-nowrap text-xs font-medium text-white bg-blue-500 hover:bg-blue-700 mb-2 py-1 px-2 rounded"
          onClick={increaseLike}
        >
          {`Like ${likeCount}`}
        </button>
      </div>

      <p className="text-gray-600 mb-2 flex-grow">{project.description}</p>
      <div className="flex justify-around items-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-gray-700 transition-colors ease-in-out"
        >
          <span>Source Code</span>
          <span className="text-lg leading-none transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-gray-700 transition-colors ease-in-out"
        >
          <span>View Site</span>
          <span className="text-lg leading-none transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

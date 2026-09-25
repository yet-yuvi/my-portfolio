import { useState } from 'react';

const ReactionButton = ({ reaction, toggleLike }) => {
  return (
    <button
      className={`inline-flex justify-center items-center min-w-[60px] px-2 py-1 text-white text-xs font-medium rounded transition-colors duration-200 ease-in-out active:scale-95 ${
        reaction === 'like'
          ? 'bg-sky-500 hover:bg-sky-600'
          : 'bg-gray-500 hover:bg-gray-600'
      }`}
      onClick={toggleLike}
    >
      {reaction === 'like' ? 'Like' : 'Unlike'}
    </button>
  );
};

function ProjectCard({ project }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="w-86 border-2 border-white p-4 rounded-lg shadow-md flex flex-col justify-between bg-gray-200">
      <div className="flex justify-between items-start gap-2">
        <h3 className="min-w-0 flex-1 text-xl font-semibold mb-2 break-words">
          {project.title}
        </h3>
        {isLiked ? (
          <ReactionButton reaction="unlike" toggleLike={toggleLike} />
        ) : (
          <ReactionButton reaction="like" toggleLike={toggleLike} />
        )}
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

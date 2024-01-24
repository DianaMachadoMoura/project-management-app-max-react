const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const ProjectDetails = ({ selectedProject }) => {
  const formattedDate = new Date(selectedProject.date);

  return (
    <>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h2>
          <button className="text-stone-800 hover:text-stone-950">
            Delete
          </button>
        </div>
        <div className="flex col items-start">
          <p className="text-stone-400 mb-4">
            {formattedDate.toLocaleDateString('en-us', options)}
          </p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {selectedProject.description}
          </p>
        </div>
      </header>
    </>
  );
};

export default ProjectDetails;

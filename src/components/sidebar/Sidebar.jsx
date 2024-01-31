import Button from '../button/Button';

const ProjectsList = ({ projects, onSelectProject, selectedProjectId }) => {
  return (
    <ul className="mt-8">
      {projects.map(({ id, title }) => (
        <li key={id}>
          <button
            className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${
              selectedProjectId === id
                ? 'bg-stone-800 text-stone-200'
                : 'text-stone-400'
            }`}
            onClick={() => onSelectProject(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({
  projects,
  setSelectedProjectId,
  setIsAddProjectOpen,
  selectedProjectId,
}) => {
  const onAddProjectClick = () => {
    setIsAddProjectOpen(true);
    setSelectedProjectId(null);
  };

  const onSelectProject = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onAddProjectClick}>+ Add Project</Button>
      <ProjectsList
        projects={projects}
        onSelectProject={onSelectProject}
        selectedProjectId={selectedProjectId}
      />
    </aside>
  );
};

export default Sidebar;

import Button from '../button/Button';

const ProjectsNav = ({ projects, onSelectProject }) => {
  return (
    <ul className="mt-8">
      {projects.map((project, index) => (
        <li key={index}>
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            onClick={() => onSelectProject(project.id)}
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({ projects, setSelectedProjectId, setIsAddProjectOpen }) => {
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
      <ProjectsNav projects={projects} onSelectProject={onSelectProject} />
    </aside>
  );
};

export default Sidebar;

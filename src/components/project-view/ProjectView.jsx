import NoProjectSelected from './components/no-project-selected/NoProjectSelected';
import NewProject from './components/new-project/NewProject';
import ProjectDetails from './components/project-details/ProjectDetails';

const ProjectView = ({
  selectedProject,
  isAddProjectOpen,
  setIsAddProjectOpen,
  setProjects,
}) => {
  const handleAddProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prev) => [...prev.filter(project => project.id !== projectId)])
  }

  const handleChangeProject = (project) => {
    setProjects((prev) => {
      return prev.map((proj) => {
        if (proj.id === project.id) {
          return project;
        }
        return proj;
      });
    });
  };

  return (
    <div className='mt-24 w-2/3'>
      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onTaskChange={handleChangeProject}
          onDelete={handleDeleteProject}
        />
      ) : isAddProjectOpen ? (
        <NewProject setIsOpen={setIsAddProjectOpen} onSave={handleAddProject} />
      ) : (
        <NoProjectSelected setIsAddProjectOpen={setIsAddProjectOpen} />
      )}
    </div>
  );
};

export default ProjectView;

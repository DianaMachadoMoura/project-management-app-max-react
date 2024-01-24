import NoProjectSelected from './components/no-project-selected/NoProjectSelected';
import NewProject from './components/new-project/NewProject';
import ProjectDetails from './components/project-details/ProjectDetails';

const ProjectView = ({
  selectedProject,
  isAddProjectOpen,
  setIsAddProjectOpen,
  setProjects,
}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      {selectedProject ? (
        <ProjectDetails selectedProject={selectedProject} />
      ) : isAddProjectOpen ? (
        <NewProject setIsOpen={setIsAddProjectOpen} onSave={setProjects} />
      ) : (
        <NoProjectSelected setIsAddProjectOpen={setIsAddProjectOpen} />
      )}
    </div>
  );
};

export default ProjectView;

import NoProjectSelected from './components/no-project-selected/NoProjectSelected';
import NewProject from './components/new-project/NewProject';
import ProjectDetails from './components/project-details/ProjectDetails';

const ProjectView = ({
  selectedProject,
  isAddProjectOpen,
  setIsAddProjectOpen,
  onAddProject,
  onChangeProject,
  onDeleteProject,
}) => {
  return (
    <div className="mt-24 w-2/3">
      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onTaskChange={onChangeProject}
          onDelete={onDeleteProject}
        />
      ) : isAddProjectOpen ? (
        <NewProject setIsOpen={setIsAddProjectOpen} onSave={onAddProject} />
      ) : (
        <NoProjectSelected setIsAddProjectOpen={setIsAddProjectOpen} />
      )}
    </div>
  );
};

export default ProjectView;
